const request = require('request')

if (process.argv.length !== 3) {
  console.error('Usage: node count-completed-tasks.js <API URL>')
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
    const todos = JSON.parse(body)

    const completedTasksByUser = todos.reduce((acc, todo) => {
      if (todo.completed) {
        if (!acc[todo.userId]) {
          acc[todo.userId] = 0
        }
        acc[todo.userId]++
      }
      return acc
    }, {})

    for (const userId in completedTasksByUser) {
      console.log(
        `User ${userId}: ${completedTasksByUser[userId]} completed tasks`
      )
    }
  } catch (parseError) {
    console.error('Error parsing API response:', parseError.message)
    process.exit(1)
  }
})
