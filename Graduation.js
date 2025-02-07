function writeThis(n) {
    let name = n[0];
    let i = 1;
    let average = 0;
    let grade = 1;
    let badGreat = 0;
    while(grade <= 12){
        if(n[i]<4){ 
            badGreat++;
            if(badGreat==2){
                console.log(`${name} has been excluded at ${grade} grade`)
                break;
            } 
            continue;
        } 
        grade++;
        average+=Number(n[i]);
        i++;
    }
if(grade>12)console.log(`${name} graduated. Average grade: ${(average/12).toFixed(2)}`)
}
writeThis(["Gosho", 
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);
    
