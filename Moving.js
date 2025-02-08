function writeThis(n) {
    let area = Number(n[0])*Number(n[1])*Number(n[2]);
    let i = 3;
    while(area>0){
        if(n[i]=="Done")break;
        area -= Number(n[i]);
        i++;
    }
    if(area>0 && n[i]=="Done") console.log(`${area} Cubic meters left.`);
    else console.log(`No more free space! You need ${Math.abs(area)} Cubic meters more.`);
}
writeThis(["10", 
    "10",
    "2",
    "20",
    "20",
    "20",
    "20",
    "122"]);

