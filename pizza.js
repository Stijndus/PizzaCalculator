// Stijn Dusseldorp
// Software Developer

//De eerste pop up
alert("Welkom bij Azzip Pizza Bij een bestelling van 50 gratis bezorging");

//De code voor de small pizza's
var amountSmall = prompt("Hoeveel small pizza's wilt u");

Number(amountSmall);

if (amountSmall < 0) {
    amountSmall = 0
};

if (isNaN(amountSmall)) {
    amountSmall = 0
};

const priceSmall = 6.99;

var totalSmall = (amountSmall * priceSmall);

const roundedSmall = Math.round(totalSmall * 1000) / 1000;

document.write("<h1>" + amountSmall + "x Small pizza's = €" + roundedSmall);

//De code voor de medium pizza's
var amountMedium = prompt("Hoeveel medium pizza's wilt u");

Number(amountMedium);

if (amountMedium < 0) {
    amountMedium = 0
};

if (isNaN(amountMedium)) {
    amountMedium = 0
};

const priceMedium = 7.99;

var totalMedium = (+amountMedium * priceMedium);

const roundedMedium = Math.round(totalMedium * 1000) / 1000;

document.write("<br><h1>" + amountMedium + "x Medium pizza's = €" + roundedMedium);

//De code voor de large pizza's
var amountLarge = prompt("Hoeveel Large pizza's wilt u");

Number(amountLarge);

if (amountLarge < 0) {
    amountLarge = 0
};

if (isNaN(amountLarge)) {
    amountLarge = 0
};

const priceLarge = 8.99;

var totalLarge = (+amountLarge * priceLarge);

const roundedLarge = Math.round(totalLarge * 1000) / 1000;

document.write("<br><h1>" + amountLarge + "x Large Pizza's = €" + roundedLarge);

//De code voor de totaal prijs
var total = (totalSmall + totalMedium + totalLarge);

const delivery = 13;
if(total < 50) {
    total = total + delivery
}

var roundedTotal = Math.round(total * 1000) / 1000;

document.write("<br><h1>Totaal = " + roundedTotal);
