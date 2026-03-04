/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

//using two pointer technique
let reverseString = function(s) {
	let right = s.length - 1;
	let left = 0;

	while (left < right) {
        console.log([s[left], s[right]]);
        console.log([s[right], s[left]]);
    	[s[left], s[right]] = [s[right], s[left]];
    	left++;
    	right--;
	}
	console.log(s);
};
const ar = ["h","e","l","l","o"];
reverseString(ar);


//using reverse technique
let reverseStr = function(s) {
	function helper(left, right) {
    	if (left >= right) return;
    	[s[left], s[right]] = [s[right], s[left]];
    	helper(left + 1, right - 1);
	}
	helper(0, s.length - 1);
	console.log(s);
};
const s = ["h","e","l","l","o"];
reverseStr(s);
