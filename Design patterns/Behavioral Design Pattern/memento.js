class Memento {
    constructor(value) {
        this.value = value;
    }
}

const creator = {
    save: val => new Memento(val),
    restore: memento => memento.value,
}

class Caretaker {
    constructor() {
        this.store = [];
    }

    addMemento(memento) {
        this.store.push(memento);
    }

    getMemento(index) {
        return this.store[index];
    }
}

const caretaker = new Caretaker()

caretaker.addMemento(creator.save('hello'));
caretaker.addMemento(creator.save('hello world'));
caretaker.addMemento(creator.save('hello world !!!'));

console.log(creator.restore(caretaker.getMemento(1)));
