function celsiusToFahrenheit(celsius){

    return (celsius * 9) / 5 + 32;

}

function fahrenheitToCelsius(fahrenheit){

    return (fahrenheit - 32) * 5 / 9;

}

function convertTemperature(){

    let temperature =
    Number(document.getElementById("temperature").value);

    let choice =
    document.getElementById("choice").value;

    if(isNaN(temperature)){

        document.getElementById("result").innerHTML =
        "Invalid Temperature";

    }

    else if(choice=="CtoF"){

        let result =
        celsiusToFahrenheit(temperature);

        document.getElementById("result").innerHTML =
        "Result : " + result + " °F";

    }

    else{

        let result =
        fahrenheitToCelsius(temperature);

        document.getElementById("result").innerHTML =
        "Result : " + result + " °C";

    }

}