const request = require('request')

if (process.argv.length !== 3) {
  console.error('Usage: node starwars-characters.js <Movie ID>')
  process.exit(1)
}

const movieId = process.argv[2]
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}/`

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

    console.log(`Characters in ${movie.title}:`)
    movie.characters.forEach((characterUrl) => {
      request.get(characterUrl, (charError, charResponse, charBody) => {
        if (charError) {
          console.error(`Error fetching character: ${charError.message}`)
          return
        }
        if (charResponse.statusCode !== 200) {
          console.error(
            `Request failed with status code: ${charResponse.statusCode}`
          )
          return
        }
        const character = JSON.parse(charBody)
        console.log(character.name)
      })
    })
  } catch (parseError) {
    console.error('Error parsing API response:', parseError.message)
    process.exit(1)
  }
})
