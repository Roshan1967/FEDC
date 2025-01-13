const sumNumbers = function() {
    let numbers = [];
    
    while (true) {
      let input = prompt("Enter a number (or leave blank to finish):");
      
      if (input === null || input.trim() === "") {
        // End the input process if the user cancels or enters an empty input
        break;
      }
      
      let num = parseFloat(input);
      
      // Validate the input as a number
      if (!isNaN(num)) {
        numbers.push(num);
      } else {
        alert("Please enter a valid number.");
      }
    }
    
    // Use rest parameters to sum the numbers
    return sumNumbersHelper(...numbers);
  };
  
  const sumNumbersHelper = function(...args) {
    return args.reduce((total, num) => total + num, 0);
  };
  