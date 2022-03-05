const button = document.querySelector('button');

//button.onclick = function () {
//}

 const buttonClickHandler = () => {
     console.log('button was clicked');
 }

const anotherButtonClickHandler = () => {
    console.log('this was clicked');
}
/*
 button.onclick = buttonClickHandler; //can only use one function
 */

 button.addEventListener('click', () => {buttonClickHandler(); anotherButtonClickHandler();}); //add both functions


// remove Event Listener
const boundFn = buttonClickHandler.bind(this);

 setTimeout(() => {
     button.removeEventListener('click', boundFn)
 }, 2000);

 
 //Event Object
 const buttonClickHandler = event => {
    console.log(event); //return event object methods and details
    event.target.disable = true; //disables button
}

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', buttonClickHandler)
})

//More events
button.addEventListener('mouseenter', () => {buttonClickHandler(); anotherButtonClickHandler();}); //moves on the button

window.addEventListener('scrool', event => {
    console.log(event);
})

//preventDefault()
const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault(); //prevent default behavior of the browser, in this cause block the form from reloading the page
    console.log(event);
})


// event propagation and stopPropagation()

const div = document.querySelector('div')

div.addEventListener('click', event => {
    console.log(event);
}, true); // captures the event to run first this event

button.addEventListener('click', event => {
    console.log(event)
    event.stopPropagation(); //prevents button click to trigger div click
    event.stopImmediatePropagation(); //prevents trigger more events on the same element, in case button has several events
})

//event delegation

const listItems = document.querySelector('li');
const list = document.querySelector('ul');


listItem.addEventListener('click', event => { // we use one function to take advantage of propagation
   // event.target.classList.toogle('highlight');
    event.target.closest('li').classList.toogle('highlight');
});