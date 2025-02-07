function writeThis(n) {
    let neededMoney = Number(n[0]);
    let sumMoney = Number(n[1]);
    let i = 2;
    let action;
    let spends = 0;
    let days = 0;
    let stop = false;
    while(sumMoney < neededMoney){
        action = n[i];
        days++;
        if(action == "spend") {
            spends++;
            sumMoney -= Number(n[i+1]);
            if(sumMoney<0)sumMoney=0;
            if(spends==5){
                stop = true;
                break;
            }
        }
        else {
            spends = 0;
            sumMoney += Number(n[i+1]);
        }
        i+=2;    
    }
    if(stop) {
        console.log("You can't save the money.");
        console.log(days)
    }
    else{
        console.log(`You saved the money for ${days} days.`);
    }
}
writeThis(["250",
    "150",
    "spend",
    "50",
    "spend",
    "50",
    "save",
    "100",
    "save",
    "100"]);
