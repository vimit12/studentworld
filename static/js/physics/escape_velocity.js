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

function onlyNumberKey2(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg20").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg20").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}
function onlyNumberKeyf1(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgf1").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgf1").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}
function onlyNumberKeyf2(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgf2").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgf2").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}
function onlyNumberKeyf3(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgf3").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgf3").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}

function formula1_caluclate() {
    var v = document.getElementById('recipient-escape').value;
    var m = document.getElementById('recipient-mass').value;
    var d = document.getElementById('recipient-distance').value;
    var G = 6.67 * Math.pow(10,-11);

    if (v && m && d) {
        document.getElementById("error_msg10").innerHTML = "Please provide on 2 Inputs";
    } else if (v == '' && m == '' && d == '') {
        document.getElementById("error_msg10").innerHTML = "Please provide any 2 Inputs";
    } else if(m && d){
         let result = Math.sqrt((2*G*m)/d)
         document.getElementById('recipient-escape').value = result;
         document.getElementById('recipient-escape').style.background = '#d9ffde';
         document.getElementById('recipient-escape').style.color = 'black';
         document.getElementById("error_msg10").innerHTML = '';
    } else if (m && v) {
        let result = (2*G*m)/Math.pow(v,2)
        document.getElementById('recipient-distance').value = result;
        document.getElementById('recipient-distance').style.background = '#d9ffde';
        document.getElementById('recipient-distance').style.color = 'black';
        document.getElementById("error_msg10").innerHTML = '';
    } else if (d && v) {
        let result = (Math.pow(v, 2)*2)/(2*G)
        document.getElementById('recipient-mass').value = result;
        document.getElementById('recipient-mass').style.background = '#d9ffde';
        document.getElementById('recipient-mass').style.color = 'black';
        document.getElementById("error_msg10").innerHTML = '';
    }
    
}

function formula2_caluclate() {
    var v = document.getElementById('recipient-escapevelocity').value;
    var a = document.getElementById('recipient-escapeacceleration').value;
    var d = document.getElementById('recipient-escapedistance').value;
    if (v && a && d) {
        document.getElementById("error_msg20").innerHTML = "Please provide on 2 Inputs";
    } else if (v == '' && a == '' && d == '') {
        document.getElementById("error_msg20").innerHTML = "Please provide any 2 Inputs";
    } else if (v && a){
        let result = Math.pow(v,2)/(2*a)
        document.getElementById('recipient-escapedistance').value = result;
        document.getElementById('recipient-escapedistance').style.background = '#d9ffde';
        document.getElementById('recipient-escapedistance').style.color = 'black';
        document.getElementById("error_msg20").innerHTML = '';
    } else if (v && d) {
        let result = Math.pow(v, 2) / (2 * d)
        document.getElementById('recipient-escapeacceleration').value = result;
        document.getElementById('recipient-escapeacceleration').style.background = '#d9ffde';
        document.getElementById('recipient-escapeacceleration').style.color = 'black';
        document.getElementById("error_msg20").innerHTML = '';
    } else if (a && d) {
        let result = Math.sqrt(2*a*d)
        document.getElementById('recipient-escapevelocity').value = result;
        document.getElementById('recipient-escapevelocity').style.background = '#d9ffde';
        document.getElementById('recipient-escapevelocity').style.color = 'black';
        document.getElementById("error_msg20").innerHTML = '';
    }

}

function NumberOnlyKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msgv1").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msgv1").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function swap_velocity() {
    var fromInput = document.getElementById("fromvelocity").value;
    var toInput = document.getElementById("tovelocity").value;
    document.getElementById("fromvelocity").value = toInput;
    document.getElementById("tovelocity").value = fromInput;
}

function velocityConversion() {
    var inputQuantity = document.getElementById('quantityVelocity').value;
    var fromInput = document.getElementById("fromvelocity").value;
    var toInput = document.getElementById("tovelocity").value;

    if (inputQuantity == "" || fromInput == toInput) {
        document.getElementById("error_msgv1").innerHTML = "Please provide any value";
        document.getElementById("error_msgv2").innerHTML = "To and from field can't be same";
        document.getElementById("error_msgv3").innerHTML = "To and from field can't be same";
        return;
    }

    // cm/s to all
    //***************************************************************************************
    if (fromInput == 'cm/s' && toInput == 'm/s') {
        let result = (inputQuantity * 0.01).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} m/s`;
    } else if (fromInput == 'm/s' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.01).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'km/hr') {
        let result = (inputQuantity * 0.036).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/hr`;
    } else if (fromInput == 'km/hr' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.036).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'km/min') {
        let result = (inputQuantity * 0.0006).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/min`;
    } else if (fromInput == 'km/min' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.0006).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'km/s') {
        let result = (inputQuantity * 0.00001).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/s`;
    } else if (fromInput == 'km/s' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.00001).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'ft/hr') {
        let result = (inputQuantity * 118.11023622).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/hr`;
    } else if (fromInput == 'ft/hr' && toInput == 'cm/s') {
        let result = (inputQuantity / 118.11023622).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'ft/s') {
        let result = (inputQuantity * 0.032808399).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.032808399).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'mch') {
        let result = (inputQuantity * 0.000033893).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.000033893).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'kn') {
        let result = (inputQuantity * 0.019426026).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.019426026).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} cm/s`;
    }


    // m/s to all
    //***************************************************************************************

    if (fromInput == 'm/s' && toInput == 'km/hr') {
        let result = (inputQuantity * 3.6).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/hr`;
    } else if (fromInput == 'km/hr' && toInput == 'm/s') {
        let result = (inputQuantity / 3.6).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'km/min') {
        let result = (inputQuantity * 0.06).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/min`;
    } else if (fromInput == 'km/min' && toInput == 'm/s') {
        let result = (inputQuantity / 0.06).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'km/s') {
        let result = (inputQuantity * 0.001).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/s`;
    } else if (fromInput == 'km/s' && toInput == 'm/s') {
        let result = (inputQuantity / 0.001).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'ft/hr') {
        let result = (inputQuantity * 11811.023622047).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/hr`;
    } else if (fromInput == 'ft/hr' && toInput == 'm/s') {
        let result = (inputQuantity / 11811.023622047).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'ft/s') {
        let result = (inputQuantity * 3.280839895).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'm/s') {
        let result = (inputQuantity / 3.280839895).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'mch') {
        let result = (inputQuantity * 0.003389297).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'm/s') {
        let result = (inputQuantity / 0.003389297).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'kn') {
        let result = (inputQuantity * 1.942602569).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'm/s') {
        let result = (inputQuantity / 1.942602569).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} m/s`;
    }


    // km/hr to all
    //***************************************************************************************

    if (fromInput == 'km/hr' && toInput == 'km/min') {
        let result = (inputQuantity * 0.016666667).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/min`;
    } else if (fromInput == 'km/min' && toInput == 'km/hr') {
        let result = (inputQuantity / 0.016666667).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/hr`;
    }

    if (fromInput == 'km/hr' && toInput == 'km/s') {
        let result = (inputQuantity * 0.000277778).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/s`;
    } else if (fromInput == 'km/s' && toInput == 'km/hr') {
        let result = (inputQuantity / 0.000277778).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/hr`;
    }

    if (fromInput == 'km/hr' && toInput == 'ft/hr') {
        let result = (inputQuantity * 3280.839895013).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/hr`;
    } else if (fromInput == 'ft/hr' && toInput == 'km/hr') {
        let result = (inputQuantity / 3280.839895013).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/hr`;
    }

    if (fromInput == 'km/hr' && toInput == 'ft/s') {
        let result = (inputQuantity * 0.911344415).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'km/hr') {
        let result = (inputQuantity / 0.911344415).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/hr`;
    }

    if (fromInput == 'km/hr' && toInput == 'mch') {
        let result = (inputQuantity * 0.000941472).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'km/hr') {
        let result = (inputQuantity / 0.000941472).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/hr`;
    }

    if (fromInput == 'km/hr' && toInput == 'kn') {
        let result = (inputQuantity * 0.539611825).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'km/hr') {
        let result = (inputQuantity / 0.539611825).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/hr`;
    }

    // km/min to all
    //***************************************************************************************

    if (fromInput == 'km/min' && toInput == 'km/s') {
        let result = (inputQuantity * 0.016666667).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/s`;
    } else if (fromInput == 'km/s' && toInput == 'km/min') {
        let result = (inputQuantity / 0.016666667).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/min`;
    }

    if (fromInput == 'km/min' && toInput == 'ft/hr') {
        let result = (inputQuantity * 196850.39370079).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/hr`;
    } else if (fromInput == 'ft/hr' && toInput == 'km/min') {
        let result = (inputQuantity / 196850.39370079).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/min`;
    }

    if (fromInput == 'km/min' && toInput == 'ft/s') {
        let result = (inputQuantity * 54.680664917).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'km/min') {
        let result = (inputQuantity / 54.680664917).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/min`;
    }

    if (fromInput == 'km/min' && toInput == 'mch') {
        let result = (inputQuantity * 0.05648829).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'km/min') {
        let result = (inputQuantity / 0.05648829).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/min`;
    }

    if (fromInput == 'km/min' && toInput == 'kn') {
        let result = (inputQuantity * 32.37670949).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'km/min') {
        let result = (inputQuantity / 32.37670949).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/min`;
    }


    // km/s to all
    //***************************************************************************************

    if (fromInput == 'km/s' && toInput == 'ft/hr') {
        let result = (inputQuantity * 11811023.622047).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/hr`;
    } else if (fromInput == 'ft/hr' && toInput == 'km/s') {
        let result = (inputQuantity / 11811023.622047).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/s`;
    }

    if (fromInput == 'km/s' && toInput == 'ft/s') {
        let result = (inputQuantity * 3280.839895013).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'km/s') {
        let result = (inputQuantity / 3280.839895013).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/s`;
    }

    if (fromInput == 'km/s' && toInput == 'mch') {
        let result = (inputQuantity * 3.389297412).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'km/s') {
        let result = (inputQuantity / 3.389297412).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/s`;
    }

    if (fromInput == 'km/s' && toInput == 'kn') {
        let result = (inputQuantity * 1942.602569416).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'km/s') {
        let result = (inputQuantity / 1942.602569416).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} km/s`;
    }


    // ft/hr to all
    //***************************************************************************************

    if (fromInput == 'ft/hr' && toInput == 'ft/s') {
        let result = (inputQuantity * 0.000277778).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'ft/hr') {
        let result = (inputQuantity / 0.000277778).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/hr`;
    }

    if (fromInput == 'ft/hr' && toInput == 'mch') {
        let result = (inputQuantity * 0.000000287).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'ft/hr') {
        let result = (inputQuantity / 0.000000287).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/hr`;
    }

    if (fromInput == 'ft/hr' && toInput == 'kn') {
        let result = (inputQuantity * 0.000164474).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'ft/hr') {
        let result = (inputQuantity / 0.000164474).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/hr`;
    }


    // ft/s to all
    //***************************************************************************************

    if (fromInput == 'ft/s' && toInput == 'mch') {
        let result = (inputQuantity * 0.001033058).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'ft/s') {
        let result = (inputQuantity / 0.001033058).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/s`;
    }

    if (fromInput == 'ft/s' && toInput == 'kn') {
        let result = (inputQuantity * 0.592105263).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'ft/s') {
        let result = (inputQuantity / 0.592105263).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} ft/s`;
    }

    // mch to all
    //***************************************************************************************

    if (fromInput == 'mch' && toInput == 'kn') {
        let result = (inputQuantity * 573.157894737).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'mch') {
        let result = (inputQuantity / 573.157894737).toFixed(5);
        document.getElementById("success_msgv1").innerHTML = ` ${result} mch`;
    }


}

function formula1() {
    var v1 = document.getElementById('v1').value;
    var v2 = document.getElementById('v2').value;
    var u1 = document.getElementById('u1').value;
    var u2 = document.getElementById('u2').value;
    var m1 = document.getElementById('m1').value;
    var m2 = document.getElementById('m2').value;

    if (v1 && m1 && u1 && v2 && m2 && u2) {
        document.getElementById("error_msgf1").innerHTML = "Please provide only 5 Inputs";
    } else if (v1 == '' && m1 == '' && u1 == '' && v2 == '' && m2 == '' && u2 == '') {
        document.getElementById("error_msgf1").innerHTML = "Please provide any 5 Inputs";
    } else if (v1 && m1 && u1 && v2 && m2) {
        let result = ((m1*v1 + m2*v2)-(m1*u1))/m2;
        document.getElementById('u2').value = result;
        document.getElementById('u2').style.background = '#d9ffde';
        document.getElementById('u2').style.color = 'black';
        document.getElementById("error_msgf1").innerHTML = '';
    } else if (v1 && m1 && u2 && v2 && m2) {
        let result = ((m1 * v1 + m2 * v2) - (m2 * u2)) / m1;
        document.getElementById('u1').value = result;
        document.getElementById('u1').style.background = '#d9ffde';
        document.getElementById('u1').style.color = 'black';
        document.getElementById("error_msgf1").innerHTML = '';
    }
    else if (v1 && m1 && u2 && u1 && m2) {
        let result = ((m1 * u1 + m2 * u2) - (m1 * v1)) / m2;
        document.getElementById('v2').value = result;
        document.getElementById('v2').style.background = '#d9ffde';
        document.getElementById('v2').style.color = 'black';
        document.getElementById("error_msgf1").innerHTML = '';
    }
    else if (v2 && m1 && u2 && u1 && m2) {
        let result = ((m1 * u1 + m2 * u2) - (m2 * v2)) / m1;
        document.getElementById('v1').value = result;
        document.getElementById('v1').style.background = '#d9ffde';
        document.getElementById('v1').style.color = 'black';
        document.getElementById("error_msgf1").innerHTML = '';
    }
    else if (v2 && v1 && u2 && u1 && m2) {
        let result = (m2*(v2 - u2)) / (u1 - v1); //m1(u1-v1)=m2(v2-u2)
        document.getElementById('m1').value = result;
        document.getElementById('m1').style.background = '#d9ffde';
        document.getElementById('m1').style.color = 'black';
        document.getElementById("error_msgf1").innerHTML = '';
    }
    else if (v2 && v1 && u2 && u1 && m1) {
        let result = (m1 * (u1 - v1)) / (v2 - u2); //m1(u1-v1)=m2(v2-u2)
        document.getElementById('m2').value = result;
        document.getElementById('m2').style.background = '#d9ffde';
        document.getElementById('m2').style.color = 'black';
        document.getElementById("error_msgf1").innerHTML = '';
    }


}


function formula2() {
    var v1 = document.getElementById('fv1').value;
    var v2 = document.getElementById('fv2').value;
    var u1 = document.getElementById('fu1').value;
    var u2 = document.getElementById('fu2').value;
    var m1 = document.getElementById('fm1').value;
    var m2 = document.getElementById('fm2').value;

    if (v1 && m1 && u1 && v2 && m2 && u2) {
        document.getElementById("error_msgf2").innerHTML = "Please provide only 5 Inputs";
    } else if (v1 == '' && m1 == '' && u1 == '' && v2 == '' && m2 == '' && u2 == '') {
        document.getElementById("error_msgf2").innerHTML = "Please provide any 5 Inputs";
    } else if (v1 && m1 && u1 && v2 && m2) {
        let result = Math.sqrt((m1 * Math.pow(v1, 2) + m2 * Math.pow(v2, 2) - m1 * Math.pow(u1, 2))/m2);
        document.getElementById('fu2').value = result;
        document.getElementById('fu2').style.background = '#d9ffde';
        document.getElementById('fu2').style.color = 'black';
        document.getElementById("error_msgf2").innerHTML = '';
    } else if (v1 && m1 && u2 && v2 && m2) {
        let result = Math.sqrt((m1 * Math.pow(v1, 2) + m2 * Math.pow(v2, 2) - m2 * Math.pow(u2, 2)) / m1);
        document.getElementById('fu1').value = result;
        document.getElementById('fu1').style.background = '#d9ffde';
        document.getElementById('fu1').style.color = 'black';
        document.getElementById("error_msgf2").innerHTML = '';
    }
    else if (v1 && m1 && u2 && u1 && m2) {
        let result = Math.sqrt((m1 * Math.pow(u1, 2) + m2 * Math.pow(u2, 2) - m1 * Math.pow(u1, 2)) / m2);
        document.getElementById('fv2').value = result;
        document.getElementById('fv2').style.background = '#d9ffde';
        document.getElementById('fv2').style.color = 'black';
        document.getElementById("error_msgf2").innerHTML = '';
    }
    else if (v2 && m1 && u2 && u1 && m2) {
        let result = Math.sqrt((m1 * Math.pow(u1, 2) + m2 * Math.pow(u2, 2) - m2 * Math.pow(u2, 2)) / m1);
        document.getElementById('fv1').value = result;
        document.getElementById('fv1').style.background = '#d9ffde';
        document.getElementById('fv1').style.color = 'black';
        document.getElementById("error_msgf2").innerHTML = '';
    }
    else if (v2 && v1 && u2 && u1 && m2) {
        let result = (m2 * (Math.pow(v2, 2) - Math.pow(u2, 2))) / (Math.pow(u1, 2) - Math.pow(v1, 2));
        document.getElementById('fm1').value = result;
        document.getElementById('fm1').style.background = '#d9ffde';
        document.getElementById('fm1').style.color = 'black';
        document.getElementById("error_msgf2").innerHTML = '';
    }
    else if (v2 && v1 && u2 && u1 && m1) {
        let result = (m1 * (Math.pow(u1, 2) - Math.pow(v1, 2))) / (Math.pow(v2, 2) - Math.pow(u2, 2));
        document.getElementById('fm2').value = result;
        document.getElementById('fm2').style.background = '#d9ffde';
        document.getElementById('fm2').style.color = 'black';
        document.getElementById("error_msgf2").innerHTML = '';
    }


}


function formula3() {
    var v1 = document.getElementById('V').value;
    var u1 = document.getElementById('f1u1').value;
    var u2 = document.getElementById('f1u2').value;
    var m1 = document.getElementById('f1m1').value;
    var m2 = document.getElementById('f1m2').value;

    if (v1 && m1 && u1  && m2 && u2) {
        document.getElementById("error_msgf3").innerHTML = "Please provide only 4 Inputs";
    } else if (v1 == '' && m1 == '' && u1 == '' && m2 == '' && u2 == '') {
        document.getElementById("error_msgf3").innerHTML = "Please provide any 4 Inputs";
    } else if (v1 && m1 && u1 && m2) {
        let result = (((m1+m2)*v1) - (m1*u1))/m2;
        document.getElementById('f1u2').value = result;
        document.getElementById('f1u2').style.background = '#d9ffde';
        document.getElementById('f1u2').style.color = 'black';
        document.getElementById("error_msgf3").innerHTML = '';
    } else if (v1 && m1 && u2 && m2) {
        let result = (((m1 + m2) * v1) - (m2 * u2)) / m1;
        document.getElementById('f1u1').value = result;
        document.getElementById('f1u1').style.background = '#d9ffde';
        document.getElementById('f1u1').style.color = 'black';
        document.getElementById("error_msgf3").innerHTML = '';
    } else if (m1 && u2 && u1 && m2) {
        let result = (m1*u1+m2*u2)/(m1+m2);
        document.getElementById('V').value = result;
        document.getElementById('V').style.background = '#d9ffde';
        document.getElementById('V').style.color = 'black';
        document.getElementById("error_msgf3").innerHTML = '';
    } else if (v1 && u2 && u1 && m2) {
        let result = (m2*(v1-u2))/(u1-v1);
        document.getElementById('f1m1').value = result;
        document.getElementById('f1m1').style.background = '#d9ffde';
        document.getElementById('f1m1').style.color = 'black';
        document.getElementById("error_msgf3").innerHTML = '';
    } else if (v2 && v1 && u2 && u1 && m1) {
        let result = (m1 * (u1 - v1)) / (v1 - v1);
        document.getElementById('f1m2').value = result;
        document.getElementById('f1m2').style.background = '#d9ffde';
        document.getElementById('f1m2').style.color = 'black';
        document.getElementById("error_msgf3").innerHTML = '';
    }


}