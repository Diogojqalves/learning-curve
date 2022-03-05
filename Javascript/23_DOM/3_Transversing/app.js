// Child nodes

const ul = document.querySelector('ul');
ul.children; // access HTML child element object [li 1, li 2, li 3]
ul.children[1];
ul.lastElementChild; //element


ul.childrenNodes; //child node array (html elements + text) array object
ul.lastChild; // node


// Parent Element
const li = li.parentElement; // = ul

ul.previousElementSibling; // = <header>
ul.nextElementSibling; // = <input>
