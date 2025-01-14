function writeThis(record, distance, time){
    let distanceTime = distance * time;
    let additionalTime = Math.floor(distance / 15) * 12.5;

    let totalTime = distanceTime + additionalTime;
    
    if(totalTime < record){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
    else{
        let endTime = totalTime - record;
        console.log(`No, he failed! He was ${endTime.toFixed(2)} seconds slower.`);
    }
}