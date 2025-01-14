function writeThis(budget, videoCards, processorso, ram){
    let neededBudget = videoCards*250 + processorso*(videoCards*250*0.35) + ram*(videoCards*250*0.1);
    if(videoCards>processorso)neededBudget*=0.85;

    if(budget>=neededBudget){
        console.log(`You have ${(Math.abs(neededBudget-budget)).toFixed(2)} leva left!`);
    }
    else {
        console.log(`Not enough money! You need ${(Math.abs(budget-neededBudget)).toFixed(2)} leva more!`)
    }
}
writeThis(900, 2, 1, 3);