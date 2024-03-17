// Include api for currency change
const api = "https://api.exchangerate-api.com/v4/latest/USD";

// For selecting different controls
let search = document.querySelector(".searchBox");
let convert = document.querySelector(".convert");
let fromCurrecy = document.querySelector(".from");
let toCurrecy = document.querySelector(".to");
let finalValue = document.querySelector(".finalValue");
let finalAmount = document.getElementById("finalAmount");
let select1 = document.querySelector('#sel1');
let select2 =document.querySelector('#sel2');

let resultFrom;
let resultTo;
let searchValue;
let toCurrecyValue = toCurrecy.value;
    let fromCurrecyValue = fromCurrecy.value;
reset();
 function converter(){
   getValueFromInput();
   getExhangeRate();
}


function getValueFromInput(){
    fromCurrecyValue = fromCurrecy.value;
    toCurrecyValue = toCurrecy.value;
    searchValue = search.value;
    console.log(searchValue)
        console.log(`${toCurrecyValue} and ${fromCurrecyValue}`)
}
async function getExhangeRate(){
    // fetch data from api 
    const data = await fetch(`${api}`);
    const response = await data.json();

    // conversion code (calculatio part) 
    let rates = response.rates;
    const exchangeRateOfToCurrencyValue = rates[toCurrecyValue];
    const exchangeRateOfFromcurrencyValue = rates[fromCurrecyValue];
    const conversionFactor =  exchangeRateOfToCurrencyValue/ exchangeRateOfFromcurrencyValue;
    finalAmount = ((conversionFactor * searchValue)).toFixed(2);
    finalValue.innerHTML = `${finalAmount} ${toCurrecyValue}`;
}

function reset(){
  select1.selectedIndex = 39;
  select2.selectedIndex = 1;
  search.value = '0.00'
}
