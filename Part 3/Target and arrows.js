const solution = mtrx => {
    let arr=[]
    for(let r=0;r<mtrx;r++){
        let row=[]
        for(let c=0;c<mtrx;c++){
            row.push(0)
        }
        arr.push(row)
    }

    let target =[]
    let arrow =[]
    do{
        for(let i=0;i<4;i++){
            let random  = Math.floor(Math.random() * mtrx);
            if(i<2)
                target.push(random)
            else arrow.push(random)
        }
    }
    while(target===arrow)

    arr[target[0]][target[1]]="x"

    
    let arrowView=""
    if (target[0] < arrow[0]) 
        arrowView = "^";
    else if (target[0] > arrow[0]) 
        arrowView = "v";
    else if (target[1] > arrow[1]) 
        arrowView = ">";
    else if (target[1] < arrow[1]) 
        arrowView = "<";

    arr[arrow[0]][arrow[1]]=arrowView

    for(let r=0;r<mtrx;r++){
        let text = ""
        for(let c=0;c<mtrx;c++){
            text+=arr[r][c]
        }
        console.log(`${text}\n`)
    }

    let corect = false
    if (target[0] === arrow[0] || target[1] === arrow[1]) 
        corect=true;

    return corect
    
}

console.log(solution(10))