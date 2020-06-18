function onlyNumberKeyER1(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgER5").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgER5").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function onlyNumberKeyER2(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgER6").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgER6").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function formulaER1() {
    var r = document.getElementById('resistance1').value;
    var d = document.getElementById('density').value;
    var l = document.getElementById('length').value;
    var a = document.getElementById('area').value;

    if (r && d && l && a) {
        document.getElementById("error_msgER5").innerHTML = "Please provide on 3 Inputs";
    } else if (r == '' && d == '' && a == '' && l == '') {
        document.getElementById("error_msgER5").innerHTML = "Please provide any 3 Inputs";
    } else if (d && l && a) {
        let result = (d*l)/a;
        document.getElementById('resistance1').value = result;
        document.getElementById('resistance1').style.background = '#d9ffde';
        document.getElementById('resistance1').style.color = 'black';
        document.getElementById("error_msgER5").innerHTML = '';
    } else if (d && l && r) {
        let result = (d * l) / r;
        document.getElementById('area').value = result;
        document.getElementById('area').style.background = '#d9ffde';
        document.getElementById('area').style.color = 'black';
        document.getElementById("error_msgER5").innerHTML = '';
    } else if (d && a && r) {
        let result = (r * a)/d;
        document.getElementById('length').value = result;
        document.getElementById('length').style.background = '#d9ffde';
        document.getElementById('length').style.color = 'black';
        document.getElementById("error_msgER5").innerHTML = '';
    } else if (l && a && r) {
        let result = (r * a) / l;
        document.getElementById('density').value = result;
        document.getElementById('density').style.background = '#d9ffde';
        document.getElementById('density').style.color = 'black';
        document.getElementById("error_msgER5").innerHTML = '';
    }
}

function formulaER2() {
    var c = document.getElementById('conductance').value;
    var s = document.getElementById('cond').value;
    var l = document.getElementById('length1').value;
    var a = document.getElementById('area1').value;

    if (c && s && l && a) {
        document.getElementById("error_msgER6").innerHTML = "Please provide on 3 Inputs";
    } else if (c == '' && s == '' && a == '' && l == '') {
        document.getElementById("error_msgER6").innerHTML = "Please provide any 3 Inputs";
    } else if (s && l && a) {
        let result = (s * a) / l;
        document.getElementById('conductance').value = result;
        document.getElementById('conductance').style.background = '#d9ffde';
        document.getElementById('conductance').style.color = 'black';
        document.getElementById("error_msgER6").innerHTML = '';
    } else if (s && l && c) {
        let result = (c * l) / s;
        document.getElementById('area1').value = result;
        document.getElementById('area1').style.background = '#d9ffde';
        document.getElementById('area1').style.color = 'black';
        document.getElementById("error_msgER6").innerHTML = '';
    } else if (s && a && c) {
        let result = (s * a) / c;
        document.getElementById('length1').value = result;
        document.getElementById('length1').style.background = '#d9ffde';
        document.getElementById('length1').style.color = 'black';
        document.getElementById("error_msgER6").innerHTML = '';
    } else if (l && a && c) {
        let result = (c * l) / a;
        document.getElementById('cond').value = result;
        document.getElementById('cond').style.background = '#d9ffde';
        document.getElementById('cond').style.color = 'black';
        document.getElementById("error_msgER6").innerHTML = '';
    }
}