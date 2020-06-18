function onlyNumberKeyMP1(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgMP1").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgMP1").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function onlyNumberKeyMP2(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgMP2").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgMP2").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function onlyNumberKeyEP3(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgEP3").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgEP3").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function onlyNumberKeyRE3(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgRE3").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgRE3").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function onlyNumberKeyHP4(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgHP4").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgHP4").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function formula1_caluclate() {
    var w = document.getElementById('recipient-work').value;
    var f = document.getElementById('recipient-force').value;
    var d = document.getElementById('recipient-displacementMP').value;

    if (w && f && d) {
        document.getElementById("error_msgMP1").innerHTML = "Please provide on 2 Inputs";
    } else if (w == '' && f == '' && d == '') {
        document.getElementById("error_msgMP1").innerHTML = "Please provide any 2 Inputs";
    } else if (w && f) {
        let result = w/f;
        document.getElementById('recipient-displacementMP').value = result;
        document.getElementById('recipient-displacementMP').style.background = '#d9ffde';
        document.getElementById('recipient-displacementMP').style.color = 'black';
        document.getElementById("error_msgMP1").innerHTML = '';
    } else if (w && d) {
        let result = w/d;
        document.getElementById('recipient-force').value = result;
        document.getElementById('recipient-force').style.background = '#d9ffde';
        document.getElementById('recipient-force').style.color = 'black';
        document.getElementById("error_msgMP1").innerHTML = '';
    } else if (f && x) {
        let result = f*x;
        document.getElementById('recipient-work').value = result;
        document.getElementById('recipient-work').style.background = '#d9ffde';
        document.getElementById('recipient-work').style.color = 'black';
        document.getElementById("error_msgMP1").innerHTML = '';
    }
}

function formula2_caluclate() {
    var p = document.getElementById('recipient-power2').value;
    var f = document.getElementById('recipient-force2').value;
    var v = document.getElementById('recipient-velocity2').value;

    if (p && f && v) {
        document.getElementById("error_msgMP2").innerHTML = "Please provide on 2 Inputs";
    } else if (p == '' && f == '' && v == '') {
        document.getElementById("error_msgMP2").innerHTML = "Please provide any 2 Inputs";
    } else if (p && f) {
        let result = p / f;
        document.getElementById('recipient-velocity2').value = result;
        document.getElementById('recipient-velocity2').style.background = '#d9ffde';
        document.getElementById('recipient-velocity2').style.color = 'black';
        document.getElementById("error_msgMP2").innerHTML = '';
    } else if (p && v) {
        let result = p / v;
        document.getElementById('recipient-force2').value = result;
        document.getElementById('recipient-force2').style.background = '#d9ffde';
        document.getElementById('recipient-force2').style.color = 'black';
        document.getElementById("error_msgMP2").innerHTML = '';
    } else if (f && v) {
        let result = f * v;
        document.getElementById('recipient-power2').value = result;
        document.getElementById('recipient-power2').style.background = '#d9ffde';
        document.getElementById('recipient-power2').style.color = 'black';
        document.getElementById("error_msgMP2").innerHTML = '';
    }
}

function formula3_caluclate() {
    var p = document.getElementById('power').value;
    var i = document.getElementById('current').value;
    var v = document.getElementById('pvolt').value;

    if (p && i && v) {
        document.getElementById("error_msgEP3").innerHTML = "Please provide on 2 Inputs";
    } else if (p == '' && i == '' && v == '') {
        document.getElementById("error_msgEP3").innerHTML = "Please provide any 2 Inputs";
    } else if (p && i) {
        let result = p / i;
        document.getElementById('pvolt').value = result;
        document.getElementById('pvolt').style.background = '#d9ffde';
        document.getElementById('pvolt').style.color = 'black';
        document.getElementById("error_msgEP3").innerHTML = '';
    } else if (p && v) {
        let result = p / v;
        document.getElementById('current').value = result;
        document.getElementById('current').style.background = '#d9ffde';
        document.getElementById('current').style.color = 'black';
        document.getElementById("error_msgEP3").innerHTML = '';
    } else if (i && v) {
        let result = i * v;
        document.getElementById('power').value = result;
        document.getElementById('power').style.background = '#d9ffde';
        document.getElementById('power').style.color = 'black';
        document.getElementById("error_msgEP3").innerHTML = '';
    }
}

function formula4_caluclate() {
    var p = document.getElementById('radiant-power').value;
    var i = document.getElementById('radiant-current').value;
    var r = document.getElementById('radiant-radius').value;

    if (p && i && r) {
        document.getElementById("error_msgRE3").innerHTML = "Please provide on 2 Inputs";
    } else if (p == '' && i == '' && r == '') {
        document.getElementById("error_msgRE3").innerHTML = "Please provide any 2 Inputs";
    } else if (p && i) {
        let result = Math.sqrt(p / (4* Math.PI *i));
        document.getElementById('radiant-radius').value = result;
        document.getElementById('radiant-radius').style.background = '#d9ffde';
        document.getElementById('radiant-radius').style.color = 'black';
        document.getElementById("error_msgRE3").innerHTML = '';
    } else if (p && r) {
        let result = p / (4 * Math.PI * Math.pow(r,2));
        document.getElementById('radiant-current').value = result;
        document.getElementById('radiant-current').style.background = '#d9ffde';
        document.getElementById('radiant-current').style.color = 'black';
        document.getElementById("error_msgRE3").innerHTML = '';
    } else if (i && r) {    
        let result = i * 4 * Math.PI * Math.pow(r,2);
        document.getElementById('radiant-power').value = result;
        document.getElementById('radiant-power').style.background = '#d9ffde';
        document.getElementById('radiant-power').style.color = 'black';
        document.getElementById("error_msgRE3").innerHTML = '';
    }
}

function formula5_caluclate() {
    var p = document.getElementById('hp-power').value;
    var t = document.getElementById('hp-torque').value;
    var s = document.getElementById('hp-speed').value;

    if (p && t && s) {
        document.getElementById("error_msgHP4").innerHTML = "Please provide on 2 Inputs";
    } else if (p == '' && t == '' && s == '') {
        document.getElementById("error_msgHP4").innerHTML = "Please provide any 2 Inputs";
    } else if (p && t) {
        let result =(p * 5252)/t;
        document.getElementById('hp-speed').value = result;
        document.getElementById('hp-speed').style.background = '#d9ffde';
        document.getElementById('hp-speed').style.color = 'black';
        document.getElementById("error_msgHP4").innerHTML = '';
    } else if (p && s) {
        let result = (p * 5252) / s;
        document.getElementById('hp-torque').value = result;
        document.getElementById('hp-torque').style.background = '#d9ffde';
        document.getElementById('hp-torque').style.color = 'black';
        document.getElementById("error_msgHP4").innerHTML = '';
    } else if (t && s) {
        let result = (t * s)/5252;
        document.getElementById('hp-power').value = result;
        document.getElementById('hp-power').style.background = '#d9ffde';
        document.getElementById('hp-power').style.color = 'black';
        document.getElementById("error_msgHP4").innerHTML = '';
    }
}

