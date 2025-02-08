function writeThis(n) {
    let steps = 0;
    let i = 0;
    while(steps<=10000){
        if(n[i]=="Going home"){
            steps+=Number(n[i+1]);
            break;
        }
        steps+=Number(n[i]);
        i++;
    }
    if(steps>=10000){
        console.log("Goal reached! Good job!");
        console.log(`${steps-10000} steps over the goal!`)
    }
    else{
        console.log(`${10000-steps} more steps to reach goal.`);
    }
}
writeThis(["1000",
    "1500",
    "2000",
    "6500"]);