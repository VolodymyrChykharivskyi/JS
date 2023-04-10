class Engine2 {
    simpleInterface() {
        console.log('Engine 2.0');
    }
}

class EngineV8 {
    complecatedInterface() {
        console.log('Engine V8!');
    }
}

class EngineV8Adapter {
    constructor(engine) {
        this.engine = engine;
    }

    simpleInterface() {
        this.engine.complecatedInterface();
    }
}

class Auto {
    startEngine(engine) {
        engine.simpleInterface()
    }
}

const car1 = new Auto();
const oldEngine = new Engine2();

car1.startEngine(oldEngine);

const car2 = new Auto();
const engineAdapter = new EngineV8Adapter(new EngineV8());

car2.startEngine(engineAdapter);

const car3 = new Auto();
const newEngine = new EngineV8();

car3.startEngine(newEngine);
