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
    let valueInDollar = valueInEuro * 1.07;
    let DollarFixed = valueInDollar.toFixed(2)
    console.log(valueInEuro + ' Euros equivalen a: ' + DollarFixed + ' Dólares.');
    
    return DollarFixed;
}


const fromDollarToYen = (valueInDollar) =>{
    let dollarToEuro = valueInDollar * 0.93
    let euroToYen = dollarToEuro * 156.5
    let YenFixed = euroToYen.toFixed(2)
    console.log(valueInDollar + ' Dólares equivalen a: ' + YenFixed + ' Yenes.');

    return YenFixed;
}


const fromYenToPound = (valueInYen) => {
    let YenToEuro = valueInYen * 0.0063897
    let EuroToPound = YenToEuro * 0.87
    let PoundsFixed = EuroToPound.toFixed(2)
    console.log(valueInYen + ' Yenes equivalen a: ' + PoundsFixed + ' Pounds.');

    return PoundsFixed
}

fromEuroToDollar(1)
fromDollarToYen(1)
fromYenToPound(1000)

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }