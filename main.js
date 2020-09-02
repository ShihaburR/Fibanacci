const express = require('express');
const bodyparser = require('body-parser');
const port = 3000;
const app = express();

app.use(bodyparser.urlencoded({ extended: false}));

app.get('/', (req,res) => {
  //__dirname specifies absolute location
  res.sendFile('index.html', {root: __dirname})
})

app.post('/calculate', (req,res) => {
  let value = req.body.input;
  let seq = {};
  let sum = 0;
  let fib = 0;
  let prev = 1;
  for(var i = 1; i <= value; i++) {
    fib = fib + prev;
    if(fib % 2 > 0 && fib < value) {sum += fib;}
    prev = fib - prev;
  }
  //console.log(sum);
  res.write(`<h1>The Sum of Odd Fibonacci Values up to ${value} is ${sum}</h1>`);
  res.end();
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}!`);
})
