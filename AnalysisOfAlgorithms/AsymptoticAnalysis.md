# Asymptotic Analysis

## What is Asymptotic Analysis?

Asymptotic Analysis is a way to measure the efficiency of an algorithm as the size of the input (n) grows very large.

### What it ignores:
- Machine speed
- Programming language
- Constant factors

### What it focuses on:
- How the algorithm's runtime (or memory usage) grows compared to the size of input
- "How does the algorithm behave when n becomes huge?"

## Order of Growth

Understanding the order of growth helps us analyze how algorithms and data structures perform as input size increases.

## Common Data Structure Operations

| Data Structure | Avg Access | Avg Search | Avg Insertion | Avg Deletion | Worst Access | Worst Search | Worst Insertion | Worst Deletion | Space Complexity |
|----------------|------------|------------|---------------|--------------|--------------|--------------|-----------------|----------------|------------------|
| Array          | Θ(1)       | Θ(n)       | Θ(n)          | Θ(n)         | O(1)         | O(n)         | O(n)            | O(n)           | O(n)             |
| Stack          | Θ(n)       | Θ(n)       | Θ(1)          | Θ(1)         | O(n)         | O(n)         | O(1)            | O(1)           | O(n)             |
| Queue          | Θ(n)       | Θ(n)       | Θ(1)          | Θ(1)         | O(n)         | O(n)         | O(1)            | O(1)           | O(n)             |
| Hash Table     | N/A        | Θ(1)       | Θ(1)          | Θ(1)         | N/A          | O(n)         | O(n)            | O(n)           | O(n)             |
| Binary Search Tree | Θ(log(n)) | Θ(log(n)) | Θ(log(n))    | Θ(log(n))    | O(n)         | O(n)         | O(n)            | O(n)           | O(n)             |

### Key Insights:

**Arrays:**
- Excellent for random access (constant time)
- Linear time for search, insertion, and deletion in unsorted arrays

**Stacks & Queues:**
- Optimized for insertion and deletion at specific ends
- Linear time for access and search operations

**Hash Tables:**
- Average case: constant time for search, insertion, and deletion
- Worst case: can degrade to linear time due to collisions

**Binary Search Trees:**
- Balanced trees provide logarithmic time for most operations
- Can degrade to linear time in worst case (unbalanced tree)

## Array Sorting Algorithms

| Algorithm      | Best Case     | Average Case  | Worst Case    | Space Complexity |
|----------------|---------------|---------------|---------------|------------------|
| Quicksort      | Ω(n log(n))   | Θ(n log(n))   | O(n²)         | O(log(n))        |
| Mergesort      | Ω(n log(n))   | Θ(n log(n))   | O(n log(n))   | O(n)             |
| Heapsort       | Ω(n log(n))   | Θ(n log(n))   | O(n log(n))   | O(1)             |
| Bubble Sort    | Ω(n)          | Θ(n²)         | O(n²)         | O(1)             |
| Insertion Sort | Ω(n)          | Θ(n²)         | O(n²)         | O(1)             |
| Selection Sort | Ω(n²)         | Θ(n²)         | O(n²)         | O(1)             |

### Algorithm Analysis:

**Efficient Algorithms (O(n log n)):**
- **Quicksort**: Fast average case, but can degrade to O(n²) in worst case
- **Mergesort**: Guaranteed O(n log n) performance, but requires additional space
- **Heapsort**: Guaranteed O(n log n) with constant space, but typically slower than quicksort in practice

**Simple Algorithms (O(n²)):**
- **Bubble Sort**: Simple but inefficient; best case O(n) when array is already sorted
- **Insertion Sort**: Efficient for small datasets or nearly sorted arrays
- **Selection Sort**: Consistently O(n²) regardless of input

## Big O Notation Summary

### Common Time Complexities (from best to worst):
1. **O(1)** - Constant time
2. **O(log n)** - Logarithmic time
3. **O(n)** - Linear time
4. **O(n log n)** - Linearithmic time
5. **O(n²)** - Quadratic time
6. **O(2ⁿ)** - Exponential time
7. **O(n!)** - Factorial time

### Notation Types:
- **O (Big O)**: Upper bound (worst case)
- **Ω (Big Omega)**: Lower bound (best case)
- **Θ (Big Theta)**: Tight bound (average case)

## Practical Guidelines

### When to use each data structure:
- **Arrays**: When you need fast random access and the size is relatively fixed
- **Stacks**: For LIFO operations (function calls, undo operations)
- **Queues**: For FIFO operations (task scheduling, breadth-first search)
- **Hash Tables**: When you need fast lookups and don't care about order
- **Binary Search Trees**: When you need both fast lookups and sorted order

### When to use each sorting algorithm:
- **Quicksort**: General-purpose sorting when average case performance matters
- **Mergesort**: When you need guaranteed O(n log n) performance and stability
- **Heapsort**: When you need guaranteed O(n log n) with minimal space
- **Insertion Sort**: For small datasets or nearly sorted arrays
- **Selection Sort**: Educational purposes (rarely used in practice)
