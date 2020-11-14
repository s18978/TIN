// f) Create class Person with: first and last name, getter and setter for full name
// Rewrite Student class from task E to extend class Person

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName; this.lastName = lastName;
    }
    get fullName() { return `${this.firstName} ${this.lastName}`}
    set fullName(v) {
        const [firstName, lastName] = v.split(' ');
        this.firstName = firstName; this.lastName = lastName; }
}

class Student extends Person {
    constructor(firstName, lastName, id, grades) {
        super(firstName,lastName); this.id = id; this.grades = [...grades];
    }
    get average() { return this.grades.reduce((x,y) => x+y,0)/this.grades.length }
}
const student = new Student('John', 'Green', '7', [4,5,3,4,5])

console.log(student);