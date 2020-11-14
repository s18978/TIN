// c) Create a prototype of student object using initializer.
// Object should contain array with list of courses each student should take.
// Write function creating new objects based on this prototype,
// setting their first, last name and id properties.

function Student(firstName, lastName, id, grades) {
    this.firstName = firstName; this.lastName = lastName; this.id = id; this.grades = [...grades];
}
Student.prototype.courses = [];

const createStudent = (name, surname, id, grades, courses) => {
    const student = new Student('John', 'Green', "7", [5,3,4,4,5]);
    student.courses = courses;
    return student;
}
const student = createStudent('John', 'Green', '7', [5,3,4,4,5], ['ZPR', 'TIN', 'BYT'])
console.log(student);