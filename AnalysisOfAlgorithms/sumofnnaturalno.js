// input n= 3 and output should be 6

//method 1: using recursion
const m = 3;
function sumOfNNaturalNumbers(m) {
    if (m <= 0) {
        return 0;
    }
    return m + sumOfNNaturalNumbers(m - 1);
}
console.log(sumOfNNaturalNumbers(m));

// method 2: using loop
const n = 5;
let sum = 0;
for(let i=1; i<=n; i++) {
    sum += i;
}

console.log(sum);


// method 3: using formula
const n1 = 6;
const sumUsingFormula = (n1 * (n1 + 1)) / 2;
console.log(sumUsingFormula);