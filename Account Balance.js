function writeThis(n) {
    let sum = 0;
    let i = 0;
    while(n[i] != "NoMoreMoney"){
        if(Number(n[i])<0){
            console.log("Invalid operation!");
            break;
        }
        else {sum +=Number(n[i]);
        console.log(`Increase: ${Number(n[i]).toFixed(2)}`);
        }
        i++;
    } 
    console.log(`Total: ${sum.toFixed(2)}`)
}
writeThis(["5.51", 
    "69.42",
    "100",
    "NoMoreMoney"]);
