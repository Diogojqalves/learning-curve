// similar to arrays except instead of using indexes to access values, they use properties
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["Everything"]
};

var nameValue = ourDog.name;
console.log(nameValue);

ourDog.name = "Happy Camper";
console.log(ourDog.name )

// add new property
ourDog.bark = "bow-wow";
ourDog['speak'] = "woof";
console.log(ourDog);
console.log(ourDog.speak)

// delete property
delete ourDog.tails;

//Check for property
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not found"
    }
}

console.log(checkObj("gift"))