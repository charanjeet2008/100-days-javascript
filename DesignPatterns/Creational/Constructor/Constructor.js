class Car {
    constructor(model) {
        this.model = model;
        this.color = 'silver';
        this.year = '2012';
    }

    getInfo() {
        return `${this.model} ${this.year}`;
    }
}
const myCar = new Car('ford');

myCar.year = '2010';

console.log(myCar.getInfo());