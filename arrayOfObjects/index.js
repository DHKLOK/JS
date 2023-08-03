class Car {
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }

    drive(){
        console.log(`You are driving ${this.model}`);

    }
}


const car1 = new Car("Mustang", 1990, "Black");
const car2 = new Car("Honda", 2010, "Red");
const car3 = new Car("Toyota", 2021, "Blue");


const cars = [car1, car2, car3];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

function startRace(cars){
for (const car of cars){
    car.drive();
}
}

startRace(cars);


