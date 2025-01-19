function customSplice(array, start, deleteCount, ...itemsToAdd) {
    // Ensure the start index is within bounds
    if (start < 0) {
      start = Math.max(array.length + start, 0);
    } else {
      start = Math.min(start, array.length);
    }
  
    // If deleteCount is not provided, set it to remove all elements from start to end
    if (deleteCount === undefined) {
      deleteCount = array.length - start;
    } else {
      deleteCount = Math.min(Math.max(deleteCount, 0), array.length - start);
    }
  
    // Extract elements before and after the splice operation
    const before = array.slice(0, start);
    const removed = array.slice(start, start + deleteCount);
    const after = array.slice(start + deleteCount);
  
    // Combine the arrays to form the new array
    const result = [...before, ...itemsToAdd, ...after];
  
    // Modify the original array to reflect the changes
    array.length = 0;
    for (let i = 0; i < result.length; i++) {
      array.push(result[i]);
    }
  
    // Return the array of removed elements
    return removed;
  }

  
  let arr = [1, 2, 3, 4, 5];

// Remove 2 elements starting from index 1, and add 6 and 7
let removedElements = customSplice(arr, 1, 2, 6, 7);

console.log(arr); // Output: [1, 6, 7, 4, 5]
console.log(removedElements); // Output: [2, 3]
