class Account {
    pay(orderPrice) {
        if (this.canPay(orderPrice)) {
            console.log(`Paid ${orderPrice} using ${this.name}`);
        } else if (this.incomer) {
            console.log(`Cannot pay using ${this.name}`);
            this.incomer.pay(orderPrice)
        } else {
            console.log('Unfortunately, not enough money');
        }
    }

    canPay(amount) {
        return this.balance >= amount;
    }

    setNext(account) {
        this.incomer = account;
    }

    show() {
        console.log(this);
    }

}

class Master extends Account {
    constructor(balance) {
        super();
        this.name = 'Master Card';
        this.balance = balance;
    }
}

class Paypal extends Account {
    constructor(balance) {
        super();
        this.name = 'Paypal';
        this.balance = balance;
    }
}

class Stripe extends Account {
    constructor(balance) {
        super();
        this.name = 'Stripe';
        this.balance = balance;
    }
}

const master = new Master(100);
const paypal = new Paypal(200);
const stripe = new Stripe(500);

// Chain
master.setNext(paypal);
paypal.setNext(stripe);

master.pay(600);

master.show();
