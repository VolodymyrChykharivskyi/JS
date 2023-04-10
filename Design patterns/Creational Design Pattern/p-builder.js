class Car {
    constructor() {
        this.isAutoPilot = false;
        this.isParktronic = false;
        this.isSignaling = false;
    }
}

class CarBuilder {
    constructor() {
        this.car = new Car();
    }

    addAutoPilot() {
        this.car.isAutoPilot = true;
        return this;
    }

    addParktronic() {
        this.car.isParktronic = true;
        return this;
    }

    addSignaling() {
        this.car.isSignaling = true;
        return this;
    }

    updateEngine(engine) {
        this.car.engine = engine;
        return this;
    }

    build() {
        return this.car;
    }
}

const car = new CarBuilder().addAutoPilot().addParktronic().updateEngine('V8').build();

console.log(car);
