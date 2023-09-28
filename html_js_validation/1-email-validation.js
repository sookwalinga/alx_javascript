// @ts-nocheck
// Get references to the form and error message elements
const emailForm = document.getElementById('emailForm')
const emailInput = document.getElementById('email')
const errorElement = document.getElementById('error')

// Attach an event listener to the form's submit event
emailForm.addEventListener('submit', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault()

  // Get the email input value
  const email = emailInput.value

  // Validate the email format
  if (validateEmail(email)) {
    // If the email format is correct, clear any previous error message
    errorElement.textContent = ''
    // Allow the form submission
    emailForm.submit()
  } else {
    // If the email format is incorrect, display an error message
    errorElement.textContent = 'Please enter a valid email address.'
  }
})

// Function to validate the email format
function validateEmail(email) {
  // Define a regular expression pattern for a standard email format
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  // Use the test method to check if the email matches the pattern
  return emailRegex.test(email)
}
