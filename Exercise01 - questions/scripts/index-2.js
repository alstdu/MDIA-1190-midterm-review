// always use camel case stylization

// if/else

/** Question 1
 * Initialise the variable x to the value 2. Use a if statement to check 
 * if x is strictly equal to 3. Console log the the message to say 
 * `It is a match` if it is true.
 */
var x = 2;
if (x === 3) {
    console.log("It is a match");
}


/** Question 2
 * Initialise the variable guess to the value 4. 
 * Use a if statement to check if guess is equal to 4. 
 * If it is equal to 4 then have the message console log out 
 * `You guessed __4__ and you are right`. 
 * Else have the console log say `You guessed wrong`.
 */


var guess = 4;
if (guess === 4) {
    console.log("you guessed __4__ and you are right");
} else {
    console.log("you guessed wrong");
}


/** Question 3
 * Initialise the variable guess to the value of 5. 
 * Use a if statement to see if the guess is equal to 4 OR guess is equal to 5. 
 * If it is then console log out the message 
 * `You guessed ____ and you are right.` 
 * Else, console log out `You guessed wrong.`
 */

var guess = 5;
if (guess === 4, guess === 5) {
    console.log("You guessed ___ and you are right.");
} else {
    console.log("You guessed wrong.");
}




// Funcions

/** Question 4
 * Initialise the variable `shopping` to the function called `my shopping list`. 
 * Have parameter values be 5 and 6. 
 * Multiply quantity time price in the function. Return the answer. 
 * Then console log the value below the function. 
 * Add the answer as a comment. 
 * Write a multiline comment above the function to describe it.
 */

var shopping = myShoppingList(5,6);
/*multiplying the quantity and price together to get the product which is the total
*cost of the item before tax
*/
function myShoppingList(quantity, price) {
    let totalCost = quantity * price;
    return totalCost;
}

let shopping = myShoppingList(5,6);

console.log("shopping"); // 30




/** Question 5
 * Setup a function called `sentence function` that takes in the `name` and `age`. 
 * This will return the sentence `My name is _name_ and I am _age_ years old.`
 * 
 * Write a variable called `person one` and make it equal to the `sentence function` 
 * that has the values `Ken Wilson` and `20`.
 * 
 * Then console log out person one and write the answer as a single line comment
 */

function sentenceFunction( name, age ) { 
    return `My name is ${name} and I am ${age} years old.`;
}

var personOne = sentenceFunction("Ken Wilson", 20);
console.log(personOne); // My name is Ken Wilson and I am 20 years old.

/** Question 6
 * Setup a function called `box` that takes the parameters of 
 * width, height, depth. 
 * This will then return the multiplied values passed in the parameters.
 * 
 * Initialise the variable `dimensions` to the return value of function called box
 * when called with the arguments `6,3,2`
 * Then console log out the deminsions and write the calculated number.
 */
function box(width, height, depth) {
    return width * height * depth; 
}

var dimensions = box(6,3,2);
console.log(dimensions); // 36



