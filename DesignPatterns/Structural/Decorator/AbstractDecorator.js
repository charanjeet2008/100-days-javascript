const Macbook = new Interface('Macbook', [
    'addEngraving',
    'addParallels',
    'add4GBRam',
    'add8GBRam',
    'addCase',
]);

// A Macbook Pro might thus be represented as follows:
class MacbookPro {
    // implements Macbook
}

// [ES2015+] We still could use Object.prototype for adding new methods, because internally we use the same structure
MacbookPro.prototype = {
    addEngraving() {},
    addParallels() {},
    add4GBRam() {},
    add8GBRam() {},
    addCase() {},
    getPrice() {
        // Base price
        return 900.0;
    },
};



// Macbook decorator abstract decorator class

class MacbookDecorator {
    constructor(macbook) {
        Interface.ensureImplements(macbook, Macbook);
        this.macbook = macbook;
    }

    addEngraving() {
        return this.macbook.addEngraving();
    }

    addParallels() {
        return this.macbook.addParallels();
    }

    add4GBRam() {
        return this.macbook.add4GBRam();
    }

    add8GBRam() {
        return this.macbook.add8GBRam();
    }

    addCase() {
        return this.macbook.addCase();
    }

    getPrice() {
        return this.macbook.getPrice();
    }
}


// Let's now extend (decorate) the CaseDecorator
// with a MacbookDecorator
// [ES2015+] The extends keyword is used to create a class which is a child of another class.
// [ES2015+] A constructor can use the super keyword to call the constructor of the super class.
class CaseDecorator extends MacbookDecorator {
    constructor(macbook) {
        super(macbook);
    }

    addCase() {
        return `${this.macbook.addCase()}Adding case to macbook`;
    }

    getPrice() {
        return this.macbook.getPrice() + 45.0;
    }
}

//********************** Snippet 6 **********************//
// [ES2015+] We used new keyword const for immutable constant declaration

// Instantiation of the macbook
const myMacbookPro = new MacbookPro();

// Outputs: 900.00
console.log(myMacbookPro.getPrice());

// Decorate the macbook
const decoratedMacbookPro = new CaseDecorator(myMacbookPro);

// This will return 945.00
console.log(decoratedMacbookPro.getPrice());
