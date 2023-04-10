class Counter {
    constructor() {
        if (typeof Counter.instance === 'object') {
            return Counter.instance;
        }

        this.count = 0;

        Counter.instance = this;

        return this;
    }

    getCount() {
        return this.count;
    }

    increaseCount() {
        return this.count++;
    }
}

const count1 = new Counter();
const count2 = new Counter();

count1.increaseCount();
count1.increaseCount();
count2.increaseCount();

console.log(count1.getCount());
