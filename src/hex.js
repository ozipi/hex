'use strict';

var hexConstants = {
	"00": "[hex-empty]",
	"01": "[hex-half-left]",
	"10": "[hex-half-right]",
	"11": "[hex-full]"
};

var binaryToHex = function(binary) {
	return hexConstants[binary];
};

module.exports = {
	all: hexConstants,
	binaryToHex: binaryToHex 
}

function e(){
	return " e";
}