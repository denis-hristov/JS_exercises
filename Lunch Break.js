function writeThis(series, episotTime, breaks){
    let lunch = breaks/8;
    let chilTime = breaks/4;
    let neededTime = breaks - (lunch + chilTime);

    if(neededTime>=episotTime){
        console.log(`You have enough time to watch ${series} and left with ${Math.ceil(neededTime-episotTime)} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${series}, you need ${Math.ceil(episotTime-neededTime)} more minutes.`)
    }
}