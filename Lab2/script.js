function convertTemperature() {
    let temp = parseFloat(document.getElementById('temperature').value);
    let unit = document.getElementById('unit').value;
    let result;

    if (isNaN(temp)) {
        document.getElementById('result').innerHTML = 'Please enter a valid number';
        return;
    }

    if (unit === 'C') {
        result = (temp * 9/5) + 32;
        document.getElementById('result').innerHTML = `${temp}°C is ${result.toFixed(2)}°F`;
    } else {
        result = (temp - 32) * 5/9;
        document.getElementById('result').innerHTML = `${temp}°F is ${result.toFixed(2)}°C`;
    }
}
