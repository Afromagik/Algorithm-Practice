function findLongestWordLength(str) {

    // default case for empty string
    if (str.length == 0) {
      return 0;
    }
    
    const stringArray = str.split(" "); // Split the string 
    // Minimal case for only one word
    if (stringArray.length == 1) {
      return stringArray[0].length;
    }
    
    // Maximal case
    // Define the variables
    let currentWord = ""; // Saves word in current iteration
    let maxLength = 0; // Max word size and output variable
  
    // Loop through the array
    for (let index in stringArray) { // index holds index of current iteration 
      currentWord = stringArray[index]; // Save current word into a variable
  
      if (currentWord.length >= maxLength) {
        maxLength = currentWord.length; // Check if current word is larger than maxLength
      } 
      
    }
  
    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
