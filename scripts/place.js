// scripts/place.js

// CURRENT YEAR

const currentYear = document.querySelector("#currentyear");

currentYear.textContent = new Date().getFullYear();


// LAST MODIFIED

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;



// STATIC WEATHER VALUES

const temperature = 8;

const windSpeed = 15;



// WIND CHILL FUNCTION

function calculateWindChill(temp, speed) {

    return (
        13.12 +
        0.6215 * temp -
        11.37 * speed ** 0.16 +
        0.3965 * temp * speed ** 0.16
    ).toFixed(1);
}



// DISPLAY WIND CHILL

let windChill = "N/A";


if (temperature <= 10 && windSpeed > 4.8) {

    windChill =
    `${calculateWindChill(temperature, windSpeed)} °C`;
}


document.querySelector("#windchill").textContent = windChill;