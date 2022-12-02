function userClick () {
   console.log(document.getElementById("gia").value);
}

function userMouseIn () {
    console.log("Mouse In...");
}

function userMouseLeave() {
    console.clear();
}
var text = document.getElementById("ten");

function textInput() {
    document.getElementById("ten").style.backgroundColor = "blue";
    document.getElementById("ten").style.color = "white";
    document.getElementById("ten").style.width = "300px";
    console.log("Key down: " + text.value);
}

function Leave() {
    document.getElementById("ten").style.backgroundColor = "black";
    document.getElementById("ten").style.color = "white";
    document.getElementById("ten").style.width = "100px";
}

function change() {
    console.log()
}