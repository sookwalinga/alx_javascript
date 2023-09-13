const request = require('request')

if (process.argv.length !== 3) {
  console.error('Usage: node count-movies.js <API URL>')
  process.exit(1)
}

const apiUrl = process.argv[2]

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
    const data = JSON.parse(body)
    const moviesWithWedgeAntilles = data.results.filter((movie) =>
      movie.characters.includes(
        'https://swapi-api.alx-tools.com/api/people/18/'
      )
    )

    console.log(
      `Number of movies with Wedge Antilles: ${moviesWithWedgeAntilles.length}`
    )
  } catch (parseError) {
    console.error('Error parsing API response:', parseError.message)
    process.exit(1)
  }
})
