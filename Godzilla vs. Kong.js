function writeThis(budget, numberPeople, priseTag){
    let decor = budget * 0.10;
    let clodingPrice = numberPeople * priseTag;
    
    if(numberPeople > 150){
        clodingPrice -= clodingPrice * 0.10;
    }

    let sum = decor + clodingPrice;
    let diff = Math.abs(budget - sum);

    if(sum > budget){
        console.log("Not enough money!");
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`);
    }
    else{
        console.log("Action!");
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`);
    }
}