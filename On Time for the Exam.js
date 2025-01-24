function writeThis(examHour, examMinute, arrivalHour, arrivalMinute) {
    let examTimeInMinutes = examHour * 60 + examMinute;
    let arrivalTimeInMinutes = arrivalHour * 60 + arrivalMinute;

    let timeDifference = arrivalTimeInMinutes - examTimeInMinutes;

    if (timeDifference < -30) {
        console.log("Early");
        timeDifference = Math.abs(timeDifference);
        if (timeDifference >= 60) {
            let hours = Math.floor(timeDifference / 60);
            let minutes = timeDifference % 60;
            console.log(`${hours}:${minutes < 10 ? '0' + minutes : minutes} hours before the start`);
        } else {
            console.log(`${timeDifference} minutes before the start`);
        }
    } else if (timeDifference <= 0) {
        console.log("On time");
        if (timeDifference < 0) {
            console.log(`${Math.abs(timeDifference)} minutes before the start`);
        }
    } else {
        console.log("Late");
        if (timeDifference >= 60) {
            let hours = Math.floor(timeDifference / 60);
            let minutes = timeDifference % 60;
            console.log(`${hours}:${minutes < 10 ? '0' + minutes : minutes} hours after the start`);
        } else {
            console.log(`${timeDifference} minutes after the start`);
        }
    }
}

writeThis(9, 30, 9, 50);
