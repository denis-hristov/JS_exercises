function writeThis(n) {
    let endPrint = '';
    let endSum = 0;
    let N = 0;
    let projects = 0;
    while(true){
        N++;
        let name = n[N];
        if(name == "Finish")break;

        let sum = 0;
        for(let t=0;t<Number(n[0]);t++){
            N++;
            sum +=Number(n[N]);
        }
        endPrint +=`${name} - ${(sum/Number(n[0])).toFixed(2)}.\n`;
        endSum+=sum/Number(n[0]);
        projects++;
    }
    console.log(`${endPrint}Student's final assessment is ${(endSum/projects).toFixed(2)}.`)
}

writeThis(["3",
    "Arrays",
    "4.53",
    "5.23",
    "5.00",
    "Lists",
    "5.83",
    "6.00",
    "5.42",
    "Finish"]);