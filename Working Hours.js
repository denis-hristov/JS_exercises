function writeThis(number, day){
    if(number >= 10 && number <= 18 &&
        (day == "Mondey" || day == "Tuesday" || day == "Wednesday" ||
        day == "Thursday"|| day == "Friday" || day == "Saturday"))
        console.log("open");
    else console.log("closed");
}

writeThis(2, "Monday");