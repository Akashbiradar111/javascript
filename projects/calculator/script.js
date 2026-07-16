function calculate() {

    let num1 = Number(document.getElementById("num1").value);

    let num2 = Number(document.getElementById("num2").value);

    let operation = document.getElementById("operation").value;

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Enter valid numbers";
        return;
    }

    let result;

    switch (operation) {

        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":

            if (num2 === 0) {
                document.getElementById("result").innerHTML = "Division by zero is not allowed";
                return;
            }

            result = num1 / num2;
            break;
    }

    document.getElementById("result").innerHTML = "Result : " + result;

}