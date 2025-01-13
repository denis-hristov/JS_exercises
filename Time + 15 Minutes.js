function writeThis(hours, minutes) {
    let hMin = hours*60;
    let sum = hMin+minutes+15;

    let endHours = Math.floor(sum/60);
    let endMinutes = sum%60;

if(endHours > 23)
    endHours = 0;

    if(endMinutes < 10)
        console.log(`${endHours}:0${endMinutes}`);
    else console.log(`${endHours}:${endMinutes}`);
}
writeThis(1, 46);