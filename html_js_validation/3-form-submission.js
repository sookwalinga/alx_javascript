// @ts-nocheck
// Get references to the form and form fields
const submitForm = document.getElementById('submitForm')
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')

// Add an event listener to the form for the "submit" event
submitForm.addEventListener('submit', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault()

  // Validate the form before submission
  if (validateForm()) {
    // If the form is valid, display a success message
    displaySuccessMessage('Form submitted successfully!')
  }
})

// Function to validate the form before submission
function validateForm() {
  // Get the values entered in the form fields
  const nameValue = nameInput.value.trim()
  const emailValue = emailInput.value.trim()

  // Check if the required fields are filled
  if (nameValue === '' || emailValue === '') {
    // If any required fields are empty, display an error message
    displayErrorMessage('Please fill in all required fields.')
    return false // Form is invalid
  }

  // Additional validation can be added here if needed

  return true // Form is valid
}

// Function to display an error message
function displayErrorMessage(message) {
  // Create and insert an error message element
  const errorMessage = document.createElement('p')
  errorMessage.style.color = 'red'
  errorMessage.textContent = message
  submitForm.appendChild(errorMessage)
}

// Function to display a success message
function displaySuccessMessage(message) {
  // Create and insert a success message element
  const successMessage = document.createElement('p')
  successMessage.style.color = 'green'
  successMessage.textContent = message
  submitForm.appendChild(successMessage)
}
