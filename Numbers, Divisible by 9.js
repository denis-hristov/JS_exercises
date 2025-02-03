function writeThis(begin, end) {
    let sum = 0;
    let buff="";
    for(let i=begin; i<end;i++){
        if(i%9==0){
            sum+=i;
            buff+=i+'\n';
        }
    }
    console.log(`The sum: ${sum}\n${buff}`);
}

writeThis(100, 200);
