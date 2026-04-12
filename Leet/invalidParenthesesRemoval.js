// if closure is not opened then remove it ?
let str = 'ja)swi(nd)er)';
let stack = [];
let arr = str.split('');
console.log("split array:", arr);

// First pass: remove extra ')'
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
        stack.push(i); // store index
    } else if (arr[i] === ')') {
        if (stack.length > 0) {
            stack.pop(); // matched
        } else {
            arr[i] = ''; // remove invalid ')'
        }
    }
}

console.log("after first pass:", arr);

// Second pass: remove extra '('
while (stack.length > 0) {
    let index = stack.pop();
    arr[index] = '';
}

console.log("after second pass:", arr);

const result = arr.join('');
console.log(result);