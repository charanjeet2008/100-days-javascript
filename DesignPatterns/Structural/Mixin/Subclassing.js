//*******************************************************//
// Sub-classing
//*******************************************************//

//********************** Snippet 1 **********************//
// [ES2015+] Below we used new class declaration, using keyword class
// [ES2015+] We used new constructor method

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = 'male';
    }
}

//********************** Snippet 2 **********************//
// [ES2015+] We used new keyword const for immutable constant declaration
// [ES2015+] Below we used new class declaration, using keyword class
// [ES2015+] We used new constructor method
// [ES2015+] We have new pattern implementation with new inheritance

// a new instance of Person can then easily be created as follows:
const clark = new Person('Clark', 'Kent');

// Define a subclass constructor for for "Superhero":
// [ES2015+] A constructor can use the super keyword to call the constructor of the super class.
class Superhero extends Person {
    constructor(firstName, lastName, powers) {
        // Invoke the superclass constructor on the new object
        // then use .call() to invoke the constructor as a method of
        // the object to be initialized.

        super(firstName, lastName);

        // Finally, store their powers, a new array of traits not found in a normal "Person"
        this.powers = powers;
    }
}

const superman = new Superhero('Clark', 'Kent', ['flight', 'heat-vision']);
console.log(superman);