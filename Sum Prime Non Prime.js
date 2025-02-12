function writeThis(n) {
    let simpSum = 0;
    let noSimpSum = 0;
    let i = 0;
    while(true){
        let number = n[i];
        if(number =="stop")break;

        number = Number(n[i]);
        if(number<0){
            console.log("Number is negative.");
            i++;
            continue;
        }
        let times = 0;
        for(let t = number-1;t>0;t--){
            if(number/t==Math.floor(number/t))
                times++;
        }

        if(times>1)noSimpSum+=number;
        else simpSum+=number;
        i++;
    }
    console.log(`Sum of all prime numbers is: ${simpSum}`);
    console.log(`Sum of all non prime numbers is: ${noSimpSum}`);
}

writeThis(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);

