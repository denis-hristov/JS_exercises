function writeThis(tripPrice, puzzles, dolls, bears, minions, trucks){
    let profit = puzzles * 2.6
                + dolls * 3
                + bears * 4.1
                + minions * 8.2
                + trucks * 2;
    
    let toys = puzzles + dolls + bears + minions + trucks;

    if(toys >= 50)
        profit*=0.75;
    
    profit*=0.9;

    if(tripPrice <= profit){
         let profitEnd = profit - tripPrice
        console.log(`Yes! ${profitEnd.toFixed(2)} lv left.`);
    }
    else{
        let profitEnd = tripPrice - profit;
        console.log(`Not enough money! ${profitEnd.toFixed(2)} lv needed.`);
    }
}
writeThis(500.8, 20, 25, 30, 50, 10);