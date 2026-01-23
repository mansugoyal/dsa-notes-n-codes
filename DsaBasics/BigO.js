📊 Comparison Table (Interview Gold)
Algorithm / Operation	Time Complexity
Array index access	O(1)
Swap two elements	O(1)
Linear Search	O(n)
Binary Search	O(log n)
Merge Sort	O(n log n)

🧪 Visual Intuition
O(1) => “I know exactly where it is.”

O(log n) => “I don’t know where it is, but I keep cutting the problem in half.”

O(n) => “I’ll check one by one.”

🎯 Your Earlier Code & O(1)

In this snippet: reverseFirstElement2()

let temp = arr[left];
arr[left] = arr[right];
arr[right] = temp;

That swap logic is O(1)
Why? Fixed steps → no loops → no dependence on input size.

⚠️ Common Interview Trap

❌ Saying “O(1) algorithm”
✅ Saying “This operation runs in O(1) time”

✅ Final One-Line Answer (Interview)

O(1) is constant time complexity, not binary search. Binary search runs in O(log n).