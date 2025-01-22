function writeThis(budget, season){
    let cost=0.0;
    let destination = "", activity = "";

    if (budget <= 100){
        destination = "Bulgaria";
        if (season == "summer"){
            activity = "Camp";
            cost = budget * 0.3;
        }
        else if (season == "winter"){
            activity = "Hotel";
            cost = budget * 0.7;
        }
    }
    else if (budget <= 1000){
        destination = "Balkans";
        if (season == "summer"){
            activity = "Camp";
            cost = budget * 0.4;
        }
        else if (season == "winter"){
            activity = "Hotel";
            cost = budget * 0.8;
        }
    }
    else if (budget > 1000){
        destination = "Europe";
        activity = "Hotel";
        cost = budget * 0.9;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${activity} - ${cost.toFixed(2)}`);
}
writeThis(50, "summer");