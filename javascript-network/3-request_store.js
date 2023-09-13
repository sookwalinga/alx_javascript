const request = require('request')
const fs = require('fs')

if (process.argv.length !== 4) {
  console.error('Usage: node 3-request_store.js <URL> <file path>')
  process.exit(1)
}

const url = process.argv[2]
const filePath = process.argv[3]
const encoding = 'utf-8'

const fileStream = fs.createWriteStream(filePath, { encoding })

const req = request.get(url)

req.on('response', (response) => {
  if (response.statusCode !== 200) {
    console.error(`Request failed with status code: ${response.statusCode}`)
    process.exit(1)
  }

  response.pipe(fileStream)

  response.on('end', () => {
    console.log(`File saved at ${filePath}`)
  })
})

req.on('error', (error) => {
  console.error(`Error: ${error.message}`)
  process.exit(1)
})
