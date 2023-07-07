let ages = [18,16,21,17,30,90,5];
let adults = ages.filter(checkAges);
adults.forEach(print);

function checkAges(ele){

    return ele >= 18;

}

function print(ele){
    console.log(ele);
}



