var n;
var halfN;
var pairsInGroup;
var numberOfGroups;
var distance;
var notSwitchInput;

function fftRadix2InPlaceCore (aReal, aImag, bReal, bImag)
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
            bReal[index] = aReal[j] + tr;
            bImag[index] = aImag[j] + ti;
            bReal[index + halfN] = aReal[j] - tr;
            bImag[index + halfN] = aImag[j] - ti;
            ++index;
        }
    }
}

function fftRadix2InPlace (xr, xi)
{
    n = xr.length;
    halfN = n >> 1;
    pairsInGroup = halfN;
    numberOfGroups = 1;
    distance = halfN;
    notSwitchInput = true;

    var aReal = new Float64Array(n);
    var aImag = new Float64Array(n);
    var bReal = new Float64Array(n);
    var bImag = new Float64Array(n);

    aReal.set(xr);
    aImag.set(xi);

    while (numberOfGroups < n) {
        fftRadix2InPlaceCore(aReal, aImag, bReal, bImag);
        {
            var tmp = aReal;
            aReal = bReal;
            bReal = tmp;
            tmp = aImag;
            aImag = bImag;
            bImag = tmp;
        }
        notSwitchInput = !notSwitchInput;
        pairsInGroup >>= 1;
        numberOfGroups <<= 1;
        distance >>= 1;
    }

    if (notSwitchInput) {
        return [aReal, aImag];
    } else {
        return [bReal, bImag];
    }
}
            
var xr = new Float64Array(4);
var xi = new Float64Array(4);

for (var k = 0; k < 4; ++k) {
    xr[k] = k;
}
