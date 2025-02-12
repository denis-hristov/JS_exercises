function writeThis(n) {
    let line = 1;
    let bigger = false;
    let print="";
    for(let t = 1;t<=n;t++){
        for(let i = 1 ;i<=t; i++){
            if(line>n){
                bigger = true;
                break;
            }
            print += line +" ";
            line++;
        }
        console.log(print);
        print = "";
        if(bigger)break;
    }

}

writeThis(7);
