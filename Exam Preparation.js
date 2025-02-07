function writeThis(n) {
    let poorGrates = Number(n[0]);
    let poor = 0;
    let i = 1;
    let exercises = 0;
    let average = 0;
    let name;
    let stop = false;
    while(name != n[i]){
        name = n[i];
        if(name=="Enough") {
            name=n[i-2]
            break;
        }
        let grate = Number(n[i+1]);
        average +=grate;
        exercises++;
        if(grate <= 4){
            poor++;
            if(poor == poorGrates){
                stop = true;
                break;
            }
        }
        i+=2;    
    }
    if(stop) 
        console.log(`You need a break, ${poor} poor grades.`);
    else{
        console.log(`Average score: ${(average/exercises).toFixed(2)}`);
        console.log(`Number of problems: ${exercises}`);
        console.log(`Last problem: ${name}`);
    }
}
writeThis(["3",
    "Money",
    "6",
    "Story",
    "4",
    "Spring Time",
    "5",
    "Bus",
    "6",
    "Enough"]);
