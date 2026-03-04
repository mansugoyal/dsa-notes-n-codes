// Write a function that determines whether a given sequence of brackets is valid.
// A sequence is valid if:
// Every opening bracket has a corresponding closing bracket.
// Brackets close in the correct order.
// Allowed brackets are: (), [], {}. Return true if the sequence is valid, otherwise return false.


// Correct Stack Logic (Industry Approach)
function isValidBrackets(ar) {
    const bracketStack = [];

    for (const char of ar) {
        if (char === '[' || char === '(' || char === '{') {
            bracketStack.push(char);
        } else {
            const top = bracketStack.pop();

            if (
                (char === ')' && top !== '(') ||
                (char === ']' && top !== '[') ||
                (char === '}' && top !== '{')
            ) {
                return false;
            }
        }
    }

    //for review purpose
    // for (let j = 0; j < ar.length; j++) {
    //for review purpose
    //     if (ar[j] === '[' || ar[j] === '(') {
    //         bracketStack.push(ar[j]);
    //     } else {
    //         const top = bracketStack.pop();
    //for review purpose
    //         if (
    //             (ar[j] === ')' && top !== '(') ||
    //             (ar[j] === ']' && top !== '[')
    //         ) {
    //             return false;
    //         }
    //     }
    // }

    return bracketStack.length === 0;
}

console.log("algo 1", isValidBrackets(['[', '(', ')', ')', ']', '[', ']']));

// Google-Style Valid Parentheses Trick
// Idea : Instead of checking opening brackets, we push the expected closing bracket into the stack.

function isValid(str) {
    const stack = [];

    for (const char of str) {
        if (char === '(') stack.push(')');
        else if (char === '[') stack.push(']');
        else if (char === '{') stack.push('}');
        else if (stack.pop() !== char) return false;
    }

    return stack.length === 0;
}

console.log("algo 2", isValid("[()]")); // true