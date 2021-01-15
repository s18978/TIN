function convertFromCelcius(celcius){
    if(isNaN(celcius)) return "couldn't calculate";
    return (celcius*9/5+32) + " f, " + (celcius+273.15) + " k";
}
function convertFromFahrenheit(fahrenheit){
    if(isNaN(fahrenheit)) return "couldn't calculate";
    return ((fahrenheit-32)*5/9) + " c, " + ((fahrenheit-32)*5/9+273.15) + " k";
}
function convertFromKelvin(kelvin){
    if(isNaN(kelvin)) return "couldn't calculate";
    return (kelvin-273.15) + " c, " + ((kelvin-273.15)*9/5+32) + " f";
}
function convertor(celcius, fahrenheit, kelvin, base) {
    let c = parseInt(celcius); let f = parseInt(fahrenheit); let k = parseInt(kelvin);
    switch (base) {
        case "C":
            return convertFromCelcius(c);
        case "F":
            return convertFromFahrenheit(f);
        case "K":
            return convertFromKelvin(k);
        default:
            return "couldn't calculate";
    }
}
exports.convertTemperature = convertor;