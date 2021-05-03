function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"White",
        Breed:"Golden Retriever",
        Age:2,
        Sound:"Ruff!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}