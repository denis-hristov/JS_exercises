function writeThis(city, number){
    let cost=0.0;
    if (city == "Sofia"){
        if (0 <= number && number <= 500)
            cost = number * 0.05;
        else if (number <= 1000)
            cost = number * 0.07;
        else if (number <= 10000)
            cost = number * 0.08;
        else if (number > 10000)
            cost = number * 0.12;
        else cost = 0.0;
    }
    else if (city == "Varna"){
        if (0 <= number && number <= 500)
            cost = number * 0.045;
        else if (number <= 1000)
            cost = number * 0.075;
        else if (number <= 10000)
            cost = number * 0.1;
        else if (number > 10000)
            cost = number * 0.13;
        else cost = 0.0;
    
    }
    else if (city == "Plovdiv"){
        if (0 <= number && number <= 500)
            cost = number * 0.055;
        else if (number <= 1000)
            cost = number * 0.08;
        else if (number <= 10000)
            cost = number * 0.12;
        else if (number > 10000)
            cost = number * 0.145;
        else cost = 0.0;
    }
    if (cost <= 0.0 || number< 0) console.log("error");
    else console.log(cost.toFixed(2));
}
writeThis("Varna", 3874.45);