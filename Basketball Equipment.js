function writeThis(fee) {
    let equipment = fee * 0.6;
    let team = equipment * 0.8;
    let ball = team * 0.25;
    let accessories = ball * 0.2;

    let sum = fee + equipment + team + ball + accessories;
    console.log(sum);
}
writeThis(550);