const request = require('request')

if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API URL>')
  process.exit(1)
}

const apiUrl = process.argv[2]
const characterId = 18

function fetchCharacter(characterId) {
  return new Promise((resolve, reject) => {
    const characterUrl = `https://swapi-api.alx-tools.com/api/people/${characterId}/`
    request.get(characterUrl, (error, response, body) => {
      if (error) {
        reject(error)
      } else if (response.statusCode !== 200) {
        reject(
          new Error(`Request failed with status code: ${response.statusCode}`)
        )
      } else {
        const character = JSON.parse(body)
        resolve(character)
      }
    })
  })
}

request.get(apiUrl, async (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }

  if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`)
    process.exit(1)
  }

  try {
    const movies = JSON.parse(body).results
    const character = await fetchCharacter(characterId)

    const moviesWithWedgeAntilles = movies.filter((movie) =>
      movie.characters.includes(character.url)
    )

    console.log(moviesWithWedgeAntilles.length)
  } catch (parseError) {
    console.error('Error parsing API response:', parseError.message)
    process.exit(1)
  }
})
