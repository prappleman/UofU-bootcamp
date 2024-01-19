// Access element using id
var articlesDiv = document.getElementById('articles');
var headerDiv = document.getElementById('header');

console.log(articlesDiv)
console.log(headerDiv)

// Change style by accessing style object's properties
articlesDiv.style.fontSize = '50px';
headerDiv.children[0].style.color = 'white';
