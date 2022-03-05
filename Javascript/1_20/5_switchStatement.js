function caseInSwitch(val) {
    var answer = "";
    switch(val) {
        case 1:     // if val === 1 {
            answer = "alpha";
            break; // end of statement
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gama";
            break;
        case 4:
            answer = "delta";
            break;
        default:
            answer = "Number doesn´t match"; //switch else statemnt
            break;
    }
    return answer;
}

console.log(caseInSwitch(2));