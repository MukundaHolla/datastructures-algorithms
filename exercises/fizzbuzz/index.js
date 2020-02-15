// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // check if number multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 == 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    var arr = input.split("\n");
    let val
    var arr1 = arr.splice(1).toString().split(" ")
    var res = arr1.reduce(function(prev, curr){
        return (Number(prev) || 0) + (Number(curr) || 0);
    });
    console.log(res)
}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;                               // Reading input from STDIN
});

process.stdin.on("end", function () {
   main(stdin_input);
});

function main(input) {
    var arr = input.split("\n");
    let val
    var arr1 = arr.splice(1).toString().split(" ")      // Writing output to STDOUT
    arr1.forEach(n => {
        for (let i = 1; i <= n; i++) {
    // check if number multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
    })
}

module.exports = fizzBuzz;



process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_ = "";

process.stdin.on('data', function (data) {
    input_ += data.toString().trim();
    input_ += '\n';
});

function solve(n) {
    // Write your code here
    const arr = []
    for(let i = 1; i<=n ;i ++) {
        arr.push(i)
    }
    let sum = 0;
    arr.forEach(ele => {
        sum += ele * ele
    })
    return sum;
}

process.stdin.on('end', function () {
    input_ = input_.replace(/\n$/, "");
    input_ = input_.split("\n");
    var n = parseInt(input_.shift(), 10);

    var out_ = solve( n);
    process.stdout.write(out_);

    process.exit();

});


