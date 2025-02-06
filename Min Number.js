function writeThis(n) {
    let i = 0;
    let min=Number.MAX_SAFE_INTEGER;
    while(n[i] != "Stop"){
        if(Number(n[i])<min){
            min=Number(n[i]);
        }
        i++;
    } 
    console.log(min)
}
writeThis(["100",
    "99",
    "80",
    "70",
    "Stop"]);
