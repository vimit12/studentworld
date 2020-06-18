function onlyNumberKeyFB1(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46 || ASCIICode == 45) {
        document.getElementById("error_msgFB1").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgFB1").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}
function onlyNumberKeyFB2(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46 || ASCIICode == 45) {
        document.getElementById("error_msgFB2").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgFB2").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}
function onlyNumberKeyArea(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46 || ASCIICode == 45) {
        document.getElementById("error_msgArea1").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgArea1").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function force_buoyant() {
    var f = document.getElementById('force_pressure').value;
    var p = document.getElementById('pressure').value;
    var a = document.getElementById('force_area').value;

    if (f && p && a) {
        document.getElementById("error_msgFB1").innerHTML = "Please provide only 2 Inputs";
    } else if (f == '' && p == '' && a == '') {
        document.getElementById("error_msgFB1").innerHTML = "Please provide any 2 Inputs";
    } else if (f && p) {
        let result = f/p;
        document.getElementById('force_area').value = result;
        document.getElementById('force_area').style.background = '#d9ffde';
        document.getElementById('force_area').style.color = 'black';
        document.getElementById("error_msgFB1").innerHTML = '';
    } else if (p && a) {
        let result = p*a;
        document.getElementById('force_pressure').value = result;
        document.getElementById('force_pressure').style.background = '#d9ffde';
        document.getElementById('force_pressure').style.color = 'black';
        document.getElementById("error_msgFB1").innerHTML = '';
    } else if (f && a) {
        let result = f/a;
        document.getElementById('pressure').value = result;
        document.getElementById('pressure').style.background = '#d9ffde';
        document.getElementById('pressure').style.color = 'black';
        document.getElementById("error_msgFB1").innerHTML = '';
    } 
}

function force_buoyant1() {
    var f = document.getElementById('force_buoyant').value;
    var h2 = document.getElementById('height2_buoyant').value;
    var h1 = document.getElementById('height1_buoyant').value;
    var d = document.getElementById('density_buoyant').value;
    var a = document.getElementById('acceleration_buoyant').value;

    if (f && h2 && a && h1 && d) {
        document.getElementById("error_msgFB2").innerHTML = "Please provide only 4 Inputs";
    } else if (f == '' && h2 == '' && a == '' && h1 == '' && d == '') {
        document.getElementById("error_msgFB2").innerHTML = "Please provide any 4 Inputs";
    } else if (h2 && a && h1 && d) {
        let result = h2 * d * a - h1 * d * a;
        document.getElementById('force_buoyant').value = result;
        document.getElementById('force_buoyant').style.background = '#d9ffde';
        document.getElementById('force_buoyant').style.color = 'black';
        document.getElementById("error_msgFB2").innerHTML = '';
    } else if (f && a && h1 && d) {
        let result = (f + h1 * d * a)/(d * a);
        document.getElementById('height2_buoyant').value = result;
        document.getElementById('height2_buoyant').style.background = '#d9ffde';
        document.getElementById('height2_buoyant').style.color = 'black';
        document.getElementById("error_msgFB2").innerHTML = '';
    } else if (f && a && h2 && d) {
        let result = (h2 * d * a - f)/(d * a);
        document.getElementById('height1_buoyant').value = result;
        document.getElementById('height1_buoyant').style.background = '#d9ffde';
        document.getElementById('height1_buoyant').style.color = 'black';
        document.getElementById("error_msgFB2").innerHTML = '';
    }
    else if (f && h1 && h2 && d) {
        let result = f/((h2-h1)*d);
        document.getElementById('acceleration_buoyant').value = result;
        document.getElementById('acceleration_buoyant').style.background = '#d9ffde';
        document.getElementById('acceleration_buoyant').style.color = 'black';
        document.getElementById("error_msgFB2").innerHTML = '';
    }
    else if (f && h1 && h2 && a) {
        let result = f / ((h2 - h1) * a);
        document.getElementById('density_buoyant').value = result;
        document.getElementById('density_buoyant').style.background = '#d9ffde';
        document.getElementById('density_buoyant').style.color = 'black';
        document.getElementById("error_msgFB2").innerHTML = '';
    }
}

function swap_area() {
    var fromInput = document.getElementById("fromArea").value;
    var toInput = document.getElementById("toArea").value;
    document.getElementById("fromArea").value = toInput;
    document.getElementById("toArea").value = fromInput;
}

function areaConversion() {
    var inputQuantity = document.getElementById('quantityarea').value;
    var fromInput = document.getElementById("fromArea").value;
    var toInput = document.getElementById("toArea").value;

    if (inputQuantity == "" || fromInput == toInput) {
        document.getElementById("error_msgArea1").innerHTML = "Please provide any value";
        document.getElementById("error_msgArea2").innerHTML = "To and from field can't be same";
        document.getElementById("error_msgArea3").innerHTML = "To and from field can't be same";
        return;
    }

    // area m² to all
    //***************************************************************************************
    if (fromInput == 'm' && toInput == 'cm') {
        let result = (inputQuantity * 10000).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} cm²`;
    } else if (fromInput == 'cm' && toInput == 'm') {
        let result = (inputQuantity / 10000).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} m²`;
    }

    if (fromInput == 'm' && toInput == 'km') {
        let result = (inputQuantity * 0.000001).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} km²`;
    } else if (fromInput == 'km' && toInput == 'm') {
        let result = (inputQuantity / 0.000001).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} m²`;
    }

    if (fromInput == 'm' && toInput == 'hec') {
        let result = (inputQuantity * 0.0001).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} hectare`;
    } else if (fromInput == 'hec' && toInput == 'm') {
        let result = (inputQuantity / 0.0001).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} m²`;
    }

    if (fromInput == 'm' && toInput == 'ac') {
        let result = (inputQuantity * 0.0002471054).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} acre`;
    } else if (fromInput == 'ac' && toInput == 'm') {
        let result = (inputQuantity / 0.0002471054).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} m²`;
    }

    if (fromInput == 'm' && toInput == 'ft') {
        let result = (inputQuantity * 10.763910417).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} ft²`;
    } else if (fromInput == 'ft' && toInput == 'm') {
        let result = (inputQuantity / 10.763910417).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} m²`;
    }

    if (fromInput == 'm' && toInput == 'in') {
        let result = (inputQuantity * 1550.0031).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} in²`;
    } else if (fromInput == 'in' && toInput == 'm') {
        let result = (inputQuantity / 1550.0031).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} m²`;
    }


    // area cm² to all
    //***************************************************************************************

    if (fromInput == 'cm' && toInput == 'km') {
         document.getElementById("success_msgArea").innerHTML = ` Too small value to convert`;
    } else if (fromInput == 'km' && toInput == 'cm') {
         let result = (inputQuantity * 10000000000).toFixed(5);
         document.getElementById("success_msgArea").innerHTML = ` ${result} cm²`;
    }

    if (fromInput == 'cm' && toInput == 'hec') {
         document.getElementById("success_msgArea").innerHTML = ` Too small value to convert`;
    } else if (fromInput == 'hec' && toInput == 'cm') {
        let result = (inputQuantity * 100000000).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} cm²`;
    }

    if (fromInput == 'cm' && toInput == 'ac') {
        document.getElementById("success_msgArea").innerHTML = ` Too small value to convert`;
    } else if (fromInput == 'ac' && toInput == 'cm') {
       let result = (inputQuantity * 40468564.224).toFixed(5);
       document.getElementById("success_msgArea").innerHTML = ` ${result} cm²`;
    }

    if (fromInput == 'cm' && toInput == 'ft') {
        let result = (inputQuantity * 0.001076391).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} ft²`;
    } else if (fromInput == 'ft' && toInput == 'cm') {
        let result = (inputQuantity / 0.001076391).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} cm²`;
    }

    if (fromInput == 'cm' && toInput == 'in') {
        let result = (inputQuantity * 0.15500031).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} in²`;
    } else if (fromInput == 'in' && toInput == 'cm') {
        let result = (inputQuantity / 0.15500031).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} cm²`;
    }


    // area km² to all
    //***************************************************************************************

    if (fromInput == 'km' && toInput == 'hec') {
        let result = (inputQuantity * 100).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} hectare`;
    } else if (fromInput == 'hec' && toInput == 'km') {
        let result = (inputQuantity / 100).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} km²`;
    }

    if (fromInput == 'km' && toInput == 'ac') {
        let result = (inputQuantity * 247.10538147).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} acre`;
    } else if (fromInput == 'ac' && toInput == 'km') {
        let result = (inputQuantity / 247.10538147).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} km²`;
    }

    if (fromInput == 'km' && toInput == 'ft') {
        let result = (inputQuantity * 10763910.417).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} ft²`;
    } else if (fromInput == 'ft' && toInput == 'km') {
        let result = (inputQuantity / 10763910.417).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} km²`;
    }

    if (fromInput == 'km' && toInput == 'in') {
        let result = (inputQuantity * 1550003100).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} in²`;
    } else if (fromInput == 'in' && toInput == 'km') {
        let result = (inputQuantity / 1550003100).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} km²`;
    }

    // area hectare to all
    //***************************************************************************************

    if (fromInput == 'hec' && toInput == 'ac') {
        let result = (inputQuantity * 2.4710538147).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} acre`;
    } else if (fromInput == 'ac' && toInput == 'hec') {
        let result = (inputQuantity / 2.4710538147).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} hectare`;
    }

    if (fromInput == 'hec' && toInput == 'ft') {
        let result = (inputQuantity * 107639.10417).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} ft²`;
    } else if (fromInput == 'ft' && toInput == 'hec') {
        let result = (inputQuantity / 107639.10417).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} hectare`;
    }

    if (fromInput == 'hec' && toInput == 'in') {
        let result = (inputQuantity * 15500031).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} in²`;
    } else if (fromInput == 'in' && toInput == 'hec') {
        let result = (inputQuantity / 15500031).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} hectare`;
    }


    // area acre to all
    //***************************************************************************************

    if (fromInput == 'ac' && toInput == 'ft') {
        let result = (inputQuantity * 43560).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} ft²`;
    } else if (fromInput == 'ft' && toInput == 'ac') {
        let result = (inputQuantity / 43560).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} acre`;
    }

    if (fromInput == 'ac' && toInput == 'in') {
        let result = (inputQuantity * 6272640).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} in²`;
    } else if (fromInput == 'in' && toInput == 'ac') {
        let result = (inputQuantity / 6272640).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} acre`;
    }


    // area ft to all
    //***************************************************************************************

    if (fromInput == 'ft' && toInput == 'in') {
        let result = (inputQuantity * 144).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} in²`;
    } else if (fromInput == 'in' && toInput == 'ft') {
        let result = (inputQuantity / 144).toFixed(5);
        document.getElementById("success_msgArea").innerHTML = ` ${result} ft²`;
    }



}