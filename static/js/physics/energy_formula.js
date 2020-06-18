function onlyNumberKeyk1(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg1KE").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg1KE").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}
function onlyNumberKeyp1(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg1PE").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg1PE").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}
function onlyNumberKeyr1(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg1RE").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg1RE").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function formula1_caluclate() {
    var e = document.getElementById('recipient-energy').value;
    var m = document.getElementById('recipient-mass').value;
    var v = document.getElementById('recipient-velocity').value;

    if (v && m && e) {
        document.getElementById("error_msg1KE").innerHTML = "Please provide on 2 Inputs";
    } else if (m == '' && v == '' && e == '') {
        document.getElementById("error_msg1KE").innerHTML = "Please provide any 2 Inputs";
    } else if (m && v) {
        let result = 0.5*m*Math.pow(v,2);
        document.getElementById('recipient-energy').value = result;
        document.getElementById('recipient-energy').style.background = '#d9ffde';
        document.getElementById('recipient-energy').style.color = 'black';
        document.getElementById("error_msg1KE").innerHTML = '';
    } else if (e && m) {
        let result = Math.sqrt(2*e/m);
        document.getElementById('recipient-velocity').value = result;
        document.getElementById('recipient-velocity').style.background = '#d9ffde';
        document.getElementById('recipient-velocity').style.color = 'black';
        document.getElementById("error_msg1KE").innerHTML = '';
    } else if (v && e) {
        let result = 2*e/Math.pow(v,2);
        document.getElementById('recipient-mass').value = result;
        document.getElementById('recipient-mass').style.background = '#d9ffde';
        document.getElementById('recipient-mass').style.color = 'black';
        document.getElementById("error_msg1KE").innerHTML = '';
    } 
}

function formula2_caluclate() {
    var e = document.getElementById('recipient-potential').value;
    var m = document.getElementById('recipient-massp').value;
    var a = document.getElementById('recipient-accelerationp').value;
    var h = document.getElementById('recipient-height').value;

    if (e && m && a && h) {
        document.getElementById("error_msg1PE").innerHTML = "Please provide on 2 Inputs";
    } else if (m == '' && a == '' && e == '' && h == '') {
        document.getElementById("error_msg1PE").innerHTML = "Please provide any 2 Inputs";
    } else if (m && a && h) {
        let result = m*a*h;
        document.getElementById('recipient-potential').value = result;
        document.getElementById('recipient-potential').style.background = '#d9ffde';
        document.getElementById('recipient-potential').style.color = 'black';
        document.getElementById("error_msg1PE").innerHTML = '';
    } else if (e && a && h) {
        let result = e/(a*h);
        document.getElementById('recipient-massp').value = result;
        document.getElementById('recipient-massp').style.background = '#d9ffde';
        document.getElementById('recipient-massp').style.color = 'black';
        document.getElementById("error_msg1PE").innerHTML = '';
    } else if (e && m && h) {
        let result = e / (m * h);
        document.getElementById('recipient-accelerationp').value = result;
        document.getElementById('recipient-accelerationp').style.background = '#d9ffde';
        document.getElementById('recipient-accelerationp').style.color = 'black';
        document.getElementById("error_msg1PE").innerHTML = '';
    } else if (e && m && a) {
        let result = e / (m * a);
        document.getElementById('recipient-height').value = result;
        document.getElementById('recipient-height').style.background = '#d9ffde';
        document.getElementById('recipient-height').style.color = 'black';
        document.getElementById("error_msg1PE").innerHTML = '';
    }
}

function formula3_caluclate() {
    var m = document.getElementById('rest-mass').value;

    if (m == ''){
        document.getElementById("error_msg1RE").innerHTML = "Please Enter Mass, and it must be in Kilogram";
    } else {
        let result = m * 299792458;
        document.getElementById('rest-energy').value = result+" Joule";
        document.getElementById('recipient-potential').style.background = '#d9ffde';
        document.getElementById('recipient-potential').style.color = 'black';
        document.getElementById("error_msg1RE").innerHTML = '';
    }
}