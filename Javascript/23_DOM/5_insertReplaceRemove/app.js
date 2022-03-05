const section = document.querySelector('section');


//adding html elements via HTML Code
section.innerHTML = '<h2> New Title</h2>'; //swaps entire nested notes with new content

const list = document.querySelector('ul');
list.innerHTML = list.innerHTML + '<li>Inner Html</li>'; // append html element but re-renders the whole html
list.insertAdjacentHTML('beforend', '<li>Inner Html</li>');// better way to keep the user session, doesn´t re-render the whole html

//adding elements via createElement();
const newLi = document.createElement('li'); // always document, and takes one arg, the tag name
newLi.textContent = 'Item 4';
list.appendChild(newLi); // only append() or prepend() is not supported by internet explorer


//Inserting DOM elements
list.lastElementChild.before(newLI);
list.lastElementChild.after(newLI);
list.lastElementChild.replaceWith(newLI);

//Clone
const newLi2 = newLi.cloneNode(false); // if false only clones the specific element; if true copies childs elements as well

//Remove

newLi2.remove(); // internet explorer not compatible
newLi2.parentElement.removeChild(newLi2); // best method
