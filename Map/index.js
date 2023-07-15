//Map = object that holds k/v pairs of any data type

const store = new Map([
    ["shirt", 20],
    ["jeans", 30],
    ["socks", 10],
    ["underwear", 50]
    ])

    
    let shoppingCart = 0;

    shoppingCart += store.get("shirt");
    console.log(shoppingCart);
    store.set("jeans", 20);
    store.delete("hat");
    console.log(store.has("hat"))
    console.log(store.has("underwear"))
    
    const key = "jeans";
    const value = store.get(key);

    console.log(`${key} ${value}`);


    store.forEach((value, key) => console.log(`${key} $${value}`));


