function writeThis(n) {
    let number = n[0];
    let p1=0, p2=0, p3=0, p4=0, p5=0;
    for(let i=1; i<= number;i++){
        let newNumber = n[i]
        if(newNumber < 200)
            p1++;
        else if(newNumber < 400)
            p2++;
        else if(newNumber < 600)
            p3++;
        else if(newNumber < 800)
            p4++;
        else if(newNumber >= 800)
            p5++;
    }
    console.log(`${(p1/number*100).toFixed(2)}%`);
    console.log(`${(p2/number*100).toFixed(2)}%`);
    console.log(`${(p3/number*100).toFixed(2)}%`);
    console.log(`${(p4/number*100).toFixed(2)}%`);
    console.log(`${(p5/number*100).toFixed(2)}%`);
}
writeThis([3, 1, 2, 999]);
