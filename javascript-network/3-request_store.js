const request = require('request')
const fs = require('fs')

if (process.argv.length !== 4) {
  console.error('Usage: node fetch-and-store.js <URL> <file path>')
  process.exit(1)
}

const url = process.argv[2]
const filePath = process.argv[3]

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }

  if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`)
    process.exit(1)
  }

  fs.writeFile(filePath, body, 'utf-8', (writeError) => {
    if (writeError) {
      console.error(`Error writing to file: ${writeError.message}`)
      process.exit(1)
    }
    console.log(`File saved at ${filePath}`)
  })
})