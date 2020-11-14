// a) Use object initializer to create object,
// it should have at least 2-3 fields and 2-3 methods.
// Write func accepting object as parameter & printing all its properties and types

const person = {

    firstName: "John",
    lastName: "Green",
    id: 1,
    fullName: () => this.firstName + " " + this.lastName,
    nameLC: () => this.firstName.toLowerCase() + " " + this.lastName.toLowerCase()
}
console.log();

const showPropertiesAndTypes =
        object => Object.keys(object).forEach(element =>
            console.log(`Name - ${element}, type - ${typeof(object[element])}`));

showPropertiesAndTypes(person);