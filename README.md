# js-hacks

This is a random collection of JS code.

## FFT
A complex FFT package for an out-of-place power-of-2 FFT.

Example usage:

```javascript
// Create an FFT object that can handle order 3, (8-point FFT)
var fft = new FFT(3);

// Create the input arrays.  The input is two arrays: one for the real
// part and one for the imaginary part.

var xr = new Float32Array(8);
var xi = new Float32Array(8);

// Make xr[k] = k, xi[k] = 0;
for (var k = 0; k < 8; ++k) {
    xr[k] = k;
    xi[k] = 0;
}

// Create the output arrays.  The FFT is not done in place
var yr = new Float32Array(8);
var yi = new Float32Array(8);

// Compute the FFT
fft.fft(xr, xi, yr, yi);
console.log(yr);
console.log(yi);
// The output should be:
//
// [28, -4, -4, -4, -4, -4, -4, -4]
// [0, 9.656854629516602, 4, 1.6568541526794434, 0, -1.6568541526794434, -4, -9.656854629516602]

// For an inverse FFT
fft.ifft(yr, yi, xr, xi);

// IFFT doesn't scale the result so xr and xi aren't the same as
// before.  Scale it.  The scaling is done in place.

fft.ifftScale(xr, xi);
console.log(xr);
console.log(xi);
// Output is
//
// [0, 0.9999998807907104, 2, 3, 4, 5, 6, 7]
// [0, 6.123234262925839e-17, 1.2246468525851679e-16, -6.123234262925839e-17, 0, 6.123234262925839e-17, -1.2246468525851679e-16, -6.123234262925839e-17]


```

The inputs and outputs should be Float32Array's.  Currently there is
no limit on the order, but internally the twiddle table only stores
single-precision values, so the output only has single-precision
accuracy.  This also limit the maximum usable FFT size.  It's probably
best not to exceed order 15 (32768 points).  No checks are made that
the arrays have the correct length and type.

