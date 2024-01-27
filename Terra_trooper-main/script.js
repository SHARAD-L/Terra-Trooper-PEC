
//popup js code
let popup7 = document.getElementById("popup7");

function openPopup7(){
    popup7.classList.add("open-popup7");
}
function closePopup7(){
    popup7.classList.remove("open-popup7");
}

//popup completed

//theme-toggler code
  const themeToggler = document.querySelector(".theme-toggler");
  themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
  })

  //theme toggler code

//logout code
function logout() {
    // Show a confirmation dialog to confirm the logout action.
    const confirmLogout = confirm("Are you sure you want to logout?");
    
    if (confirmLogout) {
      // Clear any authentication-related cookies or local storage.
      // For example, if you are using cookies:
      document.cookie = "authenticationToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      
      // Disable caching for the dashboard page.
      // This prevents the user from going back to the dashboard using the back button.
      window.history.replaceState({}, document.title, './index.html'); // Replace with your login page URL.
  
      // Display a logout message.
      const logoutMessage = document.createElement("div");
      logoutMessage.textContent = "Logged out successfully. Redirecting to login page...";
      document.body.appendChild(logoutMessage);
  
      // Redirect to the login page after a 2-second delay.
      setTimeout(function () {
        window.location.href = './index.html'; // Replace with your actual login page URL.
      }, 1000); // 2 seconds delay
    }
  }
