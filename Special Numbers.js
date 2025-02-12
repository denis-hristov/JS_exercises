function writeThis(n) {
    let print = '';
    for(let number = 1111;number<=9999;number++){
        let i = 0
        let SNumber = number.toString();
        if(SNumber.includes('0'))continue;

        if(n/(number%10)==Math.floor(n/(number%10)))i++;
        if(n/((Math.floor(number/10))%10)==Math.floor(n/((Math.floor(number/10))%10)))i++;
        if(n/((Math.floor(number/100))%10)==Math.floor(n/((Math.floor(number/100))%10)))i++;
        if(n/((Math.floor(number/1000)))==Math.floor(n/((Math.floor(number/1000)))))i++;

        if(i==4)print+=(number+' ');
    }
    console.log(print);
}

writeThis(3);
