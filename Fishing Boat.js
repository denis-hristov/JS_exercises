function writeThis(budget, season, number){
    let cost=0.0;
    if (season == "Summer" || season == "Autumn") cost = 4200;
    else if (season == "Spring") cost = 3000;
    else if (season == "Winter") cost = 2600;

    if (number <= 6) cost *= 0.9;
    else if (number <= 11) cost *= 0.85;
    else if (number >= 12) cost *= 0.75;

    if (number % 2 == 0 && season != "Autumn")cost *= 0.95;

    if(cost<=budget)
        console.log(`Yes! You have ${(budget-cost).toFixed(2)} leva left.`);
    else
        console.log(`Not enough money! You need ${(cost-budget).toFixed(2)} leva.`);
}
writeThis(3000, "Summer", 11);