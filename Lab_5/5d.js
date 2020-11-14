// d) Extend task B with:
// - getter for average grade property
// - getter and setter for student’s full name

function Student(firstName, lastName, id, grades) {
    this.firstName = firstName; this.lastName = lastName; this.id = id; this.grades = [...grades];

    Object.defineProperty(this, 'average', {
        get average() { return this.grades.reduce((x,y) => x+y,0)/this.grades.length }
    })
    Object.defineProperty(this, 'fullName', {
        get fullName() { return `${this.firstName} ${this.lastName}`},
        set fullName(v) {
            const [firstName, lastName] = v.split(' ');
            this.firstName = firstName;
            this.lastName = lastName; }
    })
}
const student = new Student('John', 'Green', '7', [4,5,3,4,5])

console.log(student);
console.log("Full name - " + (student.fullName = 'John Green'));
console.log("Grade average - " + student.average);