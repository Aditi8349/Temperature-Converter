
const inputTemperature = document.getElementById('inputTemperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convertButton');
const resultElement = document.getElementById('result');


convertButton.addEventListener('click', () => {
    
    const temperature = parseFloat(inputTemperature.value);
    const unit = unitSelect.value;

    
    if (isNaN(temperature)) {
        resultElement.textContent = 'Please enter a valid number.';
    } else {
       
        let result;
        if (unit === 'celsius') {
           
            result = (temperature * 9/5) + 32;
            resultElement.textContent = `${temperature}°C is equal to ${result.toFixed(2)}°F`;
        } else if (unit === 'fahrenheit') {
            
            result = (temperature - 32) * 5/9;
            resultElement.textContent = `${temperature}°F is equal to ${result.toFixed(2)}°C`;
        }
    }
});
