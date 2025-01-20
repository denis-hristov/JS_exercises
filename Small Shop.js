function writeThis(drink, city, number){
    let cost = 0.0;
    switch(city){
        case "Sofia":
            if (drink == "coffee")
                cost = number*0.5;
            else if (drink == "water")
                cost = number*0.8;
            else if (drink == "beer")
                cost = number*1.2;
            else if (drink == "sweets")
                cost = number*1.45;
            else if (drink == "peanuts")
                cost = number*1.6;
            break;
        case "Plovdiv":
            if (drink == "coffee")
                cost = number*0.4;
            else if (drink == "water")
                cost = number*0.7;
            else if (drink == "beer")
                cost = number*1.15;
            else if (drink == "sweets")
                cost = number*1.3;
            else if (drink == "peanuts")
                cost = number*1.5;
            break;
        case "Varna":
            if (drink == "coffee")
                cost = number*0.45;
            else if (drink == "water")
                cost = number*0.7;
            else if (drink == "beer")
                cost = number*1.1;
            else if (drink == "sweets")
                cost = number*1.35;
            else if (drink == "peanuts")
                cost = number*1.55;
            break;
        default: break;
    }
console.log(cost);
}

writeThis("coffee", "Varna", 2);