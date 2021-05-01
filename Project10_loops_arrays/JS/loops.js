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