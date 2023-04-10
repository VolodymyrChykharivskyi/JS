class Bmw {
    constructor(model, price, maxSpeed) {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

class BmwFactory {
    create(type) {
        if (type === 'X5') {
            return new Bmw(type, 20000, 300);
        }

        if (type === 'X6') {
            return new Bmw(type, 25000, 320);
        }
    }
}

const bmwFactory = new BmwFactory();

const x5 = bmwFactory.create('X5');
const x6 = bmwFactory.create('X6');

console.log(x5);
console.log(x6);
