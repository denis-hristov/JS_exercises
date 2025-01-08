function writeThis(nylonsQ,paintQ,organizerQ,master) {
    let nylons = (nylonsQ + 2) * 1.5;
    let paint = (paintQ*1.1) * 14.5;
    let organizer = organizerQ * 5.0;
    let bags = 0.4;

    let sum = nylons+paint+organizer+bags;
    let discountMaster = (sum * 0.3) * master;
    console.log(sum+discountMaster);
}
writeThis(10,11,4,8);