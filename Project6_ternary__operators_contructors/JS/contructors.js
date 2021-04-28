function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You too short":"You Good";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) { // This is an object constructor
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Created a person object
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = // something that dispays the information from the person object
    "Erik drives a " + Erik.Vehicle_Color + "-colored " +Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function Me(First, Last, Age, Eye) {
    this.Me_First = First;
    this.Me_Last = Last;
    this.Me_Age = Age;
    this.Me_Eye = Eye;
}
var Enrique = new Me("Juice", "Wrld", 18, "Hazel"); 
function Anime() {
    document.getElementById("New_and_This").innerHTML = 
    "I am " + Enrique.Me_First + Enrique.Me_Last + " I am " + Enrique.Me_Age + " years young and my eye's are " 
    + Enrique.Me_Eye;
}

function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one(); // this was the nested function, functions have funtions available to them in the code,and a nested function is a function under another function that is connected somehow
        return Starting_point;
    }
}

function JCOLE() {
    document.getElementById("Nested_Function").innerHTML = Bas();
    function Bas() {
        var e = 4;
        function Dreamville() {e += 5;}
        Dreamville();
        return e;        
    }
}