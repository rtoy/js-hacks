// Some test utilities for testing the FFT implementation.

function snrdB (expectedReal, expectedImag, actualReal, actualImag)
{
    var signalPower = 0;
    var noisePower = 0;

    for (var k = 0; k < expectedReal.length; ++k) {
        signalPower += expectedReal[k] * expectedReal[k] + expectedImag[k] * expectedImag[k];
        var diff = expectedReal[k] - actualReal[k];
        noisePower += diff * diff;
        diff = expectedImag[k] - actualImag[k];
        noisePower += diff * diff;
    }

    if (noisePower > 0) {
        return 10 * Math.log10(signalPower / noisePower);
    } else {
        return 1000;
    }
}

function generateComplexTestSignal(length, signalType)
{
    if (signalType == "rampComplex") {
        var xr = new Float32Array(length);
        var xi = new Float32Array(length);
        var er = new Float32Array(length);
        var ei = new Float32Array(length);

        for (var k = 0; k < length; ++k) {
            xr[k] = k;
            xi[k] = k;
        }

        // The FFT of a complex ramp:
        //
        // X[0] = sum(n + %i*n, n, 0, N-1)
        //      = N*(N-1)/2*(1+%i)
        //
        // for k > 0:
        // X[k] = sum((n+%i*n)*W^(k*n), n, 0, N - 1)
        //      = N/2*(-1 + %i * cos(%pi*k/N) / sin(%pi*k/N))
        //      = -N/2 + %i * N/2 * cos(%pi*k/N) / sin(%pi*k/N)
        var omega = Math.PI / length;
        var factor = length / 2;
        er[0] = length * (length - 1)/2;
        ei[0] = er[0];
        for (var k = 1; k < length; ++k) {
            var ratio = Math.cos(omega * k) / Math.sin(omega * k);
            er[k] = -factor * (1 + ratio);
            ei[k] = -factor * (1 - ratio);
        }

        return {signal: [xr, xi],
                expected: [er, ei]};
    } else if (signalType == "rampReal") {
        var xr = new Float32Array(length);
        var er = new Float32Array(length);
        var ei = new Float32Array(length);
        
        for (var k = 0; k < length; ++k) {
            xr[k] = k;
        }
        // The FFT of a complex ramp:
        //
        // X[0] = sum(n, n, 0, N-1)
        //      = N*(N-1)/2
        //
        // for k > 0:
        // X[k] = sum(n*W^(k*n), n, 0, N - 1)
        //      = N/2*(-1 + %i * cos(%pi*k/N) / sin(%pi*k/N))
        //      = -N/2 + %i * N/2 * cos(%pi*k/N) / sin(%pi*k/N)
        var omega = Math.PI / length;
        var factor = length / 2;
        er[0] = length * (length - 1)/2;
        ei[0] = 0;
        for (var k = 1; k < length; ++k) {
            var ratio = Math.cos(omega * k) / Math.sin(omega * k);
            er[k] = -factor;
            ei[k] = factor * ratio;
        }

        return {signal: [xr],
                expected: [er, ei]};
    } else {
        return [];
    }
}
