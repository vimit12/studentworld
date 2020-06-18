function onlyNumberKeySP1(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgSP1").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgSP1").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}
function onlyNumberKeyLT2(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgLT1").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgLT1").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}
function onlyNumberKey_temp(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46 || ASCIICode == 45) {
        document.getElementById("error_msgT1").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgT1").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}
function onlyNumberKey1(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46 || ASCIICode == 45) {
        document.getElementById("error_msgr1").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgr1").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function swap_temp() {
    var fromInput = document.getElementById("fromtemp").value;
    var toInput = document.getElementById("totemp").value;
    document.getElementById("fromtemp").value = toInput;
    document.getElementById("totemp").value = fromInput;
}

function formula1_caluclate() {
    var q = document.getElementById('SP_Heat').value;
    var m = document.getElementById('SP_Mass').value;
    var c = document.getElementById('SP_C').value;
    var t = document.getElementById('SP_Temp').value;

    if (q && m && c && t) {
        document.getElementById("error_msgSP1").innerHTML = "Please provide on 3 Inputs";
    } else if (q == '' && m == '' && c == '' && t == '') {
        document.getElementById("error_msgSP1").innerHTML = "Please provide any 3 Inputs";
    } else if (q && m && c) {
        let result = q/(m * c);
        document.getElementById('SP_Temp').value = result;
        document.getElementById('SP_Temp').style.background = '#d9ffde';
        document.getElementById('SP_Temp').style.color = 'black';
        document.getElementById("error_msgSP1").innerHTML = '';
    } else if (q && m && t) {
        let result = q / (m * t);
        document.getElementById('SP_C').value = result;
        document.getElementById('SP_C').style.background = '#d9ffde';
        document.getElementById('SP_C').style.color = 'black';
        document.getElementById("error_msgSP1").innerHTML = '';
    } else if (q && c && t) {
        let result = q / (c * t);
        document.getElementById('SP_Mass').value = result;
        document.getElementById('SP_Mass').style.background = '#d9ffde';
        document.getElementById('SP_Mass').style.color = 'black';
        document.getElementById("error_msgSP1").innerHTML = '';
    } else if (m && c && t) {
        let result = m * c * t;
        document.getElementById('SP_Heat').value = result;
        document.getElementById('SP_Heat').style.background = '#d9ffde';
        document.getElementById('SP_Heat').style.color = 'black';
        document.getElementById("error_msgSP1").innerHTML = '';
    }
}

function formula2_caluclate() {
    var q = document.getElementById('LT_Heat').value;
    var m = document.getElementById('LT_Mass').value;
    var l = document.getElementById('LT_L').value;

    if (q && m && l) {
        document.getElementById("error_msgLT1").innerHTML = "Please provide on 3 Inputs";
    } else if (q == '' && m == '' && l == '') {
        document.getElementById("error_msgLT1").innerHTML = "Please provide any 3 Inputs";
    } else if (q && m) {
        let result = q / m;
        document.getElementById('LT_L').value = result;
        document.getElementById('LT_L').style.background = '#d9ffde';
        document.getElementById('LT_L').style.color = 'black';
        document.getElementById("error_msgLT1").innerHTML = '';
    } else if (q && l) {
        let result = q / l;
        document.getElementById('LT_Mass').value = result;
        document.getElementById('LT_Mass').style.background = '#d9ffde';
        document.getElementById('LT_Mass').style.color = 'black';
        document.getElementById("error_msgLT1").innerHTML = '';
    } else if (m && l) {
        let result = m * l;
        document.getElementById('LT_Heat').value = result;
        document.getElementById('LT_Heat').style.background = '#d9ffde';
        document.getElementById('LT_Heat').style.color = 'black';
        document.getElementById("error_msgLT1").innerHTML = '';
    } 
}

function temperatureCovertor() {
    var inputQuantity = document.getElementById('temp_quantity').value;
    var fromInput = document.getElementById("fromtemp").value;
    var toInput = document.getElementById("totemp").value;

    if (inputQuantity == "" || fromInput == toInput) {
        document.getElementById("error_msgT1").innerHTML = "Please provide any value";
        document.getElementById("error_msgT2").innerHTML = "To and from field can't be same";
        document.getElementById("error_msgT3").innerHTML = "To and from field can't be same";
        return;
    }

    // temperature celsius to all
    //***************************************************************************************
    if (fromInput == 'c' && toInput == 'f') {
        if (inputQuantity < -273.15){
            document.getElementById("success_msgT1").innerHTML ="";
            document.getElementById("error_msgT4").innerHTML = ` Celsius Value is beyond permissible limit`;
        }else{
            let result = (inputQuantity * (9/5))+32;
            document.getElementById("error_msgT4").innerHTML = "";
            document.getElementById("success_msgT1").innerHTML = ` ${result} °F`;
        }
    } else if (fromInput == 'f' && toInput == 'c') {
        if (inputQuantity < -459.67) {
            document.getElementById("success_msgT1").innerHTML = "";
            document.getElementById("error_msgT4").innerHTML = ` Fahrenheit Value is beyond permissible limit`;
        } else {
            let result = (inputQuantity - 32) * (5 / 9);
            document.getElementById("error_msgT4").innerHTML = "";
            document.getElementById("success_msgT1").innerHTML = ` ${result} °C`;
        }
    }

    if (fromInput == 'c' && toInput == 'k') {
        if (inputQuantity < -273.15) {
            document.getElementById("success_msgT1").innerHTML = "";
            document.getElementById("error_msgT4").innerHTML = ` Celsius Value is beyond permissible limit`;
        } else {
            let result = eval(inputQuantity) + eval(273.15);
            document.getElementById("error_msgT4").innerHTML = "";
            document.getElementById("success_msgT1").innerHTML = ` ${result} K`;
        }
    } else if (fromInput == 'k' && toInput == 'c') {
        if (inputQuantity < 0) {
            document.getElementById("success_msgT1").innerHTML = "";
            document.getElementById("error_msgT4").innerHTML = ` Kelvin Value is beyond permissible limit`;
        } else {
            let result = eval(inputQuantity) - eval(273.15);
            document.getElementById("error_msgT4").innerHTML = "";
            document.getElementById("success_msgT1").innerHTML = ` ${result} °C`;
        }
    }

    // temperature Fahrenheit to all
    //***************************************************************************************

    if (fromInput == 'f' && toInput == 'k') {
        if (inputQuantity < -459.67) {
            document.getElementById("success_msgT1").innerHTML = "";
            document.getElementById("error_msgT4").innerHTML = ` Fahrenheit Value is beyond permissible limit`;
        } else {
            let result = (inputQuantity + 459.67)* (5 / 9);
            document.getElementById("error_msgT4").innerHTML = "";
            document.getElementById("success_msgT1").innerHTML = ` ${result} K`;
        }
    } else if (fromInput == 'k' && toInput == 'f') {
        if (inputQuantity < 0) {
            document.getElementById("success_msgT1").innerHTML = "";
            document.getElementById("error_msgT4").innerHTML = ` Kelvin Value is beyond permissible limit`;
        } else {
            let result = (inputQuantity * (9 / 5)) - 459.67;
            document.getElementById("error_msgT4").innerHTML = "";
            document.getElementById("success_msgT1").innerHTML = ` ${result} °F`;
        }
    }
}

function refraction() {
    var q1 = document.getElementById('thetha1').value;
    var q2 = document.getElementById('thetha2').value;
    var n1 = document.getElementById('index1').value;
    var n2 = document.getElementById('index2').value;

    if (q1 && q2 && n1 && n2) {
        document.getElementById("error_msgr1").innerHTML = "Please provide on 3 Inputs";
    } else if (q1 == '' && q2 == '' && n1 == '' && n2 == '') {
        document.getElementById("error_msgr1").innerHTML = "Please provide any 3 Inputs";
    } else if (q1 && q2 && n1) {
        let result = (Math.sin(q1) * n1)/Math.sin(q2);
        document.getElementById('index2').value = result;
        document.getElementById('index2').style.background = '#d9ffde';
        document.getElementById('index2').style.color = 'black';
        document.getElementById("error_msgr1").innerHTML = '';
    } else if (q1 && q2 && n2) {
        let result = (Math.sin(q2) * n2) / Math.sin(q1);
        document.getElementById('index1').value = result;
        document.getElementById('index1').style.background = '#d9ffde';
        document.getElementById('index1').style.color = 'black';
        document.getElementById("error_msgr1").innerHTML = '';
    } else if (q1 && n1 && n2) {
        let result = (Math.sin(q1) * n1) / n2;
        document.getElementById('thetha2').value = result;
        document.getElementById('thetha2').style.background = '#d9ffde';
        document.getElementById('thetha2').style.color = 'black';
        document.getElementById("error_msgr1").innerHTML = '';
    } else if (q2 && n1 && n2) {
        let result = (Math.sin(q2) * n2) / n1;
        document.getElementById('thetha1').value = result;
        document.getElementById('thetha1').style.background = '#d9ffde';
        document.getElementById('thetha1').style.color = 'black';
        document.getElementById("error_msgr1").innerHTML = '';
    }
}