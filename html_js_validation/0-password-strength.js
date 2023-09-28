// @ts-nocheck
const passwordForm = document.getElementById('passwordForm')
const errorElement = document.getElementById('error')

passwordForm.addEventListener('submit', function (event) {
  event.preventDefault()
  const password = document.getElementById('password').value

  const errors = validatePassword(password)

  if (errors.length === 0) {
    errorElement.textContent = ''
    passwordForm.submit()
  } else {
    errorElement.innerHTML = `<ul>${errors
      .map((error) => `<li>${error}</li>`)
      .join('')}</ul>`
  }
})

function validatePassword(password) {
  const errors = []

  const lengthRegex = /.{8,}/
  const uppercaseRegex = /[A-Z]/
  const lowercaseRegex = /[a-z]/
  const digitRegex = /[0-9]/
  const specialCharRegex = /[!@#$%^&*]/

  if (!lengthRegex.test(password)) {
    errors.push('Password must be at least 8 characters long.')
  }
  if (!uppercaseRegex.test(password)) {
    errors.push('Password must contain at least one uppercase letter.')
  }
  if (!lowercaseRegex.test(password)) {
    errors.push('Password must contain at least one lowercase letter.')
  }
  if (!digitRegex.test(password)) {
    errors.push('Password must contain at least one numeric digit.')
  }
  if (!specialCharRegex.test(password)) {
    errors.push(
      'Password must contain at least one special character (!@#$%^&*).'
    )
  }

  return errors
}
