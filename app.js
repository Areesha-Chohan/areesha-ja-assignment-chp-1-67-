
// -----------------------------------------------------  Chapter_01 (Areesha's code)(Alerts) -----------------------------------------------------

//question 1. Write a script to greet your website visitor using JS alert box.(chp1) 
alert("Welcome To My Website. You will find everything here that you need");

//2. Write a script to display following message on your web page: 
alert("Error! Please Enter a valid password/password incorrect");

//3. Write a script to display following message on your web page: (Hint : Use line break) 
alert("Welcome coders to JS dreamcode.. \nHappy Coding!");

//4. Write a script to display following messages in sequence: 
alert("Welcome to JS Land..");
alert("Happy Coding!");

//5. Generate the following message through browser’s developer console: 
console.log("Hello.. I can run javascript code through my web browser console");

// -----------------------------------------------------  Chapter_02 (Areesha's code) (VARIABLES FOR STRINGS ) -----------------------------------------------------

//question 1. Declare a variable called username. 
var username;
//2. Declare a variable called myName & assign to it a string that represents your Full Name.
var Myname = "Areesha Ghani Chohan";
// 3. Write script to 
// a) Declare a JS variable, titled message. 
// b) Assign “Hello World” to variable message 
// c) Display the message in alert box. 
var message;
message = "Hello World";
alert(message);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
var name = "Areesha Ghani Chohan";
var age = "20 years old";
var course = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);


//5. Write a script to display the following alert using one JS variable: 
var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP"
alert(pizza);


//6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).
// Show the blow mentioned message in an alert box.(Hint: use string concatenation) 
var email = "areeshachohan@yahoo.com";
alert("My email address is" + " " + email);


//7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
//Display the following message in an alert box: 
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn and explore from the Book" + " " + book);


//8. Write a script to display this in browser through JS 
document.write("Yeah! I can write HTML content through JavaScript");


//9. Store following string in a variable and show in alert and browser through JS 
//“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 
var symbol = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(symbol);


// -----------------------------------------------------  Chapter_03 (Areesha's code)(VARIABLES FOR NUMBERS ) -----------------------------------------------------

//1. Declare a variable called age & assign to it your age. Show your age in an alert box. 
var age = 23;
alert("I am" + " " + age + " " + "years old");


//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
//Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
var n = 12;
alert("You have visited this site " + n + " times");


//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
var birthYear = 1998;
document.write("My birth year is " + birthYear);
document.write("<br>")
document.write("\n" + "Data type of my declared variable is" + " " + typeof birthYear);


document.write("<br>" + "<br>");


//4. A visitor visits an online clothing store www.xyzClothing.com . 
// Write a script to store in variables the following information: 
// a. Visitor’s name 
// b. Product title 
// c. Quantity 
// i.e. how many products a visitor wants to order 
// Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
var Visitor_name = "John Doe";
var Product_title = "T-shirt(s)";
var Quantity = 5;
document.write(Visitor_name + " " + "ordered" + " " + Quantity + " " + Product_title + " " + "on XYZ Clothing store");

// -------------------------------------------  Chapter_04 (Areesha's code) (VARIABLE NAMES: LEGAL & ILLEGAL ) -----------------------------------------------------

//1. Declare 3 variables in one statement. 
var name, email, qualification;

//2. Declare 5 legal & 5 illegal variable names. 

//5 legal variable names.
var chat;
var chatApp;
var client1;
var father_name;
var $name;


//5 illegal variable names
// var father name;
// var @year;
// var do;
// var if;
// var 1stcustomer;


// 3. Display this in your browser 

// a)  A heading stating “Rules for naming JS variables” 
document.write("<h1>Rules for naming JS variables</h1>");

// b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
document.write("Variable names can only contain numbers, $ and _. For example: $my_1stVariable." + "<br/>");

// c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
document.write("Variable must begin with a letter, $ or _. For example: $name, _name or name" + "<br/>");

// d) Variable names are case _________ 
document.write(" Variable names are case sensitive" + "<br/>");

// e) Variable names should not be JS _________   
document.write("Variable names should not be JS keywords" + "<br/>");

