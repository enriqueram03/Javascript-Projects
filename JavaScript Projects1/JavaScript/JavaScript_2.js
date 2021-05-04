function Juice() {
    var x = document.forms["wrld"]["fname"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;