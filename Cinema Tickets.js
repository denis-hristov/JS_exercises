function writeThis(input) {
    let index = 0;
    let totalTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;

    while (input[index] !== "Finish") {
        let movie = input[index++];
        let freeSeats = Number(input[index++]);
        let soldTickets = 0;

        while (input[index] !== "End" && soldTickets < freeSeats) {
            let ticketType = input[index++];
            soldTickets++;

            if (ticketType === "student") studentTickets++;
            else if (ticketType === "standard") standardTickets++;
            else if (ticketType === "kid") kidTickets++;
        }

        totalTickets += soldTickets;
        let percentFull = (soldTickets / freeSeats * 100).toFixed(2);
        console.log(`${movie} - ${percentFull}% full.`);
        
        if (input[index] === "End") index++;
    }

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${(studentTickets / totalTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardTickets / totalTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidTickets / totalTickets * 100).toFixed(2)}% kids tickets.`);
}

writeThis([
    "The Matrix",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "The Green Mile",
    "6",
    "student",
    "standard",
    "standard",
    "student",
    "kid",
    "student",
    "Finish"]);
