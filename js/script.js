function convertTemperature() {
    var celsius = parseFloat(document.getElementById("suhu").value);
    var fahrenheit = 0;
    if (isNaN(celsius)) {
        var err = "Masukkan angka yang valid!";
        document.getElementById("result").innerHTML = err;
        return;
    }
    else if (document.getElementById("toFahrenheit").checked) {
        fahrenheit = (celsius * 9/5) + 32;
    } 
    else if (document.getElementById("toCelsius").checked) {
        fahrenheit = (celsius - 32) * 5/9;
    }
    document.getElementById("result").innerHTML = fahrenheit.toFixed(2);
}

function resetForm() {
    document.getElementById("suhu").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("toFahrenheit").checked = true;
    document.getElementById("toCelsius").checked = false;
}