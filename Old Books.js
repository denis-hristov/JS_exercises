function writeThis(n) {
    let name = n[0];
    let i = 1;
    let found = true;
    while(name != n[i]){
        if(n[i]=="No More Books"){
            found = false;
            break;
        }
        i++;    
    }
    if(found) 
        console.log(`You checked ${i-1} books and found it.`);
    else{
        console.log("The book you search is not here!");
        console.log(`You checked ${i-1} books.`);
    }
}
writeThis(["Troy",
    "Stronger",
    "Life Style",
    "Troy"]);
    
