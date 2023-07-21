class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        console.log(`This ${this.name} is eating`)
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`)
    }
}


class Rabbit extends Animal {
    constructor(name, age, runspeed) {
        super(name, age);
        this.runSpeed = runspeed;
    }

    run() {
        console.log(`This ${this.name} is running`)
    }

}

class Fish extends Animal {
    constructor(name, age, swimspeed) {
        super(name, age);
        this.swimSpeed = swimspeed;    }
    swim() {
        console.log(`This ${this.name} is swimming`)
    }

}

class Hawk extends Animal {
    constructor(name, age, flyspeed) {
        super(name, age)
        this.flySpeed = flyspeed
    }

    fly() {
        console.log(`This ${this.name} is flying`)
    }

}

const nemo = new Fish("Nemo", 3, 40);
const hawkeye = new Hawk("Blanc", 12, 200);

nemo.swim();
console.log(nemo.swimSpeed)
console.log(nemo.alive);
hawkeye.fly();