const usersDatabase = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    // Add more users as needed
  ];
  
  function validateForm() {
    const enteredUsername = document.forms["form"]["username"].value;
    const enteredPassword = document.forms["form"]["password"].value;
  
    // Check if the entered credentials match any user in the database
    const matchedUser = usersDatabase.find(user => user.username === enteredUsername && user.password === enteredPassword);
  
    if (matchedUser) {
        // Valid credentials, redirect to dashboard.html
        window.location.href = "./dashboard.html";
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password. Please try again.");
        return false; // Prevent form submission
    }
  }
  
  // Attach an event listener to the form's submit button
  const form = document.forms["form"];
  
  if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission
        validateForm(); // Call your form validation function
    });
  }



