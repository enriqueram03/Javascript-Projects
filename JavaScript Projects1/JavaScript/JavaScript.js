function Song_Function() {
    var Song_Output;
    var Songs = document.getElementById("Song_Input").value;
    var Song_String = " is a great song!";
    switch(Songs) {
        case "Purge":
            Song_Output = "Purge" + Song_String;
        break;
        case "Hot Girl Bummer":
            Song_Output = "Hot Girl Bummer" + Song_String;
        break;
        case "Rigamortus":
            Song_Output = "Rigamortus" + Song_String;
        break;
        case "Yeah Right":
            Song_Output = "Yeah Right" + Song_String;
        break;
        case "Myself":
            Song_Output = "Myself" + Song_String;
        break;
        case "The Adults Are Talking":
            Song_Output = "The Adults Are Talking" + Song_String;
        break;
        default:
        Song_Output = "Please enter a song exactly as written on the list above.";
    }
    document.getElementById("Output").innerHTML = Song_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";
ctx.strokeText("Juice Wrld",10,50);

var c = document.getElementById("Canvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "black");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 150, 100);