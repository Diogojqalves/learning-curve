const listElement = document.querySelector('.posts'); // add data to this html element
const postTemplate = document.getElementById('single-post');

const xhr = new XMLHttpRequest(); //creat XML object that allows to send Http request

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts'); // first argument = HTTP method; second argument = source/url

xhr.responseType = 'json'; //return data in JSON format == line 13


// Load event required so you can xhr.send() the request
xhr.onload = function() {
  // const listOfPosts = JSON.parse(xhr.response);
  const listOfPosts = xhr.response; // response is the output we want to fetch
  for (const post of listOfPosts) { // loop each post
    const postEl = document.importNode(postTemplate.content, true); // deepclone postTemplate html element
    postEl.querySelector('h2').textContent = post.title.toUpperCase();
    postEl.querySelector('p').textContent = post.body;
    listElement.append(postEl); // add post
  }
};

xhr.send(); // send the request



