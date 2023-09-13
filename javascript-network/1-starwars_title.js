const request = require('request')

//DOC: Check if the movie ID argument is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 1-starwars_title.js <movie ID>')
  process.exit(1)
}

const movieId = process.argv[2]
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }

  if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`)
    process.exit(1)
  }

  try {
    const movie = JSON.parse(body)
    console.log(movie.title)
  } catch (parseError) {
    console.error('Error parsing API response:', parseError.message)
    process.exit(1)
  }
})
