function testEqual(val) {
    if(val == 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testEqual(10));


function testStrict(val) {
    if(val === 12) {
        return "Equal";
    }
    return "Not Equal";
}
console.log(testStrict(12));

// != inequality
// !== strict inequality

function testGreaterThan(val) {
    if(val > 100) {
        return "Over 100";
    }
    if (val < 100) {
    return "Lower then 100";
    }
}
console.log(testGreaterThan(12));

// <= or >=

function testLogicalAnd (val) {
    if (val <= 50 && val >= 25) {
        return true;
    } else {
    return false;
    }
}
console.log(testLogicalAnd(30))

//   || OR

function testElseIf (val) {
    if (val > 10) {
        return "greater then 10";
    } else if (val < 5) {
        return "Smaller then 5";
    } else {
        return "Between 5 and 10";
    }
}
