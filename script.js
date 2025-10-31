
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

/* Question 3.4 change string to upper and lower case */
/* Change myName string to upper case: */
console.log("My name in upper case: ", myName.toUpperCase());
console.log("My name in lower case: ", myName.toLowerCase());

/* Question 3.5 use concat, trim, replace, and split, to create new strings */
/* Use the concat method to join the hello string and myName string: */
let joined = hello.concat(" ", myName);
console.log("Concatenated string: ", joined);

/* Trim the spaces from anotherString*/
let trimmed = anotherString.trim(0, 3);
console.log("Trimmed string: ", trimmed);
console.log("Untrimmed string: ", anotherString);

/* replace method to change "is a" to an empty space in myString */
let replaced = myString.replace("is a ","");
console.log("Replaced 'is a' with an empty space: ", replaced);

/* use the split method on myString using the spaces to break the string */
/* split() method is uded to divide a string into an array of substrings based on a specified separator. It does not modify the original string but instead returns a new array */
let splitArray = myString.split(" ");
console.log("Split myString (at the spaces) into an array: ", splitArray);
