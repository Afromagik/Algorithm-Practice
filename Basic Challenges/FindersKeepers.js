function findElement(arr, func) { // return element in array that is true
    for (let element in arr) { // Iterate through the array
        // Check if element in array will = true if passed through func
        if (func(arr[element])) { 
            return arr[element] //since true, return element
        }
    }
    // if func = false, return x which is undefined
    let x 
    return x;
  }
  
  
  findElement([1, 2, 3, 4], num => num % 2 === 0);