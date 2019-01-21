// Create interfaces using a pre-defined Interface
// constructor that accepts an interface name and
// skeleton methods to expose.

// In our reminder example summary() and placeOrder()
// represent functionality the interface should
// support
const reminder = new Interface('List', ['summary', 'placeOrder']);

const properties = {
    name: 'Remember to buy the milk',
    date: '05/06/2016',
    actions: {
        summary() {
            return 'Remember to buy the milk, we are almost out!';
        },
        placeOrder() {
            return 'Ordering milk from your local grocery store';
        },
    },
};

// Now create a constructor implementing the above properties
// and methods

class Todo {
    constructor({ actions, name }) {
        // State the methods we expect to be supported
        // as well as the Interface instance being checked
        // against

        Interface.ensureImplements(actions, reminder);

        this.name = name;
        this.methods = actions;
    }
}

// Create a new instance of our Todo constructor

const todoItem = new Todo(properties);

// Finally test to make sure these function correctly

console.log(todoItem.methods.summary());
console.log(todoItem.methods.placeOrder());

// Outputs:
// Remember to buy the milk, we are almost out!
// Ordering milk from your local grocery store
