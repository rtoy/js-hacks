var n;
var halfN;
var pairsInGroup;
var numberOfGroups;
var distance;
var notSwitchInput;
var debug = 0;

// Core routine that does one stage of the FFT, implementing all of
// the butterflies for that stage.
function FFTRadix2Core (aReal, aImag, bReal, bImag)
{
    var index = 0;
    for (var k = 0; k < numberOfGroups; ++k) {
        var jfirst = 2 * k * pairsInGroup;
        var jlast = jfirst + pairsInGroup - 1;
        var jtwiddle = k * pairsInGroup;
        var omega = -2 * Math.PI * jtwiddle / n;
        var wr = Math.fround(Math.cos(omega));
        var wi = Math.fround(Math.sin(omega));

        for (var j = jfirst; j <= jlast; ++j) {
            // temp = w * a[j + distance]
            var idx = j + distance;
            var tr = wr * aReal[idx] - wi * aImag[idx];
            var ti = wr * aImag[idx] + wi * aReal[idx];

            if (debug > 0) {
                console.log("k = " + k
                            + ", jfirst/jlast = " + jfirst + " " + jlast
                            + ", jtwiddle = " + jtwiddle
                            + ", dist = " + distance
                            + ", index = " + index
                            + ", w = " + wr + ", " + wi);
            }
            bReal[index] = aReal[j] + tr;
            bImag[index] = aImag[j] + ti;
            bReal[index + halfN] = aReal[j] - tr;
            bImag[index + halfN] = aImag[j] - ti;
            ++index;
        }
    }
}

// Forward out-of-place complex FFT.
//
// Computes the forward FFT, b,  of a complex vector x:
//
//   b[k] = sum(x[n] * W^(k*n), n, 0, N - 1), k = 0, 1,..., N-1
//
// where
//   N = length of x, which must be a power of 2 and
//   W = exp(-2*i*pi/N)
//
//   x = |xr| + i*|xi|
//   b = |bReal| + i*|bImag|
function fft (xr, xi, bReal, bImag)
{
    n = xr.length;
    halfN = n >> 1;
    pairsInGroup = halfN;
    numberOfGroups = 1;
    distance = halfN;
    notSwitchInput = true;

    var aReal = new Float32Array(n);
    var aImag = new Float32Array(n);

    // This depends on n being a power of 2 and Math.log2 returning an
    // exact integer!
    var logn = Math.floor(Math.log2(n));

    // Arrange it so that the last iteration puts the desired output
    // in bReal/bImag.
    if (logn & 1 == 1) {
        FFTRadix2Core(xr, xi, bReal, bImag);
        notSwitchInput = !notSwitchInput;
    } else {
        FFTRadix2Core(xr, xi, aReal, aImag);
    }

    pairsInGroup >>= 1;
    numberOfGroups <<= 1;
    distance >>= 1;

    while (numberOfGroups < n) {
        if (debug > 0) {
            console.log("numberOfGroups = " + numberOfGroups);
        }

        if (notSwitchInput) {
            FFTRadix2Core(aReal, aImag, bReal, bImag);
        } else {
            FFTRadix2Core(bReal, bImag, aReal, aImag);
        }

        if (debug > 0) {
            console.log("bReal = ");
            console.log(bReal);
            console.log("bImag = ");
            console.log(bImag);
        }

        notSwitchInput = !notSwitchInput;
        pairsInGroup >>= 1;
        numberOfGroups <<= 1;
        distance >>= 1;
    }

    return [bReal, bImag];
}

// Core routine that does one stage of the FFT, implementing all of
// the butterflies for that stage.  This is identical to
// FFTRadix2Core, except the twiddle factor, w, is the conjugate.
function iFFTRadix2Core (aReal, aImag, bReal, bImag)
{
    var index = 0;
    for (var k = 0; k < numberOfGroups; ++k) {
        var jfirst = 2 * k * pairsInGroup;
        var jlast = jfirst + pairsInGroup - 1;
        var jtwiddle = k * pairsInGroup;
        var omega = 2 * Math.PI * jtwiddle / n;
        var wr = Math.fround(Math.cos(omega));
        var wi = Math.fround(Math.sin(omega));

        for (var j = jfirst; j <= jlast; ++j) {
            // temp = w * a[j + distance]
            var idx = j + distance;
            var tr = wr * aReal[idx] - wi * aImag[idx];
            var ti = wr * aImag[idx] + wi * aReal[idx];

            if (debug > 0) {
                console.log("k = " + k
                            + ", jfirst/jlast = " + jfirst + " " + jlast
                            + ", jtwiddle = " + jtwiddle
                            + ", dist = " + distance
                            + ", index = " + index
                            + ", w = " + wr + ", " + wi);
            }
            bReal[index] = aReal[j] + tr;
            bImag[index] = aImag[j] + ti;
            bReal[index + halfN] = aReal[j] - tr;
            bImag[index + halfN] = aImag[j] - ti;
            ++index;
        }
    }
}

// Inverse out-of-place complex FFT.
//
// Computes the inverse FFT, b,  of a complex vector x:
//
//   b[k] = sum(x[n] * W^(-k*n), n, 0, N - 1), k = 0, 1,..., N-1
//
// where
//   N = length of x, which must be a power of 2 and
//   W = exp(-2*i*pi/N)
//
//   x = |xr| + i*|xi|
//   b = |bReal| + i*|bImag|
//
// Note that ifft(fft(x)) = N * x.  To get x, call ifftScale to scale
// the output of the ifft appropriately.
function ifft (xr, xi, bReal, bImag)
{
    n = xr.length;
    halfN = n >> 1;
    pairsInGroup = halfN;
    numberOfGroups = 1;
    distance = halfN;
    notSwitchInput = true;

    var aReal = new Float32Array(n);
    var aImag = new Float32Array(n);

    // This depends on n being a power of 2 and Math.log2 returning an
    // exact integer!
    var logn = Math.floor(Math.log2(n));

    // Arrange it so that the last iteration puts the desired output
    // in bReal/bImag.
    if (logn & 1 == 1) {
        iFFTRadix2Core(xr, xi, bReal, bImag);
        notSwitchInput = !notSwitchInput;
    } else {
        iFFTRadix2Core(xr, xi, aReal, aImag);
    }

    pairsInGroup >>= 1;
    numberOfGroups <<= 1;
    distance >>= 1;

    while (numberOfGroups < n) {
        if (debug > 0) {
            console.log("numberOfGroups = " + numberOfGroups);
        }

        if (notSwitchInput) {
            iFFTRadix2Core(aReal, aImag, bReal, bImag);
        } else {
            iFFTRadix2Core(bReal, bImag, aReal, aImag);
        }

        if (debug > 0) {
            console.log("bReal = ");
            console.log(bReal);
            console.log("bImag = ");
            console.log(bImag);
        }

        notSwitchInput = !notSwitchInput;
        pairsInGroup >>= 1;
        numberOfGroups <<= 1;
        distance >>= 1;
    }

    return [bReal, bImag];
}

//
// Scales the IFFT by 1/N, done in place.
function ifftScale(xr, xi)
{
    var n = xr.length;
    var factor = 1 / n;
    for (var k = 0; k < n; ++k) {
        xr[k] *= factor;
        xi[k] *= factor;
    }
}
