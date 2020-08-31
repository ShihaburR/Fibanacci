/*
Task: Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

sumFibs(1) should return a number.
sumFibs(1000) should return 1785.
sumFibs(4000000) should return 4613732.
sumFibs(4) should return 5.
sumFibs(75024) should return 60696.
sumFibs(75025) should return 135721.
*/

var http = require('http');
var fs = requre('fs');

http.createServer((req,res) => {
  fs.readFile('index.html', ())
  res.writeHead(200, {'Content-Type': 'text/html'});
})

let value = 10;

function sumFibs(value) {
  let sum = 0;
  let fib = 1;
  let prev = 1;
  for(var i = 1; i <= value; i++) {
    fib = fib + prev;
    if(fib % 2 > 0 && fib < value) {sum += fib;}
    prev = fib - prev;
  }
  return sum;
}
console.log(sumFibs(10));
