describe(
    "Test Complex FFTs lengths with complex Ramp",
    function () {
        it("CFFT length 4",
           function () {
               var fft = new FFT(2);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(323.56);
           });

        it("CFFT length 8",
           function () {
               var fft = new FFT(3);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(330.55);
           });

        it("CFFT length 16",
           function () {
               var fft = new FFT(4);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(155.21);
           });

        it("CFFT length 32",
           function () {
               var fft = new FFT(5);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(153.59);
           });

        it("CFFT length 64",
           function () {
               var fft = new FFT(6);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(147.87);
           });

        it("CFFT length 128",
           function () {
               var fft = new FFT(7);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(152.51);
           });

        it("CFFT length 256",
           function () {
               var fft = new FFT(8);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(147.77);
           });

        it("CFFT length 512",
           function () {
               var fft = new FFT(9);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(147.05);
           });

        it("CFFT length 1024",
           function () {
               var fft = new FFT(10);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(151.10);
           });

        it("CFFT length 2048",
           function () {
               var fft = new FFT(11);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(152.60);
           });

        it("CFFT length 4096",
           function () {
               var fft = new FFT(12);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(152.72);
           });

        it("CFFT length 8192",
           function () {
               var fft = new FFT(13);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(150.98);
           });

        it("CFFT length 16384",
           function () {
               var fft = new FFT(14);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(150.44);
           });

        it("CFFT length 32768",
           function () {
               var fft = new FFT(15);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(150.28);
           });
        it("CFFT length 65536",
           function () {
               var fft = new FFT(16);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(151.49);
           });
        it("CFFT length 131072",
           function () {
               var fft = new FFT(17);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(151.68);
           });
    });

describe(
    "Test Inverse Complex FFTs lengths with complex Ramp",
    function () {
        it("Inverse CFFT length 4",
           function () {
               var fft = new FFT(2);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(999);
           });

        it("Inverse CFFT length 8",
           function () {
               var fft = new FFT(3);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(159.93);
           });

        it("Inverse CFFT length 16",
           function () {
               var fft = new FFT(4);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(152.20);
           });

        it("Inverse CFFT length 32",
           function () {
               var fft = new FFT(5);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(150.83);
           });

        it("Inverse CFFT length 64",
           function () {
               var fft = new FFT(6);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(147.08);
           });

        it("Inverse CFFT length 128",
           function () {
               var fft = new FFT(7);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(148.53);
           });

        it("Inverse CFFT length 256",
           function () {
               var fft = new FFT(8);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(145.81);
           });

        it("Inverse CFFT length 512",
           function () {
               var fft = new FFT(9);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(145.54);
           });

        it("Inverse CFFT length 1024",
           function () {
               var fft = new FFT(10);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(145.98);
           });

        it("Inverse CFFT length 2048",
           function () {
               var fft = new FFT(11);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(145.99);
           });

        it("Inverse CFFT length 4096",
           function () {
               var fft = new FFT(12);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(144.62);
           });

        it("Inverse CFFT length 8192",
           function () {
               var fft = new FFT(13);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(144.59);
           });

        it("Inverse CFFT length 16384",
           function () {
               var fft = new FFT(14);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(144.00);
           });

        it("Inverse CFFT length 32768",
           function () {
               var fft = new FFT(15);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(143.52);
           });

        it("Inverse CFFT length 65536",
           function () {
               var fft = new FFT(16);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(143.35);
           });

        it("Inverse CFFT length 131072",
           function () {
               var fft = new FFT(17);
               var test = generateComplexTestSignal(fft.N, "rampComplex");
               var outr = new Float32Array(fft.N);
               var outi = new Float32Array(fft.N);
               fft.ifft(test.expected[0], test.expected[1], outr, outi);
               fft.ifftScale(outr, outi);
               var snr = snrdB(test.signal[0], test.signal[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(143.05);
           });
    });

describe(
    "Test exceptions",
    function () {
        it("Invalid FFT order 1",
           function () {
               expect(function () { new FFT(1); })
                   .toThrow();
           });
        it("Invalid FFT order -1",
           function () {
               expect(function () { new FFT(-1); })
                   .toThrow();
           });
    });
