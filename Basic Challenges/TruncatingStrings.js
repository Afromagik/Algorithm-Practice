function truncateString(str, num) {
    // Default case with empty string || no truncation
    if (num == 0 || str.length == 0) {
      return str;
    } 
    // Normal case
    if (str.length > num) {
      let slicedStr = str.slice(0, num); // Truncate
      let finalStr = slicedStr + "..."; // Append ...
      return finalStr;
    }
    // If string and num are equal
    if (str.length == num) {
      return str;
    }
  
    return str; 
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);