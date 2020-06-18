function onlyNumberKey1(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg10").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg10").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}

function formula1_caluclate() {
    var v = document.getElementById('recipient-volt').value;
    var i = document.getElementById('recipient-current').value;
    var r = document.getElementById('recipient-resistance').value;

    if (v && i && r) {
        document.getElementById("error_msg10").innerHTML = "Please provide on 2 Inputs";
    } else if (v == '' && i == '' && r == '') {
        document.getElementById("error_msg10").innerHTML = "Please provide any 2 Inputs";
    } else if (v && i) {
        let result = v/i;
        document.getElementById('recipient-resistance').value = result;
        document.getElementById('recipient-resistance').style.background = '#d9ffde';
        document.getElementById('recipient-resistance').style.color = 'black';
        document.getElementById("error_msg10").innerHTML = '';
    } else if (v && r) {
        let result = v/r
        document.getElementById('recipient-current').value = result;
        document.getElementById('recipient-current').style.background = '#d9ffde';
        document.getElementById('recipient-current').style.color = 'black';
        document.getElementById("error_msg10").innerHTML = '';
    } else if (i && r) {
        let result = i*r
        document.getElementById('recipient-volt').value = result;
        document.getElementById('recipient-volt').style.background = '#d9ffde';
        document.getElementById('recipient-volt').style.color = 'black';
        document.getElementById("error_msg10").innerHTML = '';
    }

}