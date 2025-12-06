// Importar la función sum del archivo app.js
const { sum } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


test("ten euros should be 10.700000000000001 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;
    

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expected ); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test ("10 dollars equals 1462.6168224299065 Yens", () => {
    const { fromDollarToYen } = require('./app.js');
    
    const divided = 10 / 1.07
    const expected = divided * 156.5
    expect(fromDollarToYen(10)).toBeCloseTo(expected);
})



test ('100 Yenes equals to 0.5559105431309904 pounds', () => {
   const { fromYenToPound } = require('./app.js');
   const divided = 100 / 156.5
   const expected = divided * 0.87
   expect(fromYenToPound(100)).toBe(expected);
})


test ('Dont convert negative numbers', () =>{
    const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');
    expect(fromEuroToDollar(-1)).toBe(0);
    expect(fromDollarToYen(-1)).toBe(0);
    expect(fromYenToPound(-1)).toBe(0);
})