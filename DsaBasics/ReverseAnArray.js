// Reverse an array without using built-in functions
const ar = [1,2,3,4,5,6,7,8,9]
const reverse = []

for(let i=ar.length-1; i>=0; i--){
    reverse.push(ar[i])
}
console.log("reverse", reverse);

// Reverse an string without using built-in functions
const string = "hello";
let reverseString = "";

for(let i=string.length-1; i>=0; i--){
    reverseString += string[i]
}
console.log("reverseString", reverseString);

// Given a string "I love JavaScript", reverse each word individually, not the full string.
let str = "I Love Javascript";
let reverseStr = "";
let word = "";

for(let i=0; i<=str.length; i++){
    if(str[i] === " " || i === str.length){
        for(let j=word.length-1; j>=0; j--){
            reverseStr += word[j];
        }
        reverseStr += " ";
        word = "";
    }else{
        word += str[i];
    }
}

console.log("reverseStr",reverseStr);


// Given an array and a number k, reverse the array in groups of k.
// Input:
// arr = [1,2,3,4,5,6,7,8]
// k = 3

// Output:
// [3,2,1,6,5,4,8,7]

let result = [];

for (let i = 0; i < ar.length; i += k) {
    let end = i + k - 1;
    if (end >= ar.length) {
        end = ar.length - 1;
    }
    // reverse the group
    for (let j = end; j >= i; j--) {
        result.push(ar[j]);
    }
}

console.log(result);