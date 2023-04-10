class Car {
    constructor() {
        this.price = 20000;
        this.model = 'Car'
    }

    getPrice() {
        return this.price;
    }

    getDescription() {
        return this.model
    }
}

class Tesla extends Car {
    constructor() {
        super();
        this.price = 25000;
        this.model = 'Tesla';
    }
}

// Decorators
class Autopilot {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 6000;
    }

    getDescription() {
        return `${this.car.getDescription()} with autopilot`;
    }
}

class Parktronic {
    constructor(car) {
        this.car = car;
    }

    getPrice() {
        return this.car.getPrice() + 4000;
    }

    getDescription() {
        return `${this.car.getDescription()} with parktronic`;
    }
}

// Tesla with autopilot and parktronic
let tesla = new Tesla();

tesla = new Autopilot(tesla);
tesla = new Parktronic(tesla);

console.log(tesla.getPrice(), tesla.getDescription());

// Tesla with autopilot only
let tesla2 = new Tesla();

tesla2 = new Autopilot(tesla2);

console.log(tesla2.getPrice(), tesla2.getDescription());
