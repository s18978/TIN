// b) Implement a constructor function, creating objects representing students.
// They should include first and last name, id, array with grades,
// a method printing first and last name and grade average of student

function Student(firstName, lastName, id, grades) {
    this.firstName = firstName; this.lastName = lastName; this.id = id; this.grades = [...grades];

    this.studentInfo = () => {
        console.log(`Name: ${this.firstName}, surname: ${this.lastName}, grade average: ${this.grades.reduce((x,y) => x+y,0)/this.grades.length}`)
    }
}
const student = new Student('John', 'Green', '7', [5,5,5,3,3,4,4,4])
student.studentInfo();