const car = {
    model:"Mustang",
    color:"red",
    year:2023,

    carInfo : function(){
        console.log(`You car is a ${this.color}, ${this.year}, ${this.model}`)
    },

    brake : function(){
        console.log("you step on the brake")
    }

}

car.carInfo();
car.brake();


