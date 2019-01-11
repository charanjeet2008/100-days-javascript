// [ES2015+] Static methods are called without instantiating their class and cannot be called through a class instance.
// [ES2015+] Static methods are often used to create utility functions for an application.
// [ES2015+] We used new keyword const for immutable constant declaration
class AbstractVehicleFactory {
    constructor() {
        // Storage for our vehicle types
        this.types = {};
    }

    static getVehicle(type, customizations) {
        const Vehicle = this.types[type];

        return Vehicle ? new Vehicle(customizations) : null;
    }

    static registerVehicle(type, Vehicle) {
        const proto = Vehicle.prototype;

        // only register classes that fulfill the vehicle contract
        if (proto.drive && proto.breakDown) {
            this.types[type] = Vehicle;
        }

        return abstractVehicleFactory;
    }
}

// Usage:

abstractVehicleFactory.registerVehicle('car', Car);
abstractVehicleFactory.registerVehicle('truck', Truck);

// Instantiate a new car based on the abstract vehicle type
const car = abstractVehicleFactory.getVehicle('car', {
    color: 'lime green',
    state: 'like new',
});

// Instantiate a new truck in a similar manner
const truck = abstractVehicleFactory.getVehicle('truck', {
    wheelSize: 'medium',
    color: 'neon yellow',
});