//1. Reverse an integer array using iteration => Input: [1,2,3,4] Output: [4,3,2,1]

function reversef(){
	let ar = [1,2,3,4];
	let reverse = [];

	for(let i=ar.length-1; i>=0; i--){
		reverse.push(ar[i])
	}
	return reverse;
}



//2. Reverse a string using two pointers. => Input: "hello" Output: "olleh"

function reverseString(){
	let str = "hello brother";
	let revStr = "";

	for(let j=str.length-1; j>=0; j--){
		revStr += str[j]
	}
	return revStr;
}

//3. Reverse only the first k elements of an array. Input: [1,2,3,4,5], k=3 Output: [3,2,1,4,5]
// O(n)
function reverseFirstElement1(){
	let ar = [1,2,3,4,5];
	let number = 3;
	let newAr = [];

	for(let k=number-1; k>=0; k--){
		newAr.push(ar[k]);
	}

	for(let l=number; l<=ar.length-1; l++){
		newAr.push(ar[l]);
	}
	return newAr;
}

// O(1)
function reverseFirstElement2(){
	let arr = [1,2,3,4,5];
	let k = 3;

	let left = 0;
    let right = k - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }

    return arr;
}


console.log("reversef", reversef());
console.log("reverseString", reverseString());
console.log("reverseFirstElement1", reverseFirstElement1());
console.log("reverseFirstElement2", reverseFirstElement2());