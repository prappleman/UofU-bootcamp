// WRITE YOUR CODE HERE
var names = ["Andre", "Karl", "Rashida", "Olivia"];


//It's done when the total number of elements in the array is logged to the console.
console.log(names.length);


//It's done when the message "Welcome to the class STUDENT_NAME" is logged using each element in the array. 
console.log("Welcome to the class " + names[0])
console.log("Welcome to the class " + names[1])
console.log("Welcome to the class " + names[2])
console.log("Welcome to the class " + names[3])


//It's done when the first element in the array is replaced with the name of a new student.
names[0] = "kevin"


//It's done when, after an `if` statement confirms that the first element in the array has been replaced, the message "REPLACED_NAME is in class" is logged.
if(names[0] !== "andre"){
    console.log(names[0])
}