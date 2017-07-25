var arrayGasten = [];

function addGast(aanHef, voorNaam, achterNaam, leefTijd) {
    this.aanhef = aanHef;
    this.voornaam = voorNaam;
    this.achternaam = achterNaam;
    this.leeftijd = leefTijd;
}

addGast.prototype.volwassenFunct = function () {
    if (this.leeftijd > 18 - 1) {
        this.volwassen = "Volwassen";
    } else {
        this.volwassen = "Kind";
    }
}

var voegPersoonToeKNOP = document.querySelector("#voegPersoonToe");
// knop addGast
voegPersoonToeKNOP.addEventListener("click", function () {
    event.preventDefault()
    if (aanHef.value === "Aanhef") {
        alert("Vergeet het aanhef knopje niet.");
    } else if (!voorNaam.value || !achterNaam.value) {
        alert("Voer a.u.b. uw voor en achternaam in");
    } else if (!leefTijd.value) {
        alert("Voer a.u.b. uw leeftijd in");
    } else {

        var gastenFieldset = document.querySelector("#gastenFieldset");

        var x = arrayGasten.length
        arrayGasten[x] = new addGast(aanHef.value, voorNaam.value, achterNaam.value, leefTijd.value);
        arrayGasten[x].volwassenFunct();
        gastenFieldset.style.display = "block";
        newBooking.addGastenToBooking();
        insertLoopGasten(newBooking.gasten);


        printPrijsFunc();
        voegHuisjeToeKNOP.addEventListener("click", function () {
            printPrijsFunc();
        });
        voegPersoonToeKNOP.addEventListener("click", function () {
            printPrijsFunc();
        });

    }
    ;
});


