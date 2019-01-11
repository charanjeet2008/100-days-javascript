class VehiclePrototype {
    constructor(model) {
        this.model = model;
    }

    getModel() {
        console.log('The model of this vehicle is..' + this.model);
    }

    Clone() {}
}
// [ES2015+] The extends keyword is used to create a class which is a child of another class.
// [ES2015+] A constructor can use the super keyword to call the constructor of the super class.
class Vehicle extends VehiclePrototype {
    constructor(model) {
        super(model);
    }
    Clone() {
        return new Vehicle(this.model);
    }
}

const car = new Vehicle('Ford Escort');
const car2 = car.Clone();
car2.getModel();