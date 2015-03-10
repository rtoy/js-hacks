describe(
    "Test FFTs lengths with complex Ramp",
    function () {
        it("CFFT length 4",
           function () {
               var test = generateComplexTestSignal(4, "rampComplex");
               var outr = new Float32Array(4);
               var outi = new Float32Array(4);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(323.56);
           });

        it("CFFT length 8",
           function () {
               var test = generateComplexTestSignal(8, "rampComplex");
               var outr = new Float32Array(8);
               var outi = new Float32Array(8);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(330.55);
           });

        it("CFFT length 16",
           function () {
               var test = generateComplexTestSignal(16, "rampComplex");
               var outr = new Float32Array(16);
               var outi = new Float32Array(16);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(157.04);
           });

        it("CFFT length 32",
           function () {
               var test = generateComplexTestSignal(32, "rampComplex");
               var outr = new Float32Array(32);
               var outi = new Float32Array(32);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(155.31);
           });

        it("CFFT length 64",
           function () {
               var test = generateComplexTestSignal(64, "rampComplex");
               var outr = new Float32Array(64);
               var outi = new Float32Array(64);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(148.08);
           });

        it("CFFT length 128",
           function () {
               var test = generateComplexTestSignal(128, "rampComplex");
               var outr = new Float32Array(128);
               var outi = new Float32Array(128);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(152.47);
           });

        it("CFFT length 256",
           function () {
               var test = generateComplexTestSignal(256, "rampComplex");
               var outr = new Float32Array(256);
               var outi = new Float32Array(256);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(147.80);
           });

        it("CFFT length 512",
           function () {
               var test = generateComplexTestSignal(512, "rampComplex");
               var outr = new Float32Array(512);
               var outi = new Float32Array(512);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(147.16);
           });

        it("CFFT length 1024",
           function () {
               var test = generateComplexTestSignal(1024, "rampComplex");
               var outr = new Float32Array(1024);
               var outi = new Float32Array(1024);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(147.04);
           });

        it("CFFT length 2048",
           function () {
               var test = generateComplexTestSignal(2048, "rampComplex");
               var outr = new Float32Array(2048);
               var outi = new Float32Array(2048);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(147.007);
           });

        it("CFFT length 4096",
           function () {
               var test = generateComplexTestSignal(4096, "rampComplex");
               var outr = new Float32Array(4096);
               var outi = new Float32Array(4096);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(147.001);
           });

        it("CFFT length 8192",
           function () {
               var test = generateComplexTestSignal(8192, "rampComplex");
               var outr = new Float32Array(8192);
               var outi = new Float32Array(8192);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(146.996);
           });

        it("CFFT length 16384",
           function () {
               var test = generateComplexTestSignal(16384, "rampComplex");
               var outr = new Float32Array(16384);
               var outi = new Float32Array(16384);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(146.947);
           });

        it("CFFT length 32768",
           function () {
               var test = generateComplexTestSignal(32768, "rampComplex");
               var outr = new Float32Array(32768);
               var outi = new Float32Array(32768);
               fft(test.signal[0], test.signal[1], outr, outi);
               var snr = snrdB(test.expected[0], test.expected[1],
                               outr, outi);
               expect(snr).toBeGreaterThan(146.94);
           });

    });
