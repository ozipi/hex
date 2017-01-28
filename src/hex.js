const hexConstants = {
	"00": "[hex-empty]",
	"01": "[hex-half-left]",
	"10": "[hex-half-right]",
	"11": "[hex-full]"
};

const binaryToHex = function(binary) {
	return hexConstants[binary];
};

const mainExport = {
	all: hexConstants,
	binaryToHex
}

export default mainExport
module.exports = mainExport