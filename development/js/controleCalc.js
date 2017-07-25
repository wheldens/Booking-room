var prijsVolwPerNacht = 10;
var prijsKindPerNAcht = 5;

// function insertControle(){
function prijsObjectClass(vol_X, kind_X, nacht_X, nacht_K, kosten_TOTAAL) {
// vol_K ,kind_K,
    this.aantalVolwassenen = vol_X;
    this.aantalKinderen = kind_X;
    this.aantalNachten = nacht_X;

    // this.kostenVolPerNacht = vol_K;
    // this.kostenKindPerNacht = kind_K;
    this.kostenHuisjePerNacht = nacht_K;
    this.kostenTotaal = kosten_TOTAAL;
}

prijsObjectClass.prototype.telFunc = function () {
/// aantalgasten
    var vol_X = 0;
    var kind_X = 0;

//// tel volwassenen en kinderen
    for (var i = newBooking.gasten.length - 1; i >= 0; i--) {

        if (newBooking.gasten[i].volwassen === "Volwassen") {
            vol_X++;
        } else {
            kind_X++;
        }

        this.aantalVolwassenen = vol_X;
        this.aantalKinderen = kind_X;
        this.aantalNachten = newBooking.huisje.dagen;
    }
}

prijsObjectClass.prototype.berekenFunc = function () {

    var prijs = 0;
    switch (newBooking.huisje.huisje) {
        case "Tent":
            prijs = 5;
            break;
        case "Bungalow":
            prijs = 10;
            break;
        case "Villa":
            prijs = 15;
            break;
    }

    this.kostenVolPerNacht = this.aantalVolwassenen * prijsVolwPerNacht;
    this.kostenKindPerNacht = this.aantalKinderen * prijsKindPerNAcht;
    this.kostenGastenPerNacht = this.kostenKindPerNacht + this.kostenVolPerNacht;
    this.kostenHuisjePerNacht = prijs;
    this.kostenTotaalPerNacht = this.kostenGastenPerNacht + this.kostenHuisjePerNacht;
    this.kostenTotaal = this.kostenTotaalPerNacht * this.aantalNachten;
}

////////////////////////////////////////////////////////////
var nieweBerekening = new prijsObjectClass();
////////////////////////////////////////////////////////////


var printPrijsFunc = function () {

    if (!newBooking.huisje || newBooking.huisje.dagen == 0) {
        alert("Geef aan hoeveel dagen u wilt overnachten")
    } else {
        if (newBooking.huisje.huisje === "Kies uw type huisje") {
            alert("Kies uw type huisje")
        } else {

            if (!newBooking.gasten) {
                alert("Voeg ook gasten toe")
            } else {

                nieweBerekening.telFunc();
                nieweBerekening.berekenFunc();
                newBooking.addPrijsToBooking();
                insertPrijs(newBooking.prijs);

            }
        }
    }
}













