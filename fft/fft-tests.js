describe(
    "Test FFTs lengths with complex Ramp",
    function () {
        it("CFFT length 4",
           function () {
               var test = generateComplexTestSignal(4, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(323.56);
           });

        it("CFFT length 8",
           function () {
               var test = generateComplexTestSignal(8, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(330.55);
           });

        it("CFFT length 16",
           function () {
               var test = generateComplexTestSignal(16, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(157.04);
           });

        it("CFFT length 32",
           function () {
               var test = generateComplexTestSignal(32, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(155.31);
           });

        it("CFFT length 64",
           function () {
               var test = generateComplexTestSignal(64, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(148.08);
           });

        it("CFFT length 128",
           function () {
               var test = generateComplexTestSignal(128, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(152.47);
           });

        it("CFFT length 256",
           function () {
               var test = generateComplexTestSignal(256, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(147.80);
           });

        it("CFFT length 512",
           function () {
               var test = generateComplexTestSignal(512, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(147.16);
           });

        it("CFFT length 1024",
           function () {
               var test = generateComplexTestSignal(1024, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(147.04);
           });

        it("CFFT length 2048",
           function () {
               var test = generateComplexTestSignal(2048, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(147.007);
           });

        it("CFFT length 4096",
           function () {
               var test = generateComplexTestSignal(4096, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(147.001);
           });

        it("CFFT length 8192",
           function () {
               var test = generateComplexTestSignal(8192, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(146.996);
           });

        it("CFFT length 16384",
           function () {
               var test = generateComplexTestSignal(16384, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(146.947);
           });

        it("CFFT length 32768",
           function () {
               var test = generateComplexTestSignal(32768, "rampComplex");
               var result = fft(test.signal[0], test.signal[1]);
               var snr = snrdB(test.expected[0], test.expected[1],
                               result[0], result[1]);
               expect(snr).toBeGreaterThan(146.94);
           });
    });
