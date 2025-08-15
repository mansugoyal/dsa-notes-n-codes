// input n= 3 and output should be 6

//method 1: using recursion
const n = 3
function sumOfNNaturalNumbers(n) {
    if (n <= 0) {
        return 0;
    }
    return n + sumOfNNaturalNumbers(n - 1);
}
console.log(sumOfNNaturalNumbers(n));

// method 2: using loop
let sum = 0;
for(let i=1; i<=n; i++) {
    sum += i;
}

console.log(sum);