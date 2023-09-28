// @ts-nocheck
// Get references to the form elements
const dynamicForm = document.getElementById('dynamicForm')
const numFieldsSelect = document.getElementById('numFields')
const inputContainer = document.getElementById('inputContainer')

// Attach an event listener to the form's submit event
dynamicForm.addEventListener('submit', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault()

  // Validate the form before submission
  if (validateForm()) {
    // If the form is valid, allow the form submission
    dynamicForm.submit()
  } else {
    // If the form is invalid, display an error message
    alert('Please fill in all fields.')
  }
})

// Attach an event listener to the numFieldsSelect to generate input fields dynamically
numFieldsSelect.addEventListener('change', function () {
  const selectedValue = parseInt(numFieldsSelect.value)
  generateInputFields(selectedValue)
})

// Function to generate input fields dynamically based on the selected value
function generateInputFields(numFields) {
  // Clear the inputContainer
  inputContainer.innerHTML = ''

  for (let i = 1; i <= numFields; i++) {
    // Create a new input element
    const input = document.createElement('input')
    input.type = 'text'
    input.name = `field${i}`
    input.placeholder = `Field ${i}`

    // Append the input element to the inputContainer
    inputContainer.appendChild(input)
  }
}

// Function to validate the form before submission
function validateForm() {
  // Get all the dynamically generated input fields
  const inputFields = inputContainer.querySelectorAll('input')

  // Check if any of the fields are empty
  for (const input of inputFields) {
    if (input.value.trim() === '') {
      return false // Form is invalid
    }
  }

  return true // Form is valid
}

// Initially generate input fields based on the default selected value
generateInputFields(parseInt(numFieldsSelect.value))
