function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat
    }
  }

  let students = []

  for (let i = 0; i < numberOfStudents; i++) {
    let seatNumber = i + 1
    students.push(studentSeat(seatNumber))
  }

  return students
}

let classRoom = createClassRoom(10)
