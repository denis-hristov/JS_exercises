function writeThis(age, cost, price) {
    let year = true;
    let sum = 0;
    let toys = 0;
    let money = 0;
    for(let i=1; i<=age;i++){
        if (year){
            year = false;
            toys++;
        }
        else{
            year = true;
            money+=10;
            sum +=money;
            sum--;
        }
    }
    sum+=(toys*price);
    if(cost<=sum)
        console.log(`Yes! ${(sum-cost).toFixed(2)}`);
    else
        console.log(`No! ${(cost-sum).toFixed(2)}`);
}

writeThis(10, 170.00, 6);