// ------------------------------------------------  Chapter_05 (Areesha's code)(MATH EXPRESSIONS ) -----------------------------------------------------

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
var a = 3;
var b = 5;
// addition
var c = a + b;
document.write("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);


//2. Repeat task1 for subtraction, multiplication, division & modulus. 

// subtraction
var c = a - b;
document.write("<br>" + "Sub of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// multiplication
var c = a * b;
document.write("<br>" + "Mul of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// division
var c = a / b;
document.write("<br>" + "Div of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// modulus
var c = a % b;
document.write("<br>" + "Mod of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);
document.write("<br>" + "<br>");

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable.      
var x;

//b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
document.write("Value after variable declaration is:" + " " + x);

// c. Initialize the variable with some number.
x = 5;
document.write("<br>");

//d. Show the value of variable in your browser like “Initial value: 5”.
document.write("Initial value: " + " " + x);

//e. Increment the variable.
x = ++x;
document.write("<br>");

//f. Show the value of variable in your browser like “Value after increment is: 6”.
document.write("Value after increment is:  " + " " + x);

//g. Add 7 to the variable.
x = x + 7;
document.write("<br>");

// h. Show the value of variable in your browser like “Value after addition is: 13”.  
document.write("Value after addition is:   " + " " + x);

// i. Decrement the variable.
x = --x;
document.write("<br>");

//j. Show the value of variable in your browser like “Value after decrement is: 12”.
document.write("Value after decrement is: " + " " + x);

// k. Show the remainder after dividing the variable’s value by 3.
x = x % 3;
document.write("<br>");

// l. Output : “The remainder is : 0”.
document.write("The remainder is :    " + " " + x);
document.write("<br>" + "<br>");


// 4. Cost of one movie ticket is 600 PKR.
// Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 
var ticket = 600;
var quantity = 5;
var cost = ticket * quantity;

document.write("Total cost to buy" + " " + quantity + " " + "tickets to movie is" + " " + cost + "PKR")
document.write("<br>" + "<br>");


//5. Write a script to display multiplication table of any number in your browser.
var no = 4;
var x = 0;
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x));
document.write("<br>" + "<br>");

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// a.  Store a Celsius temperature into a variable. 
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”. 

//celcius to farenheight
var C = 25;
var F = (C * 9 / 5) + 32;
document.write(C + "C is " + F + "F" + "<br/>");

//fahrenheight to celcius
var F = 70;
var C = (F - 32) * 5 / 9;
document.write(F + "F is " + C + "C" + "<br/>");
document.write("<br>" + "<br>");


// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables 

// a. Price of item 1 
// b. Price of item 2 
var item1_Price = 650;
var item2_Price = 100;

// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2 
var item_1_quantity = 3;
var item_2_quantity = 7;

var item_1_cost = item1_Price * item_1_quantity;
var item_2_cost = item2_Price * item_2_quantity;

//  e. Shipping charges 
var Shipping = 100;

var total = item_1_cost + item_2_cost + Shipping;

// Compute the total cost & show the receipt in your browser. 
document.write("Price of Item 1 is " + item1_Price + "<br/>");
document.write("Quantity of Item 1 is " + item_1_quantity + "<br/>");
document.write("Price of Item 2 is " + item2_Price + "<br/>");
document.write("Quantity of Item 2 is " + item_2_cost + "<br/>");
document.write("Shipping Charges " + Shipping + "<br/>");
document.write("Total cost of your order is " + total);
document.write("<br>" + "<br>");


//8. Store total marks & marks obtained by a student in 2 variables. 
// Compute the percentage & show the result in your browser 
var totalMarks = 980;
var obttainMarks = 804;
var Percentage = (totalMarks / obttainMarks) * 100;

document.write("<h3>" + "Marks Sheet" + "</h3>");
document.write("Total Marks: " + totalMarks + "<br/>");
document.write("Marks Obtained: " + obttainMarks + "<br/>");
document.write("Percentage: " + Percentage);
document.write("<br>" + "<br>");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression. 
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
var dollarRate = 104.80;
var riyalRate = 28;
var pkr = (10 * dollarRate) + (25 * riyalRate);
document.write("<h3>" + "Currency Conversion in PKR" + "</h3>");
document.write("Total Currency in PKR: " + pkr);
document.write("<br>" + "<br>");


//10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// a. Add 5 
// b. Multiply by 10 
// c. Divide the result by 2 
// Perform all calculations in a single expression 
var num = 7;
num = (((num + 5) * 10) / 2);
document.write("<h3>" + "Arithmetic Operation in single statement" + "</h3>");
document.write("Output: " + num);
document.write("<br>" + "<br>");


//11. The Age Calculator: Forgot how old someone is? Calculate it! 
// a. Store the current year in a variable. 
// b. Store their birth year in a variable. 
// c. Calculate their 2 possible ages based on the stored values. 
var currentYear = 2020;
var birthYear = 1998;
var Age = currentYear - birthYear;

document.write("<h3>" + "Age Calculator" + "</h3>");
document.write("Current Year: " + currentYear + "<br/>");
document.write("Birth Year: " + birthYear + "<br/>");
document.write("Your age is: " + Age);


document.write("<br>" + "<br>");


// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable. 
// b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
var radius = 7;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;

document.write("<h3>" + "The Geometrizer" + "</h3>");
document.write("Radius of a Circle: " + radius + "<br/>");
document.write("The circumference is: " + circumference + "<br/>");
document.write("The area is: " + area);


document.write("<br>" + "<br>");


// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// a. Store your favorite snack into a variable 
// b. Store your current age into a variable. 
// c. Store a maximum age into a variable. 
// d. Store an estimated amount per day (as a number). 
// e. Calculate how many would you eat total for the rest of your life. 
var snack = "Chocalate Chip";
var age = 22;
var maxAge = 60;
var amountPerDay = 3;
var eat = (maxAge - age) * (365 * amountPerDay);

document.write("<h3>" + "The Lifetime Supply Calculator" + "</h3>");

// Output. 
document.write("Favorite Snack: " + snack + "<br/>");
document.write("Current Age: " + age + "<br/>");
document.write("Estimated Maximum Age: " + maxAge + "<br/>");
document.write("Amount of snacks per day: " + amountPerDay + "<br/>");
document.write("You will need " + eat + " to last you until the ripe old age of " + maxAge);

// ---------------------------------  Chapter_06 to 09( Areesha's code) (MATH EXPRESSIONS) -----------------------------------

//1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var a = +prompt("Input a number: ");

document.write("Result" + "<br/>");
document.write("The value of a is: " + a + "<br/>");
document.write("..............................................." + "<br/>");
document.write("<br/>");

// Pre-Increment
document.write("The value of ++a is: " + ++a + "<br/>");
document.write("Now the value of a is: " + a + "<br/>");
document.write("<br/>");

// Post- Increment
document.write("The value of a++ is: " + a++ + "<br/>");
document.write("Now the value of a is: " + a + "<br/>")
document.write("<br/>");

// Pre-Decrement
document.write("The value of --a is: " + --a + "<br/>");
document.write("Now the value of a is: " + a + "<br/>");
document.write("<br/>");

// Post-Decrement
document.write("The value of a-- is: " + a-- + "<br/>");
document.write("Now the value of a is: " + a + "<br/>");
document.write("<br/>" + "<br/>");


// 2. What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:

var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;

document.write("The value of a is " + a + "<br/>");
document.write("The value of b is " + b + "<br/>");
document.write("The result is " + result + "<br/>" + "<br/>");

document.write("<b>" + "Explanation of Solution" + "</b>" + "<br/>");
document.write("a = 2, b = 1" + "<br/>");
document.write("--a  -  --b  +  ++b  +  b--" + "<br/>");
document.write("--a" + "<br/>");
document.write("  1" + "<br/>");
document.write("--a  -  --b" + "<br/>");
document.write("  1  -   0 " + "<br/>");
document.write("--a  -  --b  +  ++b" + "<br/>");
document.write("  1  -   0   +    1 " + "<br/>");
document.write("--a  -  --b  +  ++b   +  b--" + "<br/>");
document.write("  1  -   0   +    1   +   1" + "<br/>");
document.write("  1 +    1   +    1 " + "<br/>");
document.write("3" + "<br/>");


document.write("<br/>" + "<br/>");


//3. Write a program that takes input a name from user & greet the user. 
var name = prompt("Enter your name");
document.write("Good Morning!" + " " + name + " " + "Have a nice day.");

document.write("<br/>" + "<br/>");


// 4. Write a program to take input a number from user & display it’s multiplication table on your browser.
// If user does not enter a new number, 
// multiplication table of 5 should be displayed by default. 
var no = 5, x = 0;
var no = +prompt("Enter table no");
document.write("Table" + "</b>" + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
document.write(no + " x " + ++x + " = " + (no * x));
document.write("<br/>" + "<br/>");

// 5. Marksheet
document.write("<h3>" + "Marksheet" + "</h3>");

// a) Take three subjects name from user and store them in 3 different variables. 
subject1 = prompt("Enter Name of Subject 1: ");
subject2 = prompt("Enter Name of Subject 2: ");
subject3 = prompt("Enter Name of Subject 3: ");

// b) Total marks for each subject is 200, store it in another variable.
var totalMarks = 600;

// c) Take obtained marks for first subject from user and stored it in different variable.
subject1Marks = +prompt("Enter Marks of " + subject1);

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
subject2Marks = +prompt("Enter Marks of " + subject2);
subject3Marks = +prompt("Enter Marks of " + subject3);

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
var percentage1 = (subject1Marks / 200) * 100;
var percentage2 = (subject2Marks / 200) * 100;
var percentage3 = (subject3Marks / 200) * 100;

var obtainedMarks = (subject1Marks + subject2Marks + subject3Marks);
var percentage = (obtainedMarks / totalMarks) * 100;
percentage = percentage.toFixed(3);
document.write("<Table>");
document.write("<tr>");
document.write("<th>" + "Subject" + "</th>");
document.write("<th>" + "Total Marks" + "</th>");
document.write("<th>" + "Obtained Marks" + "</th>");
document.write("<th>" + "Percentage" + "</th>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject1 + "</td>");
document.write("<td>" + 200 + "</td>");
document.write("<td>" + subject1Marks + "</td>");
document.write("<td>" + percentage1 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject2 + "</td>");
document.write("<td>" + 200 + "</td>");
document.write("<td>" + subject2Marks + "</td>");
document.write("<td>" + percentage2 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<td>" + subject3 + "</td>");
document.write("<td>" + 200 + "</td>");
document.write("<td>" + subject3Marks + "</td>");
document.write("<td>" + percentage3 + "%" + "</td>");
document.write("</tr>");

document.write("<tr>");
document.write("<th>" + "</th>");
document.write("<th>" + totalMarks + "</th>");
document.write("<th>" + obtainedMarks + "</th>");
document.write("<th>" + percentage + "%" + "</th>");
document.write("</tr>");
document.write("</Table>");


// ---------------------------  Chapter_09 till 11( Areesha's code) (USER INPUT & CONDITIONAL STATEMENT ) -----------------------------------

//1. Write a program to take “city” name as input from user. 
//If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”
var city = prompt("Enter city name");

if (city == "karachi") {
    document.write("Welcome to city of lights");
}
document.write("<br>" + "<br>");

// 2. Write a program to take “gender” as input from user. 
// If the user is male, give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am.
var gender = prompt("What is your gender");

if (gender == "male") {
    document.write("Good Morning Sir.");
}
else if (gender == "female") {
    document.write("Good Morning Ma’am.");
}
else {
    document.write("Good Morning.");
}
document.write("<br>" + "<br>");


//3. Write a program to take input color of road traffic signal from the user & show the message
var signalColor = prompt("Enter color of road traffic signal");

if (signalColor === "Red") {
    alert("Must Stop");
}
else if (signalColor === "Yellow") {
    alert("Ready to Move");
}
else if (signalColor === "Green") {
    alert("Move Now");
}
else {
    alert("You enter wrong color");
}
document.write("<br>" + "<br>");


// 4. Write a program to take input remaining fuel in car (in litres) from user. 
// If the current fuel is less than 0.04litres, 
// show the message “Please refill the fuel in your car” 
var fuelAmount = +prompt("Enter amount of remaining fuel in car (in litres)");
if (fuelAmount < 0.04) {
    document.write("Please refill the fuel in your car");
}


document.write("<br>" + "<br>");



// Question 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

// Part A
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// Part B
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// Part C
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}

if (c === 13) {
    alert("condition 2 is true");
}

if (++c < 14) {
    alert("condition 3 is true");
}

if (c === 14) {
    alert("condition 4 is true");
}

// Part D
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// Part E
if (true) {
    alert("True");
}

if (false) {
    alert("False");
}

// Part F
if ("car" < "cat") {
    alert("car is smaller than cat");
}
document.write("<br>" + "<br>");


// 6. Write a program to take input the marks obtained in three subjects & total marks. 
// Compute & show the resulting percentage on your page. 
// Take percentage & compute grade

var obtainedMarks = +prompt("Enter Obtained Marks in three subjects: ");
var totalMarks = +prompt("Enter total Marks: ");
var percentage = (obtainedMarks / totalMarks) * 100;

document.write("<h3>" + "Mark Sheet" + "<h3>");
document.write("Total Marks: " + totalMarks + "</br>");
document.write("Marks Obtained: " + obtainedMarks + "</br>");
document.write("Percentage: " + percentage + "</br>");

if (percentage >= 80 && percentage < 100) {
    document.write("Grade: A-one" + "<br>");
    document.write("Remarks: Excellent" + "<br>");
}

else if (percentage >= 70 && percentage < 80) {
    document.write("Grade: A" + "<br>");
    document.write("Remarks: Good" + "<br>");
}

else if (percentage >= 60 && percentage < 70) {
    document.write("Grade: B" + "<br>");
    document.write("Remarks: You need to improve" + "<br>");
}

else if (percentage < 60) {
    document.write("Grade: Fail" + "<br>");
    document.write("Remarks: Sorry" + "<br>");
}

else {
    document.write("Invalid Input" + "<br>");
}
document.write("<br>" + "<br>");


// 7. Guess game: Store a secret number (ranging from 1 to 10) in a variable. 
// Prompt user to guess the secret number. a. If user guesses the same number, 
// show “Bingo! Correct answer”. 
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.
var secretNumber = 5;
var guessNumber = +("Guess the secret number", "between 1 to 10 ");

if (guessNumber == secretNumber) {
    document.write("Bingo! Correct answer");
}
else if (guessNumber == ++secretNumber) {
    document.write("Close enough to the correct answer");
}
else {
    document.write("Your guess is incorrect");
}


document.write("<br>" + "<br>");


// 8. Write a program to check whether the given number is divisible by 3. 
// Show the message to the user if the number is divisible by 3. 
var num = +prompt("Enter number to check");
if ((num % 3) === 0) {
    document.write("the number is divisible by 3");
}
else {
    document.write("the number is not divisible by 3");
}
document.write("<br>" + "<br>");


// 9. Write a program that checks whether the given input is an even number or an odd number. 
var num = +prompt("Enter number to check even or odd");
if ((num % 2) === 0) {
    document.write("the number is even");
}
else {
    document.write("the number is add");
}
document.write("<br>" + "<br>");


// 10. Write a program that takes temperature as input and shows a message based on following criteria 
// a. T > 40 then “It is too hot outside.” 
// b. T > 30 then “The Weather today is Normal.” 
// c. T > 20 then “Today’s Weather is cool.” 
// d. T > 10 then “OMG! Today’s weather is so Cool.” 

var T = +prompt("Enter  the temperature");
if (T > 40) {
    document.write("It is too hot outside.");
}
if (T > 30) {
    document.write("The Weather today is Normal.");
}
if (T > 20) {
    document.write("Today’s Weather is cool.");
}
if (T > 10) {
    document.write("OMG! Today’s weather is so Cool.");
}
document.write("<br>" + "<br>");


// 11. Write a program to create a calculator for +,-,*, / & % using if statements.
// Take the following input: 
// a. First number 
// b. Second number 
// c. Operation (+, -, *, /, %) 
//Compute & show the calculated result to user. 
var a = +prompt("Enter First Number");
var b = +prompt("Enter Second Number");
var operation = ("Enter opertion you want to perform", "+, -, *, /, %");
var result;
if (operation == "+") {
    result = a + b;
    document.write("The sum of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result)
}
else if (operation == "-") {
    result = a - b;
    document.write("The subtraction of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result)
}
else if (operation == "*") {
    result = a * b;
    document.write("The multiplication of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result)
}
else if (operation == "/") {
    result = a / b;
    document.write("The division of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result)
}
else if (operation == "%") {
    result = a % b;
    document.write("The reminder of" + " " + a + " " + "and" + " " + b + " " + "is:" + " " + result)
}
else {
    document.write("You enter wrong operation")
}

document.write("<br>" + "<br>");












// ---------------------------------  Chapter_12 till 13 (Areesha's code)(IF and ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS ) -----------------------------------

// 1. Write a program that takes a character (number or string) in a variable & 
// checks whether the given input is a number, 
// uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 
var char = prompt("Enter the character to check whether the given input is a number, uppercase letter or lower case letter.");
char.charCodeAt(0);

if (char >= 48 && char <= 57) {
    document.write("The given charecter is a number");
}
else if (char >= 65 && char <= 97) {
    document.write("The given charecter is a uppercaseleetr");
}
else if (char >= 97 && char <= 122) {
    document.write("The given charecter is a lowercaseletter");
}
document.write("<br>" + "<br>");


// 2. Write a JavaScript program that accept two integers and display the larger. 
// Also show if the two integers are equal. 
var num1 = +prompt("Enter the number1");
var num2 = +prompt("Enter the number2");

if (num1 > num2) {
    document.write("The largest number is" + " " + num1);
}
else if (num2 > num1) {
    document.write("The largest number is" + " " + num2);
}
else if (num1 == num2) {
    document.write("Both numbers are equal");
}
document.write("<br>" + "<br>");



//3. Write a program that takes input a number from user & state whether the number is positive, negative or zero. 
var num = +prompt("Enter the number to check it is positive or negative");

if (num > 0) {
    document.write("The given number is positive");
}
else if (num < 0) {
    document.write("The given number is negative");
}
else if (num1 === 0) {
    document.write("The given number is Zero");
}
document.write("<br>" + "<br>");


// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise 
var alphabet = +prompt("Enter the alphabet to check it is vowel or not");

if (alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "o") {
    document.write("The given alphabet is vowel");
}
else {
    document.write("The given alphabet is not a vowel");
}
document.write("<br>" + "<br>");


// 5. Write a program that 
// a. Store correct password in a JS variable.
// b.  Asks user to enter his/her password 
// c.  Validate the two passwords: 
//     i. Check if user has entered password. If not, then give message “ Please enter your password” 
//     ii. Check if both passwords are same. 
// If they are same, show message “Correct! The password you entered matches the original password”. 
//Show “Incorrect password” otherwise. 

var pw = "123@45"
var password = prompt("Enter your password");

if (password == "") {
    document.write(" Please enter your password");
}
else if (password == pw) {
    document.write("Correct! The password you entered matches the original password");
}
else {
    document.write("Incorrect password");
}
document.write("<br>" + "<br>");


// 6. This if/else statement does not work. 
// Try to fix it:
// var greeting;
// var hour = 10;
// if (hour < 18) {
//     greeting = "Good day"; else greeting = "Good evening";
// }

var greeting;
var hour = 10;
if (hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening"
}


document.write("<br>" + "<br>");


// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm.
// Implement the following case using if, else & else if statements 
var time = +prompt("Please enter 24 hours clock format time \nlike: 1900 = 7pm.");

if (time >= 0000 && time < 1200) {
    alert("Good Morning");
}

else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon");
}

else if (time >= 1700 && time < 2100) {
    alert("Good Evening");
}

else if (time >= 2100 && time <= 2359) {
    alert("Good Night");
}

else {
    alert("Invalid Input");
}

// ---------------------------------  Chapter_14 till16(Areesha's code) (Arrays) -----------------------------------

// 1. Declare an empty array using JS literal notation to store student names in future. 
var cars = [];

// // 2. Declare an empty array using JS object notation to store student names in future. 
var cars = newArray();


// 3. Declare and initialize a strings array.
var fruits = ["yellow", "green", "orrange", "blue", "pink"]
document.write(colors);
document.write("<br>" + "<br>");


// 4.  Declare and initialize a numbers array.
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write(num);
document.write("<br>" + "<br>");


// 5.  Declare and initialize a boolean array. 
var bol = [true, false, true, false];
document.write(bol);
document.write("<br>" + "<br>");


// 6. Declare and initialize a mixed array. 
var mix = ["khansa", 1, true];
document.write(mix);
document.write("<br>" + "<br>");


// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). 
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "Phd"];
var no = 1;
var i = 0;

document.write("<h3>" + "Qualifications" + "<h3>");

document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write(no++ + ")" + " " + qualification[i++] + "<br>");
document.write("<br>" + "<br>");


//8. Write a program to store 3 student names in an array.
//Take another array to store score of these three students. 
//Assume that total marks are 500 for each student, display the scores & percentages of students:

var names = ["Areesha", "Daniyal", "Seema"];
var marks = [400, 450, 300];
var i = 0;
var n = 0;
var x = 0;
var totalMarks = 500;

document.write("Score of" + " " + names[i++] + " " + "is" + " " + marks[n++] + "." + " " + "Percentage" + " " + ":" + " " + (marks[x++] / totalMarks) * 100 + "%" + "<br>")
document.write("Score of" + " " + names[i++] + " " + "is" + " " + marks[n++] + "." + " " + "Percentage" + " " + ":" + " " + (marks[x++] / totalMarks) * 100 + "%" + "<br>")
document.write("Score of" + " " + names[i++] + " " + "is" + " " + marks[n++] + "." + " " + "Percentage" + " " + ":" + " " + (marks[x++] / totalMarks) * 100 + "%" + "<br>")
document.write("<br>" + "<br>");


// 9. Initialize an array with color names. 
// Display the array elements in your browser. 
var colors = ["blue", "black", "orange", "red"];
document.write(colors + "<br>");


// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. 
// Display the updated array in your browser. 
var addColor = prompt("what color you wants to add to the beginning");
colors.unshift(addColor);
document.write("Add color to the beginning : " + " " + colors + "<br>");


// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// Display the updated array in your browser.
var addColor = prompt("what color you wants to add to the end");
colors.push(addColor);
document.write("Add color to the end : " + " " + colors + "<br>");


// c. Add two more color to the beginning of the array. 
// Display the updated array in your browser.
var addColor = prompt("again what color you wants to add to the beginning");
colors.unshift(addColor);

var addColor = prompt("Add one more color that you wants to add to the beginning");
colors.unshift(addColor);
document.write("Add two more colors to the start : " + " " + colors + "<br>");


// d. Delete the first color in the array. 
// Display the updated array in your browser.
colors.shift();
document.write("delete color from start : " + " " + colors + "<br>");


// e. Delete the last color in the array. 
// Display the updated array in your browser. 
colors.pop();
document.write("delete color from start end : " + " " + colors + "<br>");


// f. Ask the user at which index he/she wants to add a color & color name. 
// Then add the color to desired position/index. 
// Display the updated array in your browser.
var index = +prompt("Write index number where you want to add color")
var addColor = prompt("what color you want to add");
colors.splice(index, 0, addColor)
document.write("updated array : " + " " + colors + "<br>");


// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.
var index = +prompt("Write index number from where you want to delete color")
var index2 = +prompt("how many colors you want to delete")
colors.splice(index, index2)
document.write("updated array : " + " " + colors + "<br>");
document.write("<br>" + "<br>");


//10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method. 
var arr = [59, 25, 66, 45, 75, 23];
document.write("students scores : " + "<br>" + arr + "<br>" + "<br>");

var sorted = arr.sort()
document.write("sorted scores : " + "<br>" + sorted);


document.write("<br>" + "<br>");


//11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 
var cities = ["karachi", "lahore", "murre", "islamabad", "hyderabad", "quetta"];
document.write("cities are" + "<br>" + cities + "<br>" + "<br>");

var selectedCities = cities.slice(1, 4);
document.write("selected cities are" + "<br>" + selectedCities);
document.write("<br>" + "<br>");


// 12.  Write a program to create a single string from the below mentioned array: 
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; 
// (Use array’s join method) 
var arr = ["This", "is", "my", "cat"];
document.write("Array" + "<br>" + arr + "<br>" + "<br>");
var arr1 = arr.join(" ")
document.write("String" + "<br>" + arr1);
document.write("<br>" + "<br>");


// 13. Create a new array. 
// Store values one by one in such a way that you can access the values in the order in which they were stored. 
// (FIFO-First In First Out) 
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.shift();
document.write("Out:" + "<br/>" + out);
document.write("<br>" + "<br>");


// 14. Create a new array. 
// Store values one by one in such a way that you can access the values in reverse order. 
// (Last InFirst Out) 
var devices = ["Keyboard", "Mouse", "Printer", "Monitor"];
var out;
document.write("Devices:" + "<br/>" + devices + "<br/>" + "<br/>");

out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out + "<br/>");
out = devices.pop();
document.write("Out:" + "<br/>" + out);
document.write("<br>" + "<br>");


// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. 
// Display the following dropdown/select menu in your browser using document.write() method: 
var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
var i = 0;
document.write("<select>");
document.write("<option>" + phone[i++] + "</option>");
document.write("<option>" + phone[i++] + "</option>");
document.write("<option>" + phone[i++] + "</option>");
document.write("<option>" + phone[i++] + "</option>");
document.write("<option>" + phone[i++] + "</option>");
document.write("</select>");
document.write("<br>" + "<br>");


// - Chapter_17 till 20 (Areesha's code) (ARRAYS AND LOOP ) -----------------------------------

// 1. Declare and initialize an empty multidimensional array.(Array of arrays)
var arr = [];


// 2. Declare and initialize a multidimensional array representing the following matrix:
var arr = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];


//3. Write a program to print numeric counting from 1 to 10. 
for (x = 1; x <= 10; x++) {
    document.write(x + "<br>");
}
document.write("<br>" + "<br>");


// 4. Write a program to print multiplication table of any number using for loop. 
// Table number & length should be taken as an input from user.  
var table = +prompt("Enter Table Number");
var lenght = +prompt("Enter lenght of table");
document.write("<h3>" + " Table of" + " " + table + "</h3>")
document.write("<h3>" + " lenght" + " " + lenght + "</h3>")
for (i = 1; i <= lenght; i++) {
    document.write(table + " " + "x" + " " + i + " " + "=" + (i * table) + "<br>");
}
document.write("<br>" + "<br>");


//5. Write a program to print items of the following array using for loop: 
//fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
var fruits1 = fruits.join("<br>");
document.write("<br>" + "<br>");
document.write(fruits1);
for (i = 0; i <= fruits.length; i++) {
    document.write("Element at index" + " " + i + " " + "is" + " " + fruits[i] + "<br>");
}
document.write("<br>" + "<br>");


// 6. Generate the following series in your browser. See example output. 
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("<h3>" + " Counting" + "</h3>");

for (x = 1; x <= 15; x++) {
    document.write(x + "," + " ");
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<h3>" + "Reverse counting" + "</h3>");
for (x = 10; x >= 1; x--) {
    document.write(x + "," + " ");
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<h3>" + "Even" + "</h3>");

for (x = 0; x <= 20; x = x + 2) {
    document.write(x + "," + " ");
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
document.write("<h3>" + "Odd" + "</h3>");

for (x = 1; x <= 20; x = x + 2) {
    document.write(x + "," + " ");
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 
document.write("<h3>" + " Series" + "</h3>");
for (x = 2; x <= 20; x = x + 2) {
    document.write(x + "k" + "," + " ");
}
document.write("<br>" + "<br>");

// 7. You have an array 
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. 
// After searching, prompt the user whether the given item is found in the list or not. 
var bakkeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to bakery! What do you want to order");
var flag = 0;
for (i = 0; i <= bakkeryItems.length; i++) {
    if (bakkeryItems[i] == input) {
        flag = 1;
        document.write(input + " " + "is available at index" + " " + i + " " + "in our bakery");
    }
}
if (flag == 0) {
    document.write("We are sorry" + " " + input + " " + "is not available in our bakery")
}
document.write("<br>" + "<br>");

// 8. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]. 
var a = [24, 53, 78, 91, 12];
var largeNumber = a[0];
for (i = 0; i < a.length; i++) {
    if (a[i] > largeNumber) {
        largeNumber = a[i];
    }
}
document.write("Array items: " + " " + a + "<br>");
document.write("the largest no is : " + " " + largeNumber);
document.write("<br>" + "<br>");

//9. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12] 
var a = [24, 53, 78, 91, 12];
var largeNumber = a[0];
for (i = 0; i < a.length; i++) {
    if (a[i] < largeNumber) {
        largeNumber = a[i];
    }
}
document.write("Array items: " + " " + a + "<br>");
document.write("the smallest no is : " + " " + largeNumber);
document.write("<br>" + "<br>");

//10. Write a program to print multiples of 5 ranging 1 to 100. 
for (i = 5; i <= 100; i = i + 5) {
    document.write(i + "," + " ");
}
document.write("<br>" + "<br>");

// ----------------------------------------  DONE AND DUSTED 20 CHP OF JS (ALHUMDULILAH) -----------------------------------------

// continue with the chapters (submission of all the chap)

// Chapter 21 to 25

// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

var fname = prompt('Enter your First Name');
var lname = prompt('Enter your Last Name');
var fullName = fname + " " + lname

document.write('Greetings ' + fullName)
document.write("<br><br>")


// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser

var mob = prompt('Enter your Favourite Phone:');

document.write('My Favourite Phone is : ' + mob + '<br>')
document.write('String Length : ' + mob.length)
document.write("<br><br>")

// 3. Write a program to find the index of letter n in the word Pakistani and display the result in your browser .

var myStr = "Pakistan"
document.write("String:" + myStr + "<br> Index of n :" + myStr.indexOf('n'))
document.write("<br><br>")

// 4.Write a program to find the last index of letter l in the word Hello World and display the result in your browser.

var hello = "Hello World";
document.write("String:" + hello + "<br> Last Index of l : " + hello.lastIndexOf('l'))
document.write("<br><br>")

// Write a program to find the character at 3rd index in the word Pakistani and display the result in your browser

document.write("String:" + myStr + "<br> Character at 3rd Index : " + myStr.charAt(3))
document.write("<br><br>")

// 6. Repeat Q1 using string concat() method.

var firstname = prompt('Enter your First Name');
var lastname = prompt('Enter your Last Name');
var fullName = firstname.concat(lastname)
document.write('Greetings ' + fullName)
document.write("<br><br>")

// 7. Write a program to replace the Hyder to Islam in the word Hyderabad and display the result in your browser.

var city1 = "Hyderabad";
var city2 = "Islam" + city1.slice(5);
document.write("City:" + city1)
document.write("<br>After Replacement:" + city2)
document.write("<br><br>")

// 8. Write a program to replace all occurrences of and in the string with & and display the result in your browser.
var message = "Ali and Sami are best friends. They play cricket and football together."
var result = message.replace(/and/g, "&")
document.write("BEFORE : " + message)
document.write("<br>AFTER : " + result)
document.write("<br><br>")

// 9. Write a program that converts a string 472 to a number 472. Display the values & types in your browser.

var Str = "472";
document.write("Value: " + Str)
document.write("<br>Type: " + typeof (Str))
var myNum = parseInt(Str)
document.write("<br>Value: " + myNum)
document.write("<br>Type: " + typeof (myNum))
document.write("<br><br>")


// 10. Write a program that takes user input. Convert and show the input in capital letters.

var userInput = prompt("Enter Something:");
document.write("User input :" + userInput);
document.write("<br>Upper Case :" + userInput.toUpperCase())
document.write("<br><br>")

// 11. Write a program that takes user input. Convert and show the input in title case.
var user = prompt("Enter Something:");
document.write("User input :" + user);
var firstLetter = user.slice(0, 1).toUpperCase();
var last = user.slice(1).toLowerCase();
var res = firstLetter + last;
document.write("<br>Title Case :" + res)
document.write("<br><br>")

// 12. Write a program that converts the variable num to string.

var numb = 35.36;
document.write("Number : " + numb)
document.write("<br>Result : " + numb.toString().replace('.', ''))
document.write("<br><br>");

// 13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. 
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var uName = prompt("Enter User name: ");
for (var i = 0; i < uName.length; i++) {
    if (uName.charCodeAt(i) === (33) || uName.charCodeAt(i) === (44) || uName.charCodeAt(i) === (46) || uName.charCodeAt(i) === (64)) {
        alert("Please Enter a Valid User Name: ");
        break;
    }
}
alert("Name: " + uName);

// 14. You have an array A = [cake, apple pie, cookie, chips, patties]
// Write a program to enable search by user input in an array. After searching, prompt the user whether the given item is found in the list or not.

var bakeryItems = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to bakery! What do you want to order");
var flag = 0;

for (i = 0; i <= bakeryItems.length; i++) {
    if (bakeryItems[i] === input) {
        flag = 1;
        document.write(input + " " + "is available at index" + " " + i + " " + "in our bakery");
    }
}

if (flag == 0) {
    document.write("We are sorry" + " " + input + " " + "is not available in our bakery")
}


document.write("<br>" + "<br>");


// 15. Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

var password = prompt("Enter your password")

var numbers = false;
var lowerCaseLetter = false;
var upperCaseLetter = false;
var length = true;
var firstChar = true;


for (x = 0; x <= password.length - 1; x++) {
    if (password.charCodeAt(x) >= 97 && password.charCodeAt(x) <= 122) {
        lowerCaseLetter = true;
    }
    if (password.charCodeAt(x) >= 48 && password.charCodeAt(x) <= 57) {
        numbers = true;
    }
    if (password.charCodeAt(x) >= 65 && password.charCodeAt(x) <= 90) {
        upperCaseLetter = true;
    }

}

if (password.length <= 6) {
    length = false;
}

for (i = 0; i <= 10; i++) {
    if (password.startsWith(i, 0)) {
        firstChar = false;
    }
}

if (numbers == false || upperCaseLetter == false || lowerCaseLetter == false || length == false || firstChar == false) {
    alert("you enter an invalid password")
    if (numbers == false || upperCaseLetter == false || lowerCaseLetter == false) {
        alert("password must contain a upeercase letter, a lower case letter and a number")
    }
    if (length == false) {
        alert("lenght of password must be maximum 6 characters")
    }
    if (firstChar == false) {
        alert("password can not start with a number")
    }
}
else {
    alert("password approved")
}

// 16. Write a program to convert the following string to an array using string split method.Display the elements of array in your browser.

var university = "University of Karachi";
var arr = university.split('');

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i]);
    document.write("<br>")
}

document.write("<br>" + "<br>");


// 17. Write a program to display the last character of a user input.

var inp = prompt("Enter an input : ");
var lastCh = inp.split('')

document.write("User Input : " + inp);
document.write("<br>Last Character : " + lastCh[lastCh.length - 1])
document.write("<br>" + "<br>");

// 18. You have a string The quick brown fox jumps over the lazy dog. Write a program to count number of occurrences of word the in given string

var count = 0;
var givenString = "the quick brown fox jumps over the lazy dog";

var myArray = givenString.split(" ")

for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == "the") {
        count++;
    }
}

document.write("Given String : " + givenString)
document.write("<br>Count : " + count)


// Chapter 26 to 30

// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var myNumber = +prompt("Enter a Positive number:");
document.write("Number : " + myNumber);
document.write("<br>Round Off : " + Math.round(myNumber));
document.write("<br>Floor Value : " + Math.floor(myNumber));
document.write("<br>Ceil Value : " + Math.ceil(myNumber));
document.write("<br>" + "<br>");

// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

var myNumb = +prompt("Enter a negative number:");
document.write("Number : " + myNumb);
document.write("<br>Round Off : " + Math.round(myNumb));
document.write("<br>Floor Value : " + Math.floor(myNumb));
document.write("<br>Ceil Value : " + Math.ceil(myNumb));
document.write("<br>" + "<br>");

// 3. Write a program that displays the absolute value of a number.

var InpNum = prompt("Enter a Number to get absolute value : ");
document.write("Given Number : " + InpNum);
document.write("<br>Absolute Value : " + Math.abs(InpNum))
document.write("<br>" + "<br>");

// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser:

var dice = Math.random() * 6
var result = Math.round(dice)
document.write("Random Dice Value :" + result)

// 5- Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

var toss = Math.random() * 2;
var decision = Math.floor(toss)

if (decision == 0) {
    document.write(decision + "<br>")
    document.write("heads");
} else {
    document.write(decision + "<br>")
    document.write("tails");
}

//6- Write a program that shows a random number between 1 and 100 in your browser.

var RandomNumber = Math.random() * 100;
var RandomResult = Math.floor(RandomNumber)
document.write("RandomNumber b/w 1 and 100:" + RandomResult)
document.write("<br>" + "<br>");

// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 

var weight = prompt("Enter your weight")
var ResultValue = "";

document.write("The weight of user is" + " ");

for (i = 0; i <= weight.length - 1; i++) {
    if (weight.charCodeAt(i) >= 48 && weight.charCodeAt(i) <= 57 || weight.charCodeAt(i) == 46) {
        ResultValue = weight[i];
        document.write(ResultValue);
    }

}
document.write(" " + "kilograms");


document.write("<br>" + "<br>");

// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

var secretInput = +prompt("Enter a secret Number")

var secret = Math.floor(Math.random() * 10);
if (secretInput == secret) {
    alert("Congratulations!")
}
else {
    alert("Better Luck Next Time")
}


// Chapter 31 to 34

// Write a program that displays current date and time in your browser.

var today = new Date()
document.write(today)
document.write("<br><br>")

// Write a program that alerts the current month in words.For example December.


var monthName = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var month = today.getMonth();
alert("Current Month : " + monthName[month])

// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

var day = today.getDay()
document.write("Today is " + weekDays[day])
document.write("<br><br>")

// 4. Write a program that displays a message Its Fun day if its Saturday or Sunday today.

if (weekDays[day] == "Sun" || weekDays[day] == "Sat") {
    alert("It's Fun day")
}

// 5. Write a program that shows the message First fifteen days of the month if the date is less than 16th of the month else shows Last days of the month.

var date = today.getDate();
if (date > 16) {
    alert('First fifteen days of the month')
}
else {
    alert('Last days of the month')
}

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.


document.write('Current date : ' + today + "<br>");
document.write('Elapsed Miliseconds since Jan 1 1970 : ' + today.getTime() + "<br>")
document.write('Elapsed Minutes since Jan 1 1970 : ' + (today.getTime()) / (1000 * 60) + "<br><br>")


// 7. Write a program that tests whether it's before noon and alert Its AM else its PM.

if (today.getHours() >= 0 && today.getHours() <= 12) {
    document.write("Its AM")
}
else {
    document.write("Its PM")
}
document.write("<br><br>")

// Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

var laterDate = new Date("Dec 31, 2020")
document.write("Later Date : " + laterDate)
document.write("<br><br>")

// Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?Note: 1st Ramadan was on June 18, 2015

var Ramadan = new Date("Jun 18,2015")
var diff = (today - Ramadan) / (1000 * 60 * 60 * 24);

document.write(Math.floor(diff) + " days since 1st Ramadan 2015 <br><br>")


// Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

var RefDate = new Date("Dec 05,2015")
var BegDate = new Date("Jan 01 2015")

var resultSec = (RefDate - BegDate) / 1000;
document.write("Refrence Date : " + RefDate + "<br>")
document.write(resultSec + " seconds passed since begining of 2015")
document.write("<br><br>")

// 11. Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

var d = new Date();
document.write("Current Date : " + d + "<br>")
d.setHours(d.getHours() - 1);

document.write("1 hour ago it was " + d)
document.write("<br><br>")

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?
var pYear = new Date();
document.write("Current Date : " + pYear + "<br>")
pYear.setFullYear(pYear.getFullYear() - 100);

alert("100 back it was " + pYear)
document.write("<br><br>")

var UserAge = new Date(prompt("Enter your DOB", "Jan 1 ,1970"));
var age = (today - UserAge) / (1000 * 60 * 60 * 24 * 365);


document.write("Your Birth Year is :" + UserAge.getFullYear() + "<br>")
document.write("Your Age is " + Math.floor(age))


// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:

// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)


var CustomerName = "ABC Customer";
var month = today.getMonth();
var Units = 410;
var ChargePerUnit = 16
var NetAmount = Units * ChargePerUnit;
var late = 350;
var GrossAmount = NetAmount + late;

document.write("<h1>K-ELECTRIC BILL</h1><br>")
document.write("Customer Name : " + CustomerName + "<br>")
document.write("Month : " + monthName[month] + "<br>")
document.write("Number of Units : " + Units.toFixed(2) + "<br>")
document.write("Charge Per Unit : " + ChargePerUnit.toFixed(2) + "<br>")
document.write("Net Amount Payable (within Due Date) : " + NetAmount.toFixed(2) + "<br>")
document.write("Late Payment Surcharge : " + late.toFixed(2) + "<br>")
document.write("Gross Amount Payable(after Due date) : " + GrossAmount.toFixed(2) + "<br><br>")



// Chapter 35 to 38

// 1. Write a function that displays current date & time in your browser.

function displayDateTime() {
    todayDate = new Date();
    document.write("Current Date & Time is : " + todayDate);
}
displayDateTime();
document.write("<br><br>");


// Write a function that takes first & last name and then it greets the user using his full name.

function greetings(first, second) {
    result = "Greetings " + first + " " + second;
    return result;
}

var firstName = prompt("Enter your First Name : ");
var lastName = prompt("Enter Your Last Name : ");

document.write(greetings(firstName, lastName))
document.write("<br><br>");

// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

function addition(first, second) {
    result = first + second
    return result;
}

var firstNum = +prompt("Enter First Number : ");
var secondNum = +prompt("Enter Second Number : ");

document.write(addition(firstNum, secondNum))
document.write("<br><br>");


// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

function calculate(num1, num2, opt) {
    if (opt == "+") {
        return num1 + num2
    }
    else if (opt == "-") {
        return num1 - num2
    }
    else if (opt == "*") {
        return num1 * num2
    }
    else if (opt == "/") {
        return num1 / num2
    }
    else if (opt == "%") {
        return num1 % num2
    }
    else {
        return 'incorrect operator'
    }
}

var num1 = +prompt("Enter First Number");
var num2 = +prompt("Enter Second Number");
var opt = prompt("Enter operator", "+,-,*,%,/")

alert("Result:" + calculate(num1, num2, opt))

// Write a function that squares its argument.

function square(num) {
    return num * num;
}

var inputNumber = +prompt("Enter a Number to get Square:")
alert("Square = " + square(inputNumber))


// 6. Write a function that computes factorial of a number.
function factorial(num) {
    if (num === 0 || num === 1)
        return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

var UserInput = +prompt("Enter a value to get factorial : ")
alert("factorial = " + factorial(UserInput))

// Write a function that take start and end number as inputs & display counting in your browser.

function counting(start, end) {
    for (var i = start; i <= end; i++) {
        document.write(i + "<br>");
    }

}
var start = +prompt("Enter starting number");
var end = +prompt("Enter end number");

counting(start, end);

// Write a nested function that computes hypotenuse of a right angle triangle. 

function calculateHypotenuse(base, perp) {

    function calculateSquare(value) {
        return value * value;
    }

    var hyp = calculateSquare(base) + calculateSquare(perp)
    return Math.sqrt(hyp)
}
document.write("Value of Hypotenuse is : " + calculateHypotenuse(3, 4))
document.write("<br><br>")

// // Write a function that calculates the area of a rectangle.
// // Pass width and height in following manner:
// // i. Arguments as value
// // ii. Arguments as variables


function area(width, height) {
    return width * height
}

width = 5;
height = 6;
document.write("Area of Rectangle by values as arguments = " + area(3, 4) + "<br>")
document.write("Area of Rectangle by values as variables = " + area(width, height) + "<br><br>")


// // Write a JavaScript function that checks whether a passed string is palindrome or not?

function palindrome(str) {
    str = str.toLowerCase();
    var reverseStr = str.split('').reverse().join('');
    return reverseStr === str;
}

var UserString = prompt("Enter a string to check Palindrome")
alert(palindrome(UserString))

// // Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function titlecase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
}
alert(titlecase("the quick brown fox"));

// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestWord(string) {
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i <= str.length - 1; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}

alert(longestWord("Saylani Web and Mobile Development Course"));


// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

var CheckStr = prompt("Input a String:");
var CheckLetter = prompt("Enter a character to check:");

function CharCount(str, letter) {
    var count = 0;

    var SampleArray = str.split('');

    for (var i = 0; i < SampleArray.length; i++) {
        if (SampleArray[i] == letter) {
            count++;
        }
    }

    return count;
}

alert(CheckLetter + " is present " + CharCount(CheckStr, CheckLetter) + " times")


// The Geometrizer


function calcCircumference(radius) {

    return (2 * Math.PI * radius)


}

function calcArea(radius) {
    return Math.PI * radius * radius

}


document.write("The Circumference is :" + calcCircumference(3))


document.write("<br>The Area of Circle is :" + calcArea(3))
document.write("<br>")




//////////////////////////38 TO   42//////////////////



/////////////////=========  QUESTION NO 1  ========///////////////////


function foo(a = 2, b) {
    return a + b
}
document.write(foo(2, 5))





//////////////=======   QUESTION NO 2  =========//////////////
function leapyear(year) {
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    /}

        / console.log(leapyear(2016));
    console.log(leapyear(2000));
    console.log(leapyear(1700));
    console.log(leapyear(1800));
    console.log(leapyear(100));
    console.log(leapyear(2020));
    console.log(leapyear(2012));



    ////////////////////========  QUESTION NO 4  =========//////////////////////
    /var num = 88 ; 
    var num = 80;
    var num = 77;

    function PercentageFunction(num) {
        return (num / 100)
    }
    console.log(PercentageFunction(88, 80, 77 / 100))

    function SecondFunction(per) {


        /return ( 245*per)



    }
    console.log(SecondFunction(245, 0.88))


    function mainFunction() {
        return (245 / 3)
    }
    console.log(mainFunction(245, 3))


    ////////////////////=========   QUESTION NO 5  ===========/////////////////////



    function indexof() {
        var str = "Hello world i am noor butt.";
        var n = str.indexOf("n");
        document.getElementById("blank").innerHTML = n;
    }



    ///////////////////==========  Question no 6  ==========////////////////////////
    var text = " Pleases read this application and give me gratuity ";
    var count = 0;
    switch (text.lenght) {
        case 'A':
            count++
        case 'a':
            count++
                / case 'e':
        case 'i':
        case 'o':
        case 'u':


            console.log(1);
            break;
        default:
            console.log(0)
    }


    /////// QUESTION NO  7 =====//

    convert to distance in meters//
    var city_km = prompt("write your city km", ' 1025km  distance of  karachi to lahore ');
    var km = 1025;
    var meters = 1000;

    function function1(km, meter) {
        return (1025 * 1000)
    }
    console.log(function1(1025, 1000))



        // / convert to distance in feet ///

    var km = 1025;
    var feet = 3281;

    function function2(km, feet) {
        return (1025 * 3281)}
    console.log (function2 (1025 , 3281 ))

        // / convert to distance in inches  ///


    var km = 1025;
    var inches = 3281;
    function function3(km, inches) {
        return (1025 * 3281)
    }
    /console.log(function3(1025,3281)) 



    ///  convert to distance in centimeters////

    var km = 1025;
    var centimeter = 100000;


    function function4() {
        return (1025 * 100000)

    }
    /console.log (function4 (1025,100000))


    //////////   QUESTION NO   8    ///////////////


    var payRate = 12;
    var employeWorked = 42;

    function timeCalculate(payRate, employeWorked) {
        return (12 * 42)

    }
    console.log(timeCalculate(12, 42))   ///   output 504
    var regularPay = 504;
    var payRate = 12;
    var hour = 2;
    /function overTimepay (){
    return (504 + 504 * 12 * 2)

}
////////// QUESTION NO  9 ///////////////
var int = prompt("Please input amount for withdraw : ") // input value 2390

var r = int / 100    // 100 notes 
console.log(r, "100 Rs. notes ")
var b = int % 100
console.log(b)

var c = b / 50     // 50 notes 
console.log(c, "50 Rs. notes ")
var d = b % 50
console.log(d)


var e = d / 10     // 10 notes 
console.log(e, "10 Rs. notes")
var f = d % 10
console.log(f)

/////////////////43 to 48  //////////////////

alert("Click on a link");

function user() {
    alert("Thanks for Purchasing a Phone from us");
}


function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}


function myover() {
    document.getElementById("pop").src = "./images/14.png";
}

function mymouse() {
    document.getElementById("pop").src = "./images/15.jpg"
}

var btnAdd = document.querySelector('#add');
var btnsubtract = document.querySelector('#subtract');
var input = document.querySelector('input');


btnAdd.addEventListener('click', () => {
    input.value = parseInt(input.value) + 1;
})


btnsubtract.addEventListener('click', () => {
    input.value = parseInt(input.value) - 1;
})


////////////////////////49 to 52///////////////////////////

var form = document.getElementById("name-form");
form.onsubmit = function (e) {
    e.preventDefault();
    var result = document.getElementById("result");
    result.innerHTML = form.email.value;
    form.reset();
}


function edit_row(no) {
    document.getElementById("edit_button" + no).style.display = "none";
    document.getElementById("save_button" + no).style.display = "block";

    var name = document.getElementById("name_row" + no);
    var country = document.getElementById("country_row" + no);
    var age = document.getElementById("age_row" + no);

    var name_data = name.innerHTML;
    var country_data = country.innerHTML;
    var age_data = age.innerHTML;

    name.innerHTML = "<input type='text' id='name_text" + no + "' value='" + name_data + "'>";
    country.innerHTML = "<input type='text' id='country_text" + no + "' value='" + country_data + "'>";
    age.innerHTML = "<input type='text' id='age_text" + no + "' value='" + age_data + "'>";
}

function save_row(no) {
    var name_val = document.getElementById("name_text" + no).value;
    var country_val = document.getElementById("country_text" + no).value;
    var age_val = document.getElementById("age_text" + no).value;

    document.getElementById("name_row" + no).innerHTML = name_val;
    document.getElementById("country_row" + no).innerHTML = country_val;
    document.getElementById("age_row" + no).innerHTML = age_val;

    document.getElementById("edit_button" + no).style.display = "block";
    document.getElementById("save_button" + no).style.display = "none";
}

function delete_row(no) {
    document.getElementById("row" + no + "").outerHTML = "";
}

function add_row() {
    var new_name = document.getElementById("new_name").value;
    var new_country = document.getElementById("new_country").value;
    var new_age = document.getElementById("new_age").value;

    var table = document.getElementById("data_table");
    var table_len = (table.rows.length) - 1;
    var row = table.insertRow(table_len).outerHTML = "<tr id='row" + table_len + "'><td id='name_row" + table_len + "'>" + new_name + "</td><td id='country_row" + table_len + "'>" + new_country + "</td><td id='age_row" + table_len + "'>" + new_age + "</td><td><input type='button' id='edit_button" + table_len + "' value='Edit' class='edit' onclick='edit_row(" + table_len + ")'> <input type='button' id='save_button" + table_len + "' value='Save' class='save' onclick='save_row(" + table_len + ")'> <input type='button' value='Delete' class='delete' onclick='delete_row(" + table_len + ")'></td></tr>";

    document.getElementById("new_name").value = "";
    document.getElementById("new_country").value = "";
    document.getElementById("new_age").value = "";
}


// Chapter 58 - 67//
/////Dom //////////////////////////////////////////////////////////


// POINT NO 2 //////

var type = document.getElementById("lastName")
type.nodeType
console.log(type)
var child = document.getElementById("lastName")
child.childNodes
var childNodes = child.innerHTML;
console.log(childNodes)

// POINT NO 3 //////

var childUpdate = document.getElementById("lastName")
childUpdate.childNodes
var childNoes = childUpdate.innerHTML;
console.log(childNoes)
// POINT NO 4 //////
var firstChildId = document.getElementById("main-content")
firstChildId.firstChild
console.log(firstChildId)


var lastChildId = document.getElementById("main-content")
lastChildId.lastChild
console.log(lastChildId)

// POINT NO 5 //////
var getSibling = document.getElementById("lastName").nextSibling
console.log(getSibling)


var getSiblingPre = document.getElementById("lastName").previousSibling
    / console.log(getSiblingPre)

// POINT NO 6 //////

var getParentNote = document.getElementById("email").parentNode
console.log(getParentNote)

var getNoteType = document.getElementById("email").nodeType
console.log(getNoteType)



///////  POINT NO 3 /////////
var input = document.getElementById("first-name")
input.value = "Alex"


////// point no 4 //////////           
var input = document.getElementById("last-name")
input.value = "Bank"

var input = document.getElementById("email")
input.value = "alexbank@example.com  "

    / QUESTION NO 2 ///
// POINT NO 1 //////

var d = document.getElementById("form-content");
d.nodeType
console.log(d)


// POINT NO 2 //////

var type = document.getElementById("lastName")
type.nodeType
console.log(type)
var child = document.getElementById("lastName")
child.childNodes
var childNodes = child.innerHTML;
console.log(childNodes)

// POINT NO 3 //////

var childUpdate = document.getElementById("lastName")
childUpdate.childNodes
var childNoes = childUpdate.innerHTML;
console.log(childNoes)
// POINT NO 4 //////
var firstChildId = document.getElementById("main-content")
firstChildId.firstChild
console.log(firstChildId)


var lastChildId = document.getElementById("main-content")
lastChildId.lastChild
console.log(lastChildId)

// POINT NO 5 //////
var getSibling = document.getElementById("lastName").nextSibling
console.log(getSibling)


var getSiblingPre = document.getElementById("lastName").previousSibling
    / console.log(getSiblingPre)

// POINT NO 6 //////

var getParentNote = document.getElementById("email").parentNode
console.log(getParentNote)

var getNoteType = document.getElementById("email").nodeType
console.log(getNoteType)


// done and dusted