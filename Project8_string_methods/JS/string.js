function full_Sentence() { // you can make all the parts into a full sentence
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { // chosses specific text to show
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function Bumpin() { // makes everything upper case
    var str = "Outer Space";
    var res = str.toUpperCase();
    document.getElementById("saitama").innerHTML = res;
}

function Talking() {
    var str = "Visit Portland";
    var e = str.search("Portland");
    document.getElementById("Adults").innerHTML = e;
}

function string_Method() {
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
} 

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function Smash() {
    var num = 5.56789;
    var n = num.toFixed(2);
    document.getElementById("Number").innerHTML = n;
}

function values() {
    var str = "Hello World!";
    var res = str.valueOf();
    document.getElementById("value").innerHTML = res;
  }