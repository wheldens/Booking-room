function addGast(e,n,t,a){this.aanhef=e,this.voornaam=n,this.achternaam=t,this.leeftijd=a}function addHuisje(){}function booking(){}function deleteFunct(e){newBooking.gasten.splice(e,1),newBooking.addGastenToBooking(),insertLoopGasten(newBooking.gasten),printPrijsFunc()}function prijsObjectClass(e,n,t,a,o){this.aantalVolwassenen=e,this.aantalKinderen=n,this.aantalNachten=t,this.kostenHuisjePerNacht=a,this.kostenTotaal=o}var arrayGasten=[];addGast.prototype.volwassenFunct=function(){this.leeftijd>17?this.volwassen="Volwassen":this.volwassen="Kind"};var voegPersoonToeKNOP=document.querySelector("#voegPersoonToe");voegPersoonToeKNOP.addEventListener("click",function(){if(event.preventDefault(),"Aanhef"===aanHef.value)alert("Vergeet het aanhef knopje niet.");else if(voorNaam.value&&achterNaam.value)if(leefTijd.value){var e=document.querySelector("#gastenFieldset"),n=arrayGasten.length;arrayGasten[n]=new addGast(aanHef.value,voorNaam.value,achterNaam.value,leefTijd.value),arrayGasten[n].volwassenFunct(),e.style.display="block",newBooking.addGastenToBooking(),insertLoopGasten(newBooking.gasten),printPrijsFunc(),voegHuisjeToeKNOP.addEventListener("click",function(){printPrijsFunc()}),voegPersoonToeKNOP.addEventListener("click",function(){printPrijsFunc()})}else alert("Voer a.u.b. uw leeftijd in");else alert("Voer a.u.b. uw voor en achternaam in")}),addHuisje.prototype.sayDagen=function(e,n){var t=Date.parse(e.value),a=Date.parse(n.value);o=a-t;var o=o/1e3/60/60/24;this.dagen=o},addHuisje.prototype.welkHuisje=function(e){this.huisje=e};var newHuisje=new addHuisje,voegHuisjeToeKNOP=document.querySelector("#voegHuisjeToe");voegHuisjeToeKNOP.addEventListener("click",function(){event.preventDefault(),""==vanDag.value&&(vanDag.value=todayDate),""==totDag.value&&(totDag.value=todayDate),vanDag.value===totDag.value?alert("Selecteer een datum"):"Kies uw type huisje"===welkHuisje.value?alert("Selecteer uw type huisje"):(newHuisje.sayDagen(vanDag,totDag),newHuisje.welkHuisje(welkHuisje.value),newBooking.addHuisjeToBooking(),insertLoopHuisje(newBooking.huisje),aanHef.focus())});var vanDag=document.querySelector("#vanDag"),totDag=document.querySelector("#totDag"),todayDate=(new Date).toISOString().slice(0,10);vanDag.value=todayDate,totDag.value=todayDate;var voorNaam=document.querySelector("#voorNaam"),achterNaam=document.querySelector("#achterNaam"),leefTijd=document.querySelector("#leefTijd"),aanHef=document.querySelector("#aanHef"),welkHuisje=document.querySelector("#welkHuisje"),inboekenKNOP=document.querySelector("#submitKnop"),deleteItemKNOP=document.querySelector(".deleteItem"),naarControleKNOP=document.querySelector("#naarControle"),huisjeUl=document.querySelector("#huisjeUl"),gastenDIV=document.querySelector("#gastenDIV"),controleBoekingUl=document.querySelector("#controleBoekingUl");booking.prototype.addHuisjeToBooking=function(){this.huisje=newHuisje},booking.prototype.addGastenToBooking=function(){this.gasten=arrayGasten},booking.prototype.addPrijsToBooking=function(){this.prijs=nieweBerekening};var insertLoopHuisje=function(e){var n="";n+="<li>Type huisje: "+e.huisje+"</li><br><li>Aantal overnachtingen: "+e.dagen+"</li>",huisjeUl.innerHTML=n},insertLoopGasten=function(e){for(var n="<ul><h5>Personen</h5><hr></ul>",t=e.length-1;t>=0;t--)n+="<ul><li>"+newBooking.gasten[t].aanhef+"</li><li>"+newBooking.gasten[t].voornaam+" "+newBooking.gasten[t].achternaam+"</li><br />",n+="<li>Leeftijd: "+newBooking.gasten[t].leeftijd+"</li> <br /><li>Categorie: "+newBooking.gasten[t].volwassen+"</li>",n+="<li><button class='btn btn-danger btn-sm deleteKnopje' onclick='deleteFunct("+t+")'><i class='fa fa-times'></i></button></li></ul>",n+="<hr>";gastenDIV.innerHTML=n},insertPrijs=function(e){var n="";n+=vanDag.value.split("-").reverse().join("-")+" / \t"+totDag.value.split("-").reverse().join("-")+"</li><br />",n+="<hr />",n+="<li>Volwassenen: "+e.aantalVolwassenen+"</li><br />",n+="<li>Kinderen: "+e.aantalKinderen+"</li><br />",n+="<hr />",n+="<li>Huisje per nacht: "+e.kostenHuisjePerNacht+"</li><br />",n+="<li>Gasten per nacht: "+e.kostenGastenPerNacht+"</li><br />",n+="<li>Totaal per nacht: "+e.kostenTotaalPerNacht+"</li><br />",n+="<hr />",n+="<li>Totaal: &#x20AC "+e.kostenTotaal+",- </li>",controleBoekingUl.innerHTML=n},newBooking=new booking;inboekenKNOP.addEventListener("click",function(){if(event.preventDefault(),gastenFieldset.style.display){console.log(newBooking);var e=JSON.stringify(newBooking);console.log(e)}else alert("Voeg ook gasten toe")});var prijsVolwPerNacht=10,prijsKindPerNAcht=5;prijsObjectClass.prototype.telFunc=function(){for(var e=0,n=0,t=newBooking.gasten.length-1;t>=0;t--)"Volwassen"===newBooking.gasten[t].volwassen?e++:n++,this.aantalVolwassenen=e,this.aantalKinderen=n,this.aantalNachten=newBooking.huisje.dagen},prijsObjectClass.prototype.berekenFunc=function(){var e=0;switch(newBooking.huisje.huisje){case"Tent":e=5;break;case"Bungalow":e=10;break;case"Villa":e=15}this.kostenVolPerNacht=this.aantalVolwassenen*prijsVolwPerNacht,this.kostenKindPerNacht=this.aantalKinderen*prijsKindPerNAcht,this.kostenGastenPerNacht=this.kostenKindPerNacht+this.kostenVolPerNacht,this.kostenHuisjePerNacht=e,this.kostenTotaalPerNacht=this.kostenGastenPerNacht+this.kostenHuisjePerNacht,this.kostenTotaal=this.kostenTotaalPerNacht*this.aantalNachten};var nieweBerekening=new prijsObjectClass,printPrijsFunc=function(){newBooking.huisje&&0!=newBooking.huisje.dagen?"Kies uw type huisje"===newBooking.huisje.huisje?alert("Kies uw type huisje"):newBooking.gasten?(nieweBerekening.telFunc(),nieweBerekening.berekenFunc(),newBooking.addPrijsToBooking(),insertPrijs(newBooking.prijs)):alert("Voeg ook gasten toe"):alert("Geef aan hoeveel dagen u wilt overnachten")};
//# sourceMappingURL=samen.js.map
