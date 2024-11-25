// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');

    if (isDarkMode) {
        // Remove dark mode
        body.classList.remove('dark-mode');
        body.style.color = ""; // Revert to default color
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.style.color = ""; // Revert to default color
            a.style.border = ""; // Revert to default border
        });
    } else {
        // Apply dark mode
        body.classList.add('dark-mode');
        body.style.color = "black";
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.style.color = "black";
            a.style.border = "1px solid black";
        });
    }
}

// Add the click event listener for the "Get in touch" button
const button = document.getElementById("get-in-touch-button");
if (button) {
    button.addEventListener("click", function () {
        // Show an alert when the button is clicked
        alert("Thank you for getting in touch and for trusting me! I'll be responding to you too soon!");
    });
}
