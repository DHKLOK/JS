var human1 = {
name : "Rick",
age : 65,

eat : function (){
    console.log(`${this.name} is eating food`)
},
drink : function(){
    console.log(`${this.name} is drinking alcohol`, "berp")
},
sleep : function(){
    console.log(`${this.name} has passed out`)
}
}
var human2 = {
    name : "Rachel",
    age : 30,
    
    eat : function (){
        console.log(`${this.name} is eating food`)
    },
    drink : function(){
        console.log(`${this.name} is drinking soda`)
    },
    sleep : function(){
        console.log(`${this.name} has passed out`)
    }
    }

human1.drink();
human2.eat();
