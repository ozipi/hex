"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var hexConstants = {
	"00": "[hex-empty]",
	"01": "[hex-half-left]",
	"10": "[hex-half-right]",
	"11": "[hex-full]"
};

var binaryToHex = function binaryToHex(binary) {
	return hexConstants[binary];
};

var mainExport = {
	all: hexConstants,
	binaryToHex: binaryToHex
};

exports.default = mainExport;

module.exports = mainExport;