document.write(typeof "Word"); //String

document.write(typeof 3); //Number

document.write("10" + 5); //105

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0;  //NaN
}

function my_function() {
document.getElementById("test").innerHTML = isNaN('This is a string'); //true
}

function my_Ffunction() {
    document.getElementById("Ttest").innerHTML = isNaN('007'); //false
}

document.write(2E310); //Infinity

document.write(-3E310); //Negative Infinity

document.write(10 > 2); //Boolean Logic true

document.write(10 < 2); //Boolean logic false

console.log(2 + 4); //Makes it appear in the console

console.log(2 + 4 > 8); //Using boolean logic in the console

document.write(10 == 10); // true using the == symbol to check for equality first item compared to the second item

document.write(3 == 11); // false since the 3 and 11 arent equal

X = 10;
Y = 10;
document.write(X === Y); // the compuer checks if the 2 pieces of data are equal in both Data and Type this is true

X = 82;
Y = "82";
document.write(X === Y); // checks if the 2 pieces of data are equal it see's they arent it comes back false

document.write(5 > 2 && 10 > 4); // the &&  determines the logic between values and variables and but must retrun true if not it comes back false

document.write(5 > 10 && 10 > 4); // since one isnt true then it would come back false

document.write(5 > 10 || 10 > 4); //this is gonna come cack true since one is true if niether is true it comes back false

document.write(5 > 10 || 10 > 20); //false

// the ! Not operator checks whether something is true or not if its false true will be returned

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10); // this returns false
}

function not_function() {
    document.getElementById("not").innerHTML = !(5 > 10); // this returns true
}