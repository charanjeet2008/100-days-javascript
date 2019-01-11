class Car {
    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }
}


Car.prototype.toString = function() {
    return `${this.model} has done ${this.miles} miles`;
};

// Usage:
// [ES2015+] We used new keyword const for immutable constant declaration
const civic = new Car('Honda Civic', 2009, 20000);
const mondeo = new Car('Ford Mondeo', 2010, 5000);

console.log(civic.toString());
console.log(mondeo.toString());