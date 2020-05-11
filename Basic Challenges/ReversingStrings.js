function reverseString(str) {
    if (str.length == 0 || str.length == 1) {
      return str 
    }
    // turn into array
    const splitString = str.split("");
    console.log(splitString)
  
    let reverseString = "" 
    for (let count = 0; count <= splitString.length; count ++){ 
      if (reverseString === "undefined"){
        reverseString = (splitString[splitString.length - count])
      } else { 
        reverseString += (splitString[splitString.length - count])
      }
    }
    console.log(reverseString)
    return reverseString
  }
  
  reverseString("hello");