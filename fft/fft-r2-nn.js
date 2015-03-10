var n;
var halfN;
var pairsInGroup;
var numberOfGroups;
var distance;
var notSwitchInput;
var debug = 0;

function FFTRadix2Core (aReal, aImag, bReal, bImag)
{
    var index = 0;
    for (var k = 0; k < numberOfGroups; ++k) {
        var jfirst = 2 * k * pairsInGroup;
        var jlast = jfirst + pairsInGroup - 1;
        var jtwiddle = k * pairsInGroup;
        var omega = -2 * Math.PI * jtwiddle / n;
        var wr = Math.cos(omega);
        var wi = Math.sin(omega);

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

function iFFTRadix2Core (aReal, aImag, bReal, bImag)
{
    var index = 0;
    for (var k = 0; k < numberOfGroups; ++k) {
        var jfirst = 2 * k * pairsInGroup;
        var jlast = jfirst + pairsInGroup - 1;
        var jtwiddle = k * pairsInGroup;
        var omega = 2 * Math.PI * jtwiddle / n;
        var wr = Math.cos(omega);
        var wi = Math.sin(omega);

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

function ifftScale(xr, xi)
{
    var n = xr.length;
    var factor = 1 / n;
    for (var k = 0; k < n; ++k) {
        xr[k] *= factor;
        xi[k] *= factor;
    }
}
   
