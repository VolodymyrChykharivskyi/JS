class ArrayIterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
}

const collection  = new ArrayIterator(['Audi', 'BMW', 'Tesla']);

while (collection.hasNext()) {
    console.log(collection.next());
}
