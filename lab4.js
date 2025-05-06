const saudiaAirlines = {
    airlineName: "الخطوط الجوية السعودية",
    country: "السعودية",
    fleetSize: 120,
    destinations: ["الرياض", "جدة", "دبي", "نيويورك"],
    inOperation: true,



    bookFlight(destination) {
        if (this.destinations.includes(destination)) {
            console.log(`تم حجز رحلة إلى ${destination}.`);
        } else {
            console.log(`عذرًا، لا توجد رحلات إلى ${destination} حالياً.`);
        }
    },
    addDestination(newDestination) {
        if (!this.destinations.includes(newDestination)) {
            this.destinations.push(newDestination);
        }
    },

    getSummary() {
        console.log(
            `${this.airlineName} تعمل في ${this.country} وتمتلك ${this.fleetSize} طائرة وتطير إلى ${this.destinations.length} وجهة.`
        );
    }
};

saudiaAirlines.bookFlight("دبي");
saudiaAirlines.addDestination("لندن");
saudiaAirlines.getSummary();

console.log(saudiaAirlines);


////////////////////////////////////////////////////////////


function name1(num1, num2) {
    return num1 + num2;
}
console.log(name1(7, 3))


function name2(num1, num2) {
    return num1 * num2;
}
console.log(name2(7, 3))


function name2(num1, num2) {
    return num1 / num2;
}
console.log(name2(7, 3))

function name3(num1, num2) {
    return num1 - num2;
}
console.log(name3(7, 3))


function name4(num1, num2) {
    return num1 % num2;
}
console.log(name4(7, 3))