function writeThis(a, b, c) {
    let sum = a+b+c;

    let munutes = Math.floor(sum/60);
    let seconds = sum%60;
    if(seconds < 10)
        console.log(`${munutes}:0${seconds}`);
    else console.log(`${munutes}:${seconds}`);
}
writeThis(35, 45, 44);