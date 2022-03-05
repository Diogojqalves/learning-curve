const person = {
    name: "Zodiac Hasbro",
    age: 56
};

const greeting = `Hello, my name is ${person.name}! I am ${person.age} years old`

console.log(greeting);

/// Example 2
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const resultDisplayArray = [];
    // Only change code above this line
    for (let i = 0; i < arr.length; i++) {
        resultDisplayArray.push(`<li> class="text-warning">${arr[i]}</li>`)
    }
  
    return resultDisplayArray;
  }
  
  const resultDisplayArray = makeList(result.failure);
  console.log(resultDisplayArray)
  
  //example 3
  /*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
  const [area, perimeter] = expressions;
  const value = Math.sqrt((perimeter ** 2 - (16 * area)));

  return [((perimeter - value) / 4), ((perimeter + value) / 4)];
}


function main() {
  let s1 = +(readLine());
  let s2 = +(readLine());
  
  [s1, s2] = [s1, s2].sort();
  
  const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;
  
  console.log((s1 === x) ? s1 : -1);
  console.log((s2 === y) ? s2 : -1);
}