//the forecast is kelvin.
const kelvin = 0;
//celsius will be 273 degrees less than kelvin.
let celsius = kelvin - 273;
//calculate fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
//round fahrenheit down to whole number
fahrenheit = Math.floor(fahrenheit);

console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');