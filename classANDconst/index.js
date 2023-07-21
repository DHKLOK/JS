class Player{
    score = 0;
    constructor(name){
        this.name = name;

    }
    pause(){
        console.log(`${this.name} paused the game`);
    };
    exit(){
        console.log(`${this.name} exited the game`);
    }

    addpoint(){
        this.score += 1;
        console.log(`${this.name} scored a point`)

    }

    showScore(){
        console.log(`${this.name}'s score is ${this.score}`);

    }
}

const player1 = new Player("Jose");
const player2 = new Player("Michel");

player1.pause();
player1.exit();
player2.pause();

player1.addpoint();
player1.addpoint();
player1.addpoint();
player1.showScore();

player2.showScore();
player2.addpoint();
player2.addpoint();
player2.addpoint();
player2.addpoint();
player2.addpoint();
player2.addpoint();
player2.showScore();


class Student{

    constructor(name,age,gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;


    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Spongebob", 31, 3.2);
const student2 = new Student("Patrick", 35, 1.5);

student2.study();




