'use strict'

var expect = require('chai').expect
var hex = require('./hex');

describe('hex', function() {
	it('should have a list of all available hex symbols as an object', function(){
		expect(hex.all).to.be.an('object');
	})

	it('should have a list of all available hex symbols', function(){
		expect(hex.all).to.have.all.keys('00', '01', '10', '11');
	})
	it('should return the full hex symbol', function(){
		expect(hex.binaryToHex("11")).equal("[hex-full]");
	})
})