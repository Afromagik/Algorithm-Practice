function factorialize(num) {
    // minimal case
    if (num <= 1 ) {
      return 1;
    } 
    // regular case
    return num * factorialize(num - 1) // recursive on reduction 
  }
  
  factorialize(5);