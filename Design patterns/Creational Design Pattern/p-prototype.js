class TeslaCar {
    constructor(model, price, interior, isAutopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.isAutopilot = isAutopilot;
    }

    produce() {
        return new TeslaCar(this.model, this.price, this.interior, this.isAutopilot);
    }
}

// Produce base auto
const prototypeTeslaCar = new TeslaCar('S', 80000, 'black', false);

// Cloning of base auto
const car1 = prototypeTeslaCar.produce();
const car2 = prototypeTeslaCar.produce();
const car3 = prototypeTeslaCar.produce();

// Changes for particular auto
car2.interior = 'white';
car2.isAutopilot = true;
