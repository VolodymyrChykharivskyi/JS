class OfficialDealer {
    constructor() {
        this.customers = [];
    }

    orderAuto(customer, auto) {
        const name = customer.getName();
        console.log(`Order name: ${name}. Order auto is ${auto}`);
        this.addToCustomersList(name);
    }

    addToCustomersList(name) {
        this.customers.push(name);
    }

    getCustomerList() {
        return this.customers;
    }
}

class Customer {
    constructor(name, dealerMediator) {
        this.name = name;
        this.dealerMediator = dealerMediator;
    }

    getName() {
        return this.name;
    }

    makeOrder(auto) {
        this.dealerMediator.orderAuto(this, auto)
    }
}

const mediator = new OfficialDealer();

const client = new Customer('Client', mediator);
const client2 = new Customer('Other Client', mediator);

client.makeOrder('Tesla');
client2.makeOrder('Audi');

mediator.getCustomerList();
