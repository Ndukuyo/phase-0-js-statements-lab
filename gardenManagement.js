const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

if (temperature > 80) {
    console.log("watering on");
} else {
    console.log("watering off");
}

if (timeOfDay === "evening" || timeOfDay === "night"){
    console.log("Lights on")
} else {
    console.log("Lights off")
}

while (soilMoisture <40){
    console.log(soilMoisture);
    soilMoisture += 5;
}
console.log(soilMoisture);