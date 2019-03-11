//********************** Snippet 1 **********************//
// [ES2015+] Below we used new class declaration, using keyword class
// [ES2015+] We used new constructor method and method declaration
// [ES2015+] Classes are syntactic sugar over JavaScript's prototype-based inheritance
// [SE2015+] We used new keyword let, which declares a block scope local variabl

class ObserverList {
    constructor() {
        this.observerList = [];
    }

    add(obj) {
        return this.observerList.push(obj);
    }

    count() {
        return this.observerList.length;
    }

    get(index) {
        if (index > -1 && index < this.observerList.length) {
            return this.observerList[index];
        }
    }

    indexOf(obj, startIndex) {
        let i = startIndex;

        while (i < this.observerList.length) {
            if (this.observerList[i] === obj) {
                return i;
            }
            i++;
        }

        return -1;
    }

    removeAt(index) {
        this.observerList.splice(index, 1);
    }
}

//********************** Snippet 2 **********************//
// [ES2015+] Below we used new class declaration, using keyword class
// [ES2015+] We used new constructor method and method declaration
// [ES2015+] Classes are syntactic sugar over JavaScript's prototype-based inheritance
// [SE2015+] We used new keyword let, which declares a block scope local variabl

class Subject {
    constructor() {
        this.observers = new ObserverList();
    }

    addObserver(observer) {
        this.observers.add(observer);
    }

    removeObserver(observer) {
        this.observers.removeAt(this.observers.indexOf(observer, 0));
    }

    notify(context) {
        const observerCount = this.observers.count();
        for (let i = 0; i < observerCount; i++) {
            this.observers.get(i).update(context);
        }
    }
}


//********************** Snippet 3 **********************//

// The Observer
class Observer {
    constructor() {}
    update() {
        // ...
    }
}

//********************** Snippet 4 **********************//

<button id="addNewObserver">Add New Observer checkbox</button>
<input id="mainCheckbox" type="checkbox"/>
    <div id="observersContainer"></div>

//********************** Snippet 5 **********************//
// [ES2015+] Below we used new class declaration, using keyword class
// [ES2015+] We used new constructor method and method declaration
// [ES2015+] We have new pattern implementation with new inheritance
// [ES2015+] The extends keyword is used to create a class which is a child of another class.
// [ES2015+] Classes are syntactic sugar over JavaScript's prototype-based inheritance
// [ES2015+] We used new keyword const for immutable constant declaration
// [SE2015+] We used new keyword let, which declares a block scope local variable
// [ES2015+] We used new arrow function syntax
// Concrete Subject
class ConcreteSubject extends Subject {
    constructor(element) {
        // [ES2015+] A constructor can use the super keyword to call the constructor of the super class.
        super();
        this.element = element;

        // Clicking the checkbox will trigger notifications to its observers
        this.element.onclick = () => {
            this.notify(this.element.checked);
        };
    }
}

// Concrete Observer

class ConcreteObserver extends Observer {
    constructor(element) {
        super();
        this.element = element;
    }

    // Override with custom update behaviour
    update(value) {
        this.element.checked = value;
    }
}

// References to our DOM elements
const addBtn = document.getElementById('addNewObserver');
const container = document.getElementById('observersContainer');
const controlCheckbox = new ConcreteSubject(
    document.getElementById('mainCheckbox')
);

const addNewObserver = () => {
    // Create a new checkbox to be added
    const check = document.createElement('input');
    check.type = 'checkbox';
    const checkObserver = new ConcreteObserver(check);

    // Add the new observer to our list of observers
    // for our main subject
    controlCheckbox.addObserver(checkObserver);

    // Append the item to the container
    container.appendChild(check);
};

addBtn.onclick = addNewObserver;