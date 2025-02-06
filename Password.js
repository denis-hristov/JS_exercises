function writeThis(n) {
    let name = n[0];
    let pass = n[1];
    let i = 2
    while(pass != n[i]){
        i++;
    } 
    console.log(`Welcome ${name}!`);
}
writeThis(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"]);
