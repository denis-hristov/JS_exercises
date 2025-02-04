function writeThis(n) {
    let number = Number(n[0]);
    let p1=0, p2=0, p3=0, p4=0, p5=0;
    let sum = 0;
    for(let i=1; i<= number;i++){
        let newNumber = Number(n[i]);
        sum+=newNumber;
        if(newNumber <= 5)
            p1+=newNumber;
        else if(newNumber <= 12)
            p2+=newNumber;
        else if(newNumber <= 25)
            p3+=newNumber;
        else if(newNumber <= 40)
            p4+=newNumber;
        else if(newNumber >= 41)
            p5+=newNumber;
    }
    console.log(`${(p1/sum*100).toFixed(2)}%`);
    console.log(`${(p2/sum*100).toFixed(2)}%`);
    console.log(`${(p3/sum*100).toFixed(2)}%`);
    console.log(`${(p4/sum*100).toFixed(2)}%`);
    console.log(`${(p5/sum*100).toFixed(2)}%`);
}
writeThis(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"])
    ;
