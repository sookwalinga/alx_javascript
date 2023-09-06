const numbers = [4, 6, 12, 42, 56]

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 12) {
    numbers[i] = 89
  }
}

console.log(numbers)
