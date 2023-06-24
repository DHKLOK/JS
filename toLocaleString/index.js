// toLocaleString() = returns a string with a language sensitive representation of this number

// number.toLocaleString(locale, {options});

//'Locale' = specify that language (undefined = default)
//'options' = object with formatting options

let myNum = 123456.789;
let myPerc = .5;
let myTemp = 100;

//myNum = myNum.toLocaleString("en-US");
//myNum = myNum.toLocaleString("hi-IN");
//myNum = myNum.toLocaleString("de-DE");

//myNum = myNum.toLocaleString("en-US", {style:"currency", currency: "USD"});
//myNum = myNum.toLocaleString("hi-IN", {style:"currency", currency: "INR"});

myNum = myNum.toLocaleString("de-DE", {style:"currency", currency: "EUR"});
myPerc = myPerc.toLocaleString(undefined, {style: "percent"});
myTemp = myTemp.toLocaleString(undefined, {style: "unit", unit: "celsius"});


console.log(myTemp);
