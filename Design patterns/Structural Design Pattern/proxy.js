class CarDoor {
    open() {
        console.log('Opening car door')
    }

    close() {
        console.log('Closing the car door')
    }
}

class SecuritySystem {
    constructor(door) {
        this.door = door;
    }

    open(password) {
        if (this.authenticate(password)) {
            this.door.open();
        } else {
            console.log('Access denied!');
        }
    }

    authenticate(password) {
        return password === 'Password';
    }

    close() {
        this.door.close()
    }
}

const door = new SecuritySystem(new CarDoor());

door.open('Some');
door.open('Password');
door.close();
