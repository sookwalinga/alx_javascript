function setCookies() {
  //DOC: Get the values from input fields
  const firstNameValue = document.getElementById('firstname').value
  const emailValue = document.getElementById('email').value

  //DOC: Set the cookies
  document.cookie = `firstname=${firstNameValue};`
  document.cookie = `email=${emailValue};`

  console.log('Cookies have been set.')
}

function showCookies() {
  //DOC: Get the cookie string
  const cookieString = document.cookie

  //DOC: Create a new paragraph element
  const paragraph = document.createElement('p')

  //DOC: Set the inner HTML of the paragraph to display the cookies
  paragraph.innerHTML = `Cookies: ${cookieString}`

  //DOC: Select the div by its ID (replace 'your-div-id' with the actual ID)
  const divElement = document.getElementById('cookies')

  //DOC: Append the paragraph to the selected div
  divElement.appendChild(paragraph)
}
