var body = document.body;
var h1El = document.createElement("h1");
var infoEl = document.createElement("div");
var imgEl = document.createElement("img");
var kittenEl = document.createElement("div");
var nameEl = document.createElement("div");
var favoriteEl = document.createElement("div");
// Create ordered list element
var listEl = document.createElement("ol");
// Create ordered list items
var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

h1El.textContent = "Welcome to my page";
kittenEl.textContent = "This is my kitten 🐱.";
nameEl.textContent = "His name is Jax.";
favoriteEl.textContent = "My favorite foods are:";

li1.textContent = "Pizza"
li2.textContent = "Sushi"
li3.textContent = "Pasta"
li4.textContent = "Steak"


body.appendChild(h1El);
body.appendChild(infoEl);
infoEl.appendChild(imgEl);
infoEl.appendChild(kittenEl);
infoEl.appendChild(nameEl);
body.appendChild(favoriteEl);
// Append ordered list 
favoriteEl.appendChild(listEl);
listEl.appendChild(li1)
listEl.appendChild(li2)
listEl.appendChild(li3)
listEl.appendChild(li4)


h1El.setAttribute("style", "margin:auto; width:50%; text-align:center;");
infoEl.setAttribute("style", "margin:auto; width:50%; text-align:center;");
imgEl.setAttribute("src", "http://placekitten.com/200/300");
nameEl.setAttribute("style", "font-size:25px; text-align:center;");
kittenEl.setAttribute("style", "font-size:25px; text-align:center;");
favoriteEl.setAttribute("style", "font-size:20px;");

// TODO: Add ordered list items containing four favorite foods
<<<<<<< HEAD

li1.textContent = "pizza";
li2.textContent = "apples";
li3.textContent = "cupcakes";
li4.textContent = "pasta";
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);
const backgroundcolors = ["#666666", "#777777", "#888888", "#999999"];
listEl.setAttribute("style", "background-color: #333333; padding: 20px; color: #ffffff;")
for (var i = 0; i <listEl.children.length; i++) {
    listEl.children[i].setAttribute("style", "padding: 5px; margin-left: 35px; background-color: "+ backroundcolors[i] + ";")
}
=======
listEl.setAttribute("style", "background-color: gray; margin: 15px; padding: 30px;")
>>>>>>> 3fb946eabbd4ec18da797a7a914910eee5a87b60
