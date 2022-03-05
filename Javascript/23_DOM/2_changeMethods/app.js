const h1 = document.querySelector('h1');
console.log(h1.textContent); //Access text

h1.textContent = 'New text'; //Change text
h1.className = 'title'; //Change h1 class name property but not reflected on the html attribute

h1.style.color = 'blue'; //change h1 color

h1.style.backgroundColor = 'red'; //change h1 background

console.dir(input) // to check properties

input.setAttribute('value', 'some other text') // change html attribute value
input.value = input.getAttribute('value') // update UI to the new value