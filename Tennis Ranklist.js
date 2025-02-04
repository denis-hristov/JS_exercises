function writeThis(n) {
    let number = Number(n[0]);
    let points = Number(n[1]);
    let beginP = points;
    let wins = 0;
    for(let i=2; i<= number+1;i++){
        let resoltate = n[i];
        if(resoltate == "W"){
            wins++;
            points += 2000;
        }
        else if(resoltate == "F")
            points += 1200;
        else if(resoltate == "SF")
            points += 720;
    }
    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor((points-beginP)/number)}`);
    console.log(`${(wins/number*100).toFixed(2)}%`);
}
writeThis(["5",
    "1400",
    "F",
    "SF",
    "W",
    "W",
    "SF"]);
