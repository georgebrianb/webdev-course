// Question 3:
// Write a function that converts HEX to RGB. Then Make that function auto-dect the formats
// so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.


function hexToRGB(hex) {
	let val1, val2, val3;
	[val1, val2, val3 ] = hex.match(/.{1,2}/g)
	rgb = [parseInt(val1, 16).toString(10), parseInt(val2, 16).toString(10), parseInt(val3, 16).toString(10)];
	return rgb;
}


function rgbToHEX(rgb) {
	let r, g, b;
	[r, g, b] = rgb.split(",");
	hex = [parseInt(r, 10).toString(16), parseInt(g, 10).toString(16), parseInt(b, 10).toString(16)]
	return hex;
}


function hexRgb(code) {
	// debugger;
	// As it's not specified, I assume the input for RGB is something that contains 
	if(code.includes(",")) {
		rgbToHEX(code);
	} else {
		hexToRGB(code);
	}
}

hexRgb("255,12,200"); // outputs "ff14c8"

hexRgb("ff14c8"); // outputs "255,12,200"
