let privateCounter = 0;

const privateFunction = () => {
    privateCounter++;
}

const publicFunction = () => {
    publicIncrement();
}

const publicIncrement = () => {
    privateFunction();
}

// [ES2015+] Equivalent to: => { return privateCounter; }
const publicGetCount = () => privateCounter;

// Reveal public pointers to
// private functions and properties
const myRevealingModule = {
    start: publicFunction,
    increment: publicIncrement,
    count: publicGetCount
};

// [ES2015+] Default export module, without name
export default myRevealingModule;

// Usage:
// [ES2015+] The import statement is used to import bindings which are exported by another module.
//import myRevealingModule from './myRevealingModule';

//myRevealingModule.start();