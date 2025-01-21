function writeThis(day){
    switch(day){
        case "Monday":
        case "Tuesday":
        case "Friday": console.log(12); break;
        case "Wednesday":
        case "Thursday":console.log(14); break;
        case "Saturday":
        case "Sunday":console.log(16); break;
        default: break;
    }
}

writeThis(2, "Monday");