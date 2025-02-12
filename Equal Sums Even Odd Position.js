function writeThis(begin, end) {
    let data = '';
    for(let i = begin;i<=end;i++){
        let current = ''+i;
        let odd=0;
        let even=0;
        for(let t = 0;t<=current.length;t++){
            let digit = Number(current.charAt(t));
            if(t%2==0)even+=digit;
            else odd+=digit;
        }
        if(odd==even)
            data += `${i} `;
    }
    console.log(data);
}

writeThis(123456, 124000);

