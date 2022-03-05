//covert str to int

function convertToInteger(str) {
    return parseInt(str)
}

convertToInteger("56");

// with a Radix, convert binary to int
function convertToInteger(str) {
    return parseInt(str, 2)
}

convertToInteger("10011");
