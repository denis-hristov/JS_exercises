function writeThis(n) {
    let cake = Number(n[0])*Number(n[1]);
    let i = 2;
    while(cake>=0){
        if(n[i]=="STOP")break;
        cake -= Number(n[i]);
        i++;
    }
    if(cake>0 && n[i]=="STOP") console.log(`${cake} pieces are left.`);
    else console.log(`No more cake left! You need ${Math.abs(cake)} pieces more.`);
}
writeThis(["10",
    "10",
    "20",
    "20",
    "20",
    "20",
    "21"]);

