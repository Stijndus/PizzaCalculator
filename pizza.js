// Stijn Dusseldorp
// Software Developer

//De eerste pop up
alert("Welkom bij Azzip Pizza");

//De code voor de small pizza's
var amountSmall = prompt("Hoeveel small pizza's wilt u");

if(amountSmall < 0) //Dit zorgt ervoor dat je geen negatieve waardes in kan voeren, want als de variabele minder is dan 0 dan verandert hij de waarde naar 0
{
    amountSmall = 0
};

if(typeof amountSmall === 'string') // Dit stukje code zorgt ervoor dat je geen strings kan invoeren, want als je in string in voert dan verandert hij het weer naar 0
{
    amountSmall = 0
};

const priceSmall = 6.99; //Dit is de prijs van een small pizza

var totalSmall = (+amountSmall*priceSmall); //Dit berekent de totaal prijs van je small pizza's

const roundedSmall = Math.round(totalSmall * 1000)/1000; //Dit rond je prijs van je small pizza's af naar 2 decimalen

document.write("<h1>Small pizza's = €" + roundedSmall); //Dit laat je afgeronde prijs zien op de website

//De code voor de medium pizza's
var amountMedium = prompt("Hoeveel medium pizza's wilt u");

if(amountMedium < 0) //Dit zorgt ervoor dat je geen negatieve waardes in kan voeren, want als de variabele minder is dan 0 dan verandert hij de waarde naar 0
{
    amountMedium = 0
};

if(typeof amountMedium === 'string') // Dit stukje code zorgt ervoor dat je geen strings kan invoeren, want als je in string in voert dan verandert hij het weer naar 0
{
    amountMedium = 0
};

const priceMedium = 7.99; //Dit is de prijs van een medium pizza

var totalMedium = (+amountMedium*priceMedium); //Dit berekent de totaal prijs van je medium pizza's

const roundedMedium = Math.round(totalMedium * 1000)/1000; //Dit rond je totaal prijs van je medium pizza's af naar 2 decimalen 

document.write("<br><h1>Medium pizza's = €" + roundedMedium); //Dit laat je afgeronde prijs zien op de website

//De code voor de large pizza's
var amountLarge = prompt("Hoeveel Large pizza's wilt u");

if(amountLarge < 0) //Dit zorgt ervoor dat je geen negatieve waardes in kan voeren, want als de variabele minder is dan 0 dan verandert hij de waarde naar 0
{
    amountLarge = 0
};

if(typeof amountLarge === 'string') // Dit stukje code zorgt ervoor dat je geen strings kan invoeren, want als je in string in voert dan verandert hij het weer naar 0
{
    amountLarge = 0
};

const priceLarge = 8.99; //Dit is de prijs van een large pizza


var totalLarge = (+amountLarge*priceLarge); //Dit berekent de totaal prijs van je large pizza's

const roundedLarge = Math.round(totalLarge * 1000)/1000; //Dit rond je totaal prijs van je large pizza's af naar 2 decimalen

document.write("<br><h1>Large Pizza's = €" + roundedLarge); //Dit laat je afgeronde prijs zien op de website

//De code voor de totaal prijs
var total = (totalSmall+totalMedium+totalLarge); //Dit berekent je totaal prijs van alle pizza's

const roundedTotal = Math.round(total * 1000)/1000; //Dit rond je totaal van alle pizza's af naar 2 decimalen

document.write("<br><h1>Total = €" + roundedTotal); //Dit laat je totaal van alle pizza's zien op de website
