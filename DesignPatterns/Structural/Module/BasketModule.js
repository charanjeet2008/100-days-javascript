const basket = new WeakMap();
const doSomethingPrivate = new WeakMap();
const doSomethingElsePrivate = new WeakMap();

class BasketModule {
    constructor() {
        // privates
        basket.set(this, []);
        doSomethingPrivate.set(this, () => {
            //...
        });
        doSomethingElsePrivate.set(this, () => {
            //...
        });
    }
    // Public aliases to a private functions
    doSomething() {
        doSomethingPrivate.get(this)();
    }
    doSomethingElse() {
        doSomethingElsePrivate.get(this)();
    }
    // Add items to our basket
    addItem(values) {
        const basketData = basket.get(this);
        basketData.push(values);
        basket.set(this, basketData);
    }
    // Get the count of items in the basket
    getItemCount() {
        return basket.get(this).length;
    }
    // Get the total value of items in the basket
    getTotal() {
        return basket
            .get(this)
            .reduce((currentSum, item) => item.price + currentSum, 0);
    }
}

//********************** Snippet 4 **********************//

// basketModule returns an object with a public API we can use
const basketModule = new BasketModule();

basketModule.addItem({
    item: 'bread',
    price: 0.5,
});

basketModule.addItem({
    item: 'butter',
    price: 0.3,
});

// Outputs: 2
console.log(basketModule.getItemCount());

// Outputs: 0.8
console.log(basketModule.getTotal());

// However, the following will not work:

// Outputs: undefined
// This is because the basket itself is not exposed as a part of our
// public API
console.log(basketModule.basket);

// This also won't work as it only exists within the scope of our
// basketModule closure, but not in the returned public object
console.log(basket);