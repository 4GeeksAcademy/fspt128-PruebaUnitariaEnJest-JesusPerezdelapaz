const { log } = require("console")

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromEuroToDollar = function(valueInEuro) {  
    if (valueInEuro <= 0){
        console.log('ingrese un número mayor a 0');
        return 0
    }
    const valueInDollar = valueInEuro * 1.07
    console.log(valueInEuro + ' Euros equivalen a: ' + valueInDollar + ' Dólares.');
    
    return valueInDollar;
}


const fromDollarToYen = (valueInDollar) =>{
    if (valueInDollar <= 0){
        console.log('ingrese un número mayor a 0');
        return 0
    }
    const dollarToEuro = valueInDollar / 1.07
    const euroToYen = dollarToEuro * 156.5
    console.log(valueInDollar + ' Dólares equivalen a: ' + euroToYen + ' Yenes.');

    return euroToYen;
}


const fromYenToPound = (valueInYen) => {
     if (valueInYen <= 0){
        console.log('ingrese un número mayor a 0');
        return 0
    }
    const YenToEuro = valueInYen / 156.5
    const EuroToPound = YenToEuro * 0.87

    console.log(valueInYen + ' Yenes equivalen a: ' + EuroToPound  + ' Pounds.');

    return EuroToPound 
}

fromEuroToDollar(15)
fromDollarToYen(25)
fromYenToPound(100)

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }