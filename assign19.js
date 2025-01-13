const calculatePrice = function() {
    let price, discount;
    
    // Validate and prompt for price
    while (true) {
      price = parseFloat(prompt("Enter the price of the item:"));
      
      if (!isNaN(price) && price > 0) {
        break; // Exit loop if price is valid
      } else {
        alert("Please enter a valid positive price.");
      }
    }
  
    // Validate and prompt for discount (if provided)
    while (true) {
      let discountInput = prompt("Enter the discount percentage (leave blank for 10%):");
      
      // If the input is blank, apply the default 10% discount
      if (discountInput === "") {
        discount = 10;
        break;
      }
  
      discount = parseFloat(discountInput);
      
      if (!isNaN(discount) && discount >= 0) {
        break; // Exit loop if discount is valid
      } else {
        alert("Please enter a valid positive discount.");
      }
    }
  
    // Calculate final price after applying discount
    let finalPrice = price * (1 - discount / 100);
    
    // Return the final price
    return finalPrice;
  };
  