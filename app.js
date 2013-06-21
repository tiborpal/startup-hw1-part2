#!/usr/bin/env node
function isPrime(num) {
	for(var i=2; i <= Math.sqrt(num); i++){
		q = num / i;
		if(Math.ceil(q) == Math.floor(q)) {
			return false;
		}
	}
	return true;
}
var fs = require('fs');
var outfile = "hello.txt";
var result = new Array();
for(var i=2, count=0; count < 99; i++) {
	if(isPrime(i)) {
		result.push(i);
		count++
	}
}
fs.appendFileSync(outfile, result.join(","));  
console.log("Script: " + __filename + "\nWrote primes To: " + outfile);
