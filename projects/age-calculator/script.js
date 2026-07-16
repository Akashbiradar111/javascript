function calculateAge() {

    let birthYear = Number(document.getElementById("birthYear").value);

    let currentYear = new Date().getFullYear();

    if (isNaN(birthYear)) {

        document.getElementById("result").innerHTML = "Invalid Year";
    }

    else if (birthYear <= 0) {

        document.getElementById("result").innerHTML = "Enter valid year";
    }

    else if (birthYear > currentYear) {

        document.getElementById("result").innerHTML = "Birth year cannot be in future";
    }

    else {

        let age = currentYear - birthYear;

        document.getElementById("result").innerHTML =
            "Your Age : " + age;
    }

}