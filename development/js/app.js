"use strict";
// set variabelen
var vanDag = document.querySelector("#vanDag");
var totDag = document.querySelector("#totDag");

var todayDate = new Date().toISOString().slice(0, 10);

vanDag.value = todayDate;
totDag.value = todayDate;

var voorNaam = document.querySelector("#voorNaam");
var achterNaam = document.querySelector("#achterNaam");
var leefTijd = document.querySelector("#leefTijd");
var aanHef = document.querySelector("#aanHef");
var welkHuisje = document.querySelector("#welkHuisje");

// var voegHuisjeToeKNOP = document.querySelector("#voegHuisjeToe");
// var voegPersoonToeKNOP = document.querySelector("#voegPersoonToe");
var inboekenKNOP = document.querySelector("#submitKnop");
var deleteItemKNOP = document.querySelector(".deleteItem");
var naarControleKNOP = document.querySelector("#naarControle");

var huisjeUl = document.querySelector("#huisjeUl");
var gastenDIV = document.querySelector("#gastenDIV");
var controleBoekingUl = document.querySelector("#controleBoekingUl");

////// maak object
function booking() {
}

////// bind modules
booking.prototype.addHuisjeToBooking = function () {
    this.huisje = newHuisje;
}
booking.prototype.addGastenToBooking = function () {
    this.gasten = arrayGasten;
}
booking.prototype.addPrijsToBooking = function () {
    this.prijs = nieweBerekening;
}


//insert function
var insertLoopHuisje = function (x) {
    var insertDataHuisje = "";
    insertDataHuisje += "<li>Type huisje: " + x.huisje + "</li><br><li>Aantal overnachtingen: " + x.dagen + "</li>";
    huisjeUl.innerHTML = insertDataHuisje;
}

function deleteFunct(i) {
    newBooking.gasten.splice(i, 1);
    newBooking.addGastenToBooking();
    insertLoopGasten(newBooking.gasten);
    printPrijsFunc();
}

//for loop function
var insertLoopGasten = function (x) {
    var insertDataGasten = "<ul><h5>Personen</h5><hr></ul>";
    for (var i = x.length - 1; i >= 0; i--) {
        insertDataGasten += "<ul><li>" + newBooking.gasten[i].aanhef + "</li><li>" + newBooking.gasten[i].voornaam + " " + newBooking.gasten[i].achternaam + "</li><br />"
        insertDataGasten += "<li>Leeftijd: " + newBooking.gasten[i].leeftijd + "</li> <br /><li>Categorie: " + newBooking.gasten[i].volwassen + "</li>";
        insertDataGasten += "<li><button class='btn btn-danger btn-sm deleteKnopje' onclick='deleteFunct(" + i + ")'><i class='fa fa-times'></i></button></li></ul>";
        insertDataGasten += "<hr>"
    }
    gastenDIV.innerHTML = insertDataGasten;
}

var insertPrijs = function (x) {
    var insertDataPrijs = "";

    insertDataPrijs += vanDag.value.split("-").reverse().join("-") + " / 	" + totDag.value.split("-").reverse().join("-") + "</li><br />";
    insertDataPrijs += "<hr />"
    insertDataPrijs += "<li>" + "Volwassenen: " + x.aantalVolwassenen + "</li><br />";
    insertDataPrijs += "<li>" + "Kinderen: " + x.aantalKinderen + "</li><br />";
    insertDataPrijs += "<hr />"
    insertDataPrijs += "<li>" + "Huisje per nacht: " + x.kostenHuisjePerNacht + "</li><br />";
    insertDataPrijs += "<li>" + "Gasten per nacht: " + x.kostenGastenPerNacht + "</li><br />";
    insertDataPrijs += "<li>" + "Totaal per nacht: " + x.kostenTotaalPerNacht + "</li><br />";
    insertDataPrijs += "<hr />"
    insertDataPrijs += "<li>" + "Totaal: &#x20AC " + x.kostenTotaal + ",- </li>";

    controleBoekingUl.innerHTML = insertDataPrijs;
}

///////////////////////////////////////////////////////////////
var newBooking = new booking();
///////////////////////////////////////////////////////////////

// knop Inboeken
inboekenKNOP.addEventListener("click", function () {
    event.preventDefault()

    if (gastenFieldset.style.display) {
        console.log(newBooking);
        var json_data = JSON.stringify(newBooking);
        console.log(json_data);
    } else {
        alert("Voeg ook gasten toe")
    }

});
