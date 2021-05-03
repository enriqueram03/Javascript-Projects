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