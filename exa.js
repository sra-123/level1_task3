let fahrenheit = document.getElementById('fahrenheit');
let celsius = document.getElementById('celsius');
            
fahrenheit.oninput = ()=> {
    let c = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(c.toFixed(2));
    let k = (parseFloat(fahrenheit.value) - 32) * 5 / 9 + 273.15;
    kelvin.value = parseFloat(k.toFixed(2));
};