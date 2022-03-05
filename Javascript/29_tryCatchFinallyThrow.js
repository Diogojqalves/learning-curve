try {
    console.log('Start of try runs');
    unicycle; //this is the error, an undefined variable
    console.log('End of try runs -- never reached');
} catch(err) {
    console.log('Error has occured: ' + err);
} finally {
    console.log('This always run´s');
}

console.log('...then the execution continues');


// Throw

let json = '{"age": 30}';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name"); //define the error message
    }
    console.log(user.name);
} catch (e) { // e = throw new SyntaxError message
    console.log("JSON ERROR: " + e.message) //JSON ERROR: Incomplete data: no name
}