const greetUser = function() {
    let name = prompt("Please enter your name:");
    if (name === null || name.trim() === "") {
      name = "Guest"; // Default name if no input is provided
    }
    console.log(`Hello, ${name}!`);
  };
  