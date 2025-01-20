function writeThis(age, jender){
    switch(jender){
        case "m":
            if(age>=16) console.log("Mr.");
            else console.log("Master");
            break;
        case "f":
            if(age>=16) console.log("Ms.");
            else console.log("Miss");
            break;
    }
}
writeThis(12, 'f');