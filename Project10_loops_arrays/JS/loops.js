function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;   
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

function Tales() {
    var str = "Tales of a Loner";
    var n = str.length;
    document.getElementById("loner").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"}; //the value assigned by the const keyword is not immutable yet the variable identifier cannot be reassigned
    Musical_Instrument.color = "blue"; //created an object with the const keyword and then added a property with a value, it also changed the "black" value for the color property to blue
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

const X = 10; // If i got rid of the X = 10 2 would display if i took out the X = 2 10 would display
X = 2;
document.write(X);

var X = 10;
X = 7;
document.write(X); // it would display 7 the browser shows which ever value comes later
// you can reassign an identifier after using var, but you cannot do so after const, a constant cannot share its name with a function or a variable in the same scope.