// Define a simple Car constructor
class Car {
    constructor({ model, color }) {
        this.model = model || 'no model provided';
        this.color = color || 'no colour provided';
    }
}

// Mixin
class Mixin {
    driveForward() {
        console.log('drive forward');
    }

    driveBackward() {
        console.log('drive backward');
    }

    driveSideways() {
        console.log('drive sideways');
    }
}

// Extend an existing object with a method from another
// [ES2015+] The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
const augment = (receivingClass, givingClass, ...methodsNames) => {
    // only provide certain methods
    if (methodsNames.length !== 0) {
        // [ES2015+] New function map calls a provided callback function once for each element in an array, in order.
        methodsNames.map(methodName => {
            receivingClass.prototype[methodName] = givingClass.prototype[methodName];
        });

        // provide all methods
    } else {
        // [ES2015+] New method Object.getOwnPropertyNames() returns an array of all properties (including non-enumerable properties)
        Object.getOwnPropertyNames(givingClass.prototype).map(methodName => {
            // check to make sure the receiving class doesn't
            // have a method of the same name as the one currently
            // being processed
            if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
                receivingClass.prototype[methodName] = givingClass.prototype[methodName];
            }
        });
    }
};

// Augment the Car constructor to include "driveForward" and "driveBackward"
augment(Car, Mixin, 'driveForward', 'driveBackward');

// Create a new Car
const myCar = new Car({
    model: 'Ford Escort',
    color: 'blue',
});

// Test to make sure we now have access to the methods
myCar.driveForward();
myCar.driveBackward();

// Outputs:
// drive forward
// drive backward

// We can also augment Car to include all functions from our mixin
// by not explicitly listing a selection of them
augment(Car, Mixin);

const mySportsCar = new Car({
    model: 'Porsche',
    color: 'red',
});

mySportsCar.driveSideways();

// Outputs: