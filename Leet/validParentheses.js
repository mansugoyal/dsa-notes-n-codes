// 1. Valid Parentheses : Check if a string is valid
// Input: "()[]{}"
// Output: true

//need to redo it
let str = "()[]{}"

function isValid(str) {
    const stack = [];
    const map = {')': '(','}': '{',']': '['};

    for (let ch of str) {
        if (map[ch]) {
            // closing bracket
            if (stack.pop() !== map[ch]) return false;
        } else {
            // opening bracket
            stack.push(ch);
        }
    }

    return stack.length === 0;
}

console.log("isValid", isValid(str));