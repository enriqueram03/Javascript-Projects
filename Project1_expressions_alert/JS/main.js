window.alert("Hello, WRLD!");  //Causes an alert window to pop up

document.write('Hello, WRLD!'); //Displays Text

var blues = "I have the blues."; //Statement
var blues = blues.fontcolor("blue"); //Putting the color
document.write(blues);

function My_First_Function() {  //Defining a function and naming it
    var str = "This text is green!";  //Defining a variable and giving it a string function
    var result = str.fontcolor("green");  //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of result into HTML element with "Green_Text" id
}