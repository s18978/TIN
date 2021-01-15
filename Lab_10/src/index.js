import dist from './distance';
import temp from './temperature';

function convertDistance() {
    let kilom = document.getElementById('kilometers').value;
    let miles = document.getElementById('miles').value;
    let base = document.getElementById('dBase').value;

    let res = dist.convertDistance(miles, kilom, base);
    document.getElementById('distanceRes').value = res;
}
function convertTemperature() {
    let cel = document.getElementById('celcius').value;
    let fahr = document.getElementById('fahrenheit').value;
    let kel = document.getElementById('kelvin').value;
    let base = document.getElementById('tBase').value;

    let res = temp.convertTemperature(cel,fahr,kel,base);
    document.getElementById('temperatureRes').value = res;
}
window.convertDistance = convertDistance;
window.convertTemperature = convertTemperature;