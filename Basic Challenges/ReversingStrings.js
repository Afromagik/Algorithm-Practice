function reverseString(str) {
    // default case
    if (str.length == 0 || str.length == 1) {
      return str // return as is
    }
    // split string into array
    const splitString = str.split("");
    console.log(splitString)
  
    let reverseString = ""  //initalize return variable 
    for (let count = 0; count <= splitString.length; count ++){ // positive loop through array
        // handle undefined
      if (reverseString === "undefined"){
        reverseString = (splitString[splitString.length - count]) // replace undefined with last array character
      } else { // normal case
        reverseString += (splitString[splitString.length - count]) // append characters in reverse order
      }
    }
    console.log(reverseString)
    return reverseString
  }
  
  reverseString("hello"); // generic test