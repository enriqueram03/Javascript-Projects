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
    var Y = 10;
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