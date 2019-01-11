const newObject = {};

// or
const newObject = Object.create(Object.prototype);

// or
const newObject = new Object();



newObject.someKey = 'Hello World';

// [ES2015+] We used new keyword const for immutable constant declaration
const value = newObject.someKey;
const value = newObject['Some Key'];

newObject['Some Key'] = 'Hello World';



Object.defineProperty(newObject, 'someKey', {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true,
});

const defineProp = (obj, key, value) => {
    const config = {
        value: value,
        writable: true,
        enumerable: true,
        configurable: true,
    };
    Object.defineProperty(obj, key, config);
};



const person = Object.create(Object.prototype);

// Populate the object with properties
defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', false);

console.log(person);