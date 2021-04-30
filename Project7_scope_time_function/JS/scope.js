var X = 10; //global variables are declared outside of functions, GV can be accessed from any function within the program
function Add_numbers_1 () {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 200);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_3() { // this is a local variable it is only accessed by the function it is assigned too, and it is declared inside of functions
    var Y = 10;
    document.write(30 + Y + "<br>");
}
function Add_numbers_4() {
    document.write(Y + 100);
    }
Add_numbers_3();
Add_numbers_4();

function Add_numbers_5() { // this is a local variable it is only accessed by the function it is assigned too, and it is declared inside of functions
    var Z = 10;
    console.log(30 + Y + "<br>");
}
function Add_numbers_6() {
    console.log(Z + 100);
    }
Add_numbers_5();
Add_numbers_6();

if (1 < 2) { // working off if statements
    document.write("The left number is smaller than the number on the.")
}

function get_Date(){ // The Date().getHours() method returns the hour in the specified date according to the local time, and the hours are listed as integers between 0 and 23 like how 18 is equal to 6:00 or 12 is noon
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) { //else if statement follows the if statement and is executed if the "if" statement is found to be false
        Reply ="It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}