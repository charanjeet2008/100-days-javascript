const myMixins = {
    moveUp() {
        console.log('move up');
    },

    moveDown() {
        console.log('move down');
    },

    stop() {
        console.log('stop! in the name of love!');
    },
};

//********************** Snippet 2 **********************//
// [ES2015+] Below we used new class declaration, using keyword class
// [ES2015+] We used new constructor method and method declaration
// [ES2015+] We used new arrow function syntax
// [ES2015+] We have new pattern implementation with new inheritance

// A skeleton carAnimator constructor
class CarAnimator {
    moveLeft() {
        console.log('move left');
    }
}
// A skeleton personAnimator constructor
class PersonAnimator {
    moveRandomly() {
        /*..*/
    }
}
// [ES2015+] New Object.assign() method copies enumerable and own properties from a source object (second argument) to a target object (first argument).
Object.assign(CarAnimator.prototype, myMixins);
Object.assign(PersonAnimator.prototype, myMixins);

// Create a new instance of carAnimator
const myAnimator = new CarAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();

// Outputs:
// move left
// move down
// stop! in the name of love!
