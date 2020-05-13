function getIndexToIns(arr, num) {
    console.log(arr.length + 1)
    // Sort the array
    arr.sort((a,b)=> {return a-b}) // sort lowest to highest
    console.log(arr)
  
    // Default cases
    if (arr.length == 1){ // where the array length is 1, so return 1
        return 1
    }
    if (arr.length == 0){ // where the array length is 0, return 0
        return 0
    }
    if (num <= arr[0]) { // check if number is less that first element, then place in index[0]
        return 0
    }
     // check if number is >= to the last element, then place after the last element; arr.length 
    if (num >= arr[arr.length - 1]) { //since indexes begin at zero, minus 1 the last element
        return arr.length
    }
  
    // Normal cases
    // loop through the array
    for (let element in arr) {
      if (element <= arr.length){ // avoid out of bounds exceptions
          if (num > arr[element] && num <= arr[parseInt(element) + 1]) { // check where it belongs
            return parseInt(element) + 1 // return suitable index
            
          }
    
      }
    }
    
  }
  
  getIndexToIns([5, 3, 20, 3], 5);