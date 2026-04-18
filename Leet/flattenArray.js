function flattenArray(arr) {
    let result = [];
    
    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item)); // recursive flatten
        } else {
            result.push(item); // non-array item
        }
    }
    return result;
}

let arr = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(arr));