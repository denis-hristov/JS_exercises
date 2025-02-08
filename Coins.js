function writeThis(n) {
    let money = (n*100).toFixed(0);
    let i = 0;
    while(money>0){
        i++;
        if(money-200>=0) money -=200;
        else if(money-100>=0)money-=100;
        else if(money-50>=0)money-=50;
        else if(money-20>=0)money-=20;
        else if(money-10>=0)money-=10;
        else if(money-5>=0)money-=5;
        else if(money-2>=0)money-=2;
        else if(money-1>=0)money-=1;
    }
   console.log(i);
}
writeThis(0.56);