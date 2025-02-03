function writeThis(word) {
    let sum = 0;
    for(let i=0; i<word.length;i++){
        switch (word[i]){
            case '1':
                sum+=1;
                break;
            case '2':
                sum+=2;
                break;
            case '3':
                sum+=3;
                break;
            case '4':
                sum+=4;
                break;
            case '5':
                sum+=5;
                break;
            case '6':
                sum+=6;
                break;
            case '7':
                sum+=7;
                break;
            case '8':
                sum+=8;
                break;
            case '9':
                sum+=9;
                break;
        }
    }
    console.log(`The sum of the digits is:${sum}`);
}

writeThis("1234");
