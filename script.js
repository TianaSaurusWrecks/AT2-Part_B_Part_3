
/*implement a range of algorithms to manipulate strings-->

 Question 3.1 Define the strings */
let myString = "This is a string";
let anotherString = "   Another string";
let hello = "Hello there!";
let myName = "Tiana";

console.log("Strings:");
console.log(myString);
console.log(anotherString); 
console.log(hello);
console.log(myName);

/* Question 3.2 */
/* Use the utility functions to find out the following information*/
/* a. Length of myString b. fist character of myString  c. 11th character of myString */
console.log("The length of myString is: ", myString.length);
console.log("The first character of myString is: ", myString.charAt(0));
console.log("The 11th character of myString is: ", myString.charAt(10));

/* Question 3.3 */
/* Use the functions slice and substring to create new strings */
let sliced = myString.slice(5, 9); /* takes from char index 5 up to but not inc 9 */
console.log("Sliced from myString: ", sliced);

let sub = anotherString.substring(6, 9); /* takes "the" from anotherString */
console.log("Substring from anotherString: ", sub);