function writeThis(n) {
    let number = Number(n[0]);
    let sum = 0;
    let i = 1;
    while(number > sum){
        sum += Number(n[i]);
        i++;
    } 
    console.log(sum);
}
writeThis(["100",
    "10",
    "20",
    "30",
    "40"]);
