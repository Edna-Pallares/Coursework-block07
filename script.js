// build a vault that requires three mathematical calculations
// generate the three codes in a combination

// create a string for the user saying: You have received this message because you have been chosen to open an important vault. Here is the secret combination:
let message = "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";

// create three variables each one being the result of a unique arithmetic calculation 

// first variable calculation must equal 10
let v1 = 5 + 5;
// second variable calculation must equal 40
let v2 = 20 * 2;
// third variable calculation must equal 39
let v3 = 40 - 1;

// create a dialog box displaying the vault codes and text
alert(message + v1 + "-" + v2 + "-" + v3)
