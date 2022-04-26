function run() {
    getCard();
}
function comp() {
    computer();
    compareNum();
}
var usertotal = 0
var pctotal = 0
function getCard() {
    var r = Math.floor(Math.random() * 10) + 1;
    var suitArray = ["C", "D", "H", "S"];
    var randomSuit = Math.floor(Math.random() * 4);
    document.getElementById("card").insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>");
    var user = document.getElementById("user");
    usertotal = usertotal + r;
    user.innerHTML = "User total is " + usertotal;
    user.style.color = "orange";
    user.style.textAlign = "center";
    return usertotal;
}
function computer() {
    do {
        var r = Math.floor(Math.random() * 10) + 1;
        var suitArray = ["C", "D", "H", "S"];
        var randomSuit = Math.floor(Math.random() * 4);
        document.getElementById("computer").insertAdjacentHTML("beforeend", "<img src=images/" + r + suitArray[randomSuit] + ".jpg>");
        var computer = document.getElementById("pc");
        pctotal = pctotal + r;
        computer.innerHTML = "Computer total is " + pctotal;
        computer.style.color = "orange";
        computer.style.textAlign = "center";
    } while (pctotal < 16);
    return pctotal;
}
function freset() {
    window.location.reload();
}
function compareNum() {
    if ((pctotal > 20) && ( usertotal > 20)) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "Everyone losses"
        compare.style.color = "orange"
        compare.style.textAlign = "center"
    } else if (usertotal > 20) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "You lost xd"
        compare.style.color = "orange"
        compare.style.textAlign = "center"
    } else if (pctotal > 20) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "Wow you actually won"
        compare.style.color = "orange"
        compare.style.textAlign = "center"
    } else if (pctotal > usertotal) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "You lost to a couple lines of code"
        compare.style.color = "orange"
        compare.style.textAlign = "center"
    } else if (usertotal > pctotal) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "Nice :|"
        compare.style.color = "orange"
        compare.style.textAlign = "center"
    } else if (usertotal == pctotal) {
        var compare = document.getElementById("compare")
        compare.innerHTML = "You tied"
        compare.style.color = "red"
        compare.style.textAlign = "center"
    }
}