console.log('Start of the execution queue')

setTimeout(function () {
  console.log(
    'Final code block to be executed using setTimeout (with delay of 0)'
  )
}, 0)

for (let i = 1; i <= 100; i++) {
  console.log('Iteration number:', i)
}

console.log('End of the loop printing')
