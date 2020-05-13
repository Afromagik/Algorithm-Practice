function ChunkyArrayInGroups(arr, size) {

    if(arr.length <= size) { // if array size is less than the size, return array
        return arr
    } 
    else { // if array length is larger than the size, slice the array
        return [arr.slice(0, size)] // slice at the beginning of the array and at size
            // run the function again inside the function (recursion)
            // add results to the array on line 7
            .concat(ChunkyArrayInGroups(arr.slice(size), size)) // slice from a size to the end
                                        // arr = arr.slice in the function
    }

}