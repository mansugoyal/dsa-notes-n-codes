// Given an array of integers, find the sum of its elements.
let numbers = [1, 2, 3, 4, 10, 11];
let sum = 0;
for(let j=0; j<=numbers.length-1; j++){
    sum += numbers[j];
}
console.log(sum);

// Another way to do it
let sumNew = 0;
for (let num of numbers) {
    sumNew += num;
}
console.log("sumNew", sumNew);

// Another way to do it
let sumnew = 0;
let i = 0;
while (i < numbers.length) {
    sumnew += numbers[i];
    i++;
}
console.log("sumnew", sumnew);