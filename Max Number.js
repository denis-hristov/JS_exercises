function writeThis(n) {
    let i = 0;
    let max=Number.MIN_SAFE_INTEGER;
    while(n[i] != "Stop"){
        if(Number(n[i])>max){
            max=Number(n[i]);
        }
        i++;
    } 
    console.log(max)
}
writeThis(["100",
    "99",
    "80",
    "70",
    "Stop"]);