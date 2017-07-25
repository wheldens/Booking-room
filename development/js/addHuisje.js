function addHuisje() {
}

addHuisje.prototype.sayDagen = function (van, tot) {
    var a = Date.parse(van.value);
    var b = Date.parse(tot.value);
    x = b - a;
    var x = x / 1000 / 60 / 60 / 24; // van ms tot dag
    this.dagen = x;
}
addHuisje.prototype.welkHuisje = function (x) {
    this.huisje = x;
}
var newHuisje = new addHuisje();

var voegHuisjeToeKNOP = document.querySelector("#voegHuisjeToe");
// knop welkHuisje
voegHuisjeToeKNOP.addEventListener("click", function () {
    event.preventDefault()

    if (vanDag.value == "") {
        vanDag.value = todayDate;
    }
    if (totDag.value == "") {
        totDag.value = todayDate;
    }

    if (vanDag.value === totDag.value) {
        alert("Selecteer een datum");
    } else if (welkHuisje.value === "Kies uw type huisje") {
        alert("Selecteer uw type huisje");
    } else {

        newHuisje.sayDagen(vanDag, totDag);
        newHuisje.welkHuisje(welkHuisje.value);
        newBooking.addHuisjeToBooking();
        insertLoopHuisje(newBooking.huisje);
        aanHef.focus();
    }
});
