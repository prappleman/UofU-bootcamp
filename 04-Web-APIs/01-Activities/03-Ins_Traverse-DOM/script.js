console.log("Document Body: ")
console.log(document.body);

console.log("Children of Document Body: ")
console.log(document.body.children);

console.log("First child of body: ")
console.log(document.body.children[0]);

console.log("First child of the ul: ")
console.log(document.body.children[1].children[0]);

// Accessing element by id
var firstChildUl = document.getElementById("first-child-ul");
console.log(firstChildUl)

// Setting style of element
firstChildUl.style.color = "blue";

var child2 = document.getElementById("child2");
if (firstChildUl.style.color = "red") {
    child2.style.color = "blue";
}
else {
    child2.style.color = "red";
}

