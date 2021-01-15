function convertToKilometers(miles) {
    if(miles<0) return "distance can't be negative";
    if(isNaN(miles)) return "couldn't calculate";
    return (miles*1.609) + " kilometers";
}
function convert2Miles(kilos) {
    if(kilos<0) return "distance can't be negative";
    if(isNaN(kilos)) return "couldn't calculate";
    return (kilos/1.609) + " miles";
}
function convertor(miles, kilos, base) {
    let m = parseInt(miles); let k = parseInt(kilos);
    switch (base) {
        case "K":
            return convert2Miles(k)
        case "M":
            return convertToKilometers(m);
        default:
            return "couldn't calculate";
    }
}
exports.convertDistance = convertor;