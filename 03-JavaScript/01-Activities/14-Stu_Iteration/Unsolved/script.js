//WRITE YOUR CODE BELOW

//It's done when the names of five classmates are stored in a single variable named students.
var names = ["kevin", "john", "jane", "kelly", "chris"];


//It's done when the total number of elements in the students array is logged to the console.
console.log(names.length);


//It's done when, using a for loop, the greeting "Great to see you, CLASSMATE_NAME!" logs to the console for each classmate's name in the students array.
for (var i = 0; i < names.length; i++) { 
    console.log("Great to see you, " + names[i] + "!");
}