// Generate a random race number between 0 and 999
let raceNumber = Math.floor(Math.random() * 1000);

// Boolean variable indicating if the runner registered early
let early = true;

// Runner's age
let age = 28;

// If the runner is an adult (age > 18) and registered early, add 1000 to their race number
if (early && age > 18) {
    raceNumber += 1000;
}

// Determine the race start time and print the appropriate message
if (early && age > 18) {
    // Early adult runners start at 9:30 am
    console.log(`Race will begin at 9:30 am, your race number is: ${raceNumber}.`);
} else if (!early && age > 18) {
    // Late adult runners start at 11:00 am
    console.log(`Race will begin at 11:00 am, your race number is: ${raceNumber}.`);
} else if (age < 18) {
    // Youth runners start at 12:30 pm
    console.log(`Race will begin at 12:30 pm, your race number is: ${raceNumber}.`);
} else {
    // Runners who are exactly 18 years old should approach the registration desk
    console.log('Please approach the registration desk, Thanks!');
}


