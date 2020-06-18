function formula1_caluclate() {
    var v = document.getElementById('recipient-final').value;
    var u = document.getElementById('recipient-intial').value;
    var a = document.getElementById('recipient-acceleration').value;
    var t = document.getElementById('recipient-time').value;

    if (v && u && a && t) {
        document.getElementById("error_msg10").innerHTML = "Please provide on 3 Inputs";
    } else if (u == '' && v == '' && a == '' && t == '') {
        document.getElementById("error_msg10").innerHTML = "Please provide any 3 Inputs";
    }
    else if (u  && v && a ) {
        let result = (v-u)/a;
        document.getElementById('recipient-time').value = result;
        document.getElementById('recipient-time').style.background = '#d9ffde';
        document.getElementById('recipient-time').style.color = 'black';
        document.getElementById("error_msg10").innerHTML = '';
    }
    else if (u && v && t) {
        let result = (v - u) / t;
        document.getElementById('recipient-acceleration').value = result;
        document.getElementById('recipient-acceleration').style.background = '#d9ffde';
        document.getElementById('recipient-acceleration').style.color = 'black';
        document.getElementById("error_msg10").innerHTML = '';
    }
    else if (u && a && t) {
        let result = u+ (a*t);
        document.getElementById('recipient-final').value = result;
        document.getElementById('recipient-final').style.background = '#d9ffde';
        document.getElementById('recipient-final').style.color = 'black';
        document.getElementById("error_msg10").innerHTML = '';
    }
    else if (v && a && t) {
        let result = v - (a * t);
        document.getElementById('recipient-intial').value = result;
        document.getElementById('recipient-intial').style.background = '#d9ffde';
        document.getElementById('recipient-intial').style.color = 'black';
        document.getElementById("error_msg10").innerHTML = '';
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

function onlyNumberKey3(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg30").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg30").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}

function onlyNumberKey4(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg4").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg4").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}

function NumberOnlyKey(evt) {
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg23").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg23").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }
}

function formula2_caluclate() {
    var v = document.getElementById('recipient-final1').value;
    var u = document.getElementById('recipient-intial1').value;
    var a = document.getElementById('recipient-acceleration1').value;
    var s = document.getElementById('recipient-displacement').value;

    if (v && u && a && s) {
        document.getElementById("error_msg20").innerHTML = "Please provide on 3 Inputs";
    } else if (u == '' && v == '' && a == '' && s == '') {
        document.getElementById("error_msg20").innerHTML = "Please provide any 3 Inputs";
    } else if (u && v && a) {
        let result = (Math.pow(v,2) - Math.pow(u,2))/ 2*a;
        document.getElementById('recipient-displacement').value = result;
        document.getElementById('recipient-displacement').style.background = '#d9ffde';
        document.getElementById('recipient-displacement').style.color = 'black';
        document.getElementById("error_msg20").innerHTML = '';
    } else if (u && v && s) {
        let result = (Math.pow(v, 2) - Math.pow(u, 2)) / 2 * s;
        document.getElementById('recipient-acceleration1').value = result;
        document.getElementById('recipient-acceleration1').style.background = '#d9ffde';
        document.getElementById('recipient-acceleration1').style.color = 'black';
        document.getElementById("error_msg20").innerHTML = '';
    } else if (u && a && s) {
        let result = Math.pow(u, 2) + (2*a * s);
        document.getElementById('recipient-final1').value = result;
        document.getElementById('recipient-final1').style.background = '#d9ffde';
        document.getElementById('recipient-final1').style.color = 'black';
        document.getElementById("error_msg20").innerHTML = '';
    } else if (v && a && s) {
        let result = Math.pow(v, 2) - (2 * a * s);
        document.getElementById('recipient-intial1').value = result;
        document.getElementById('recipient-intial1').style.background = '#d9ffde';
        document.getElementById('recipient-intial1').style.color = 'black';
        document.getElementById("error_msg20").innerHTML = '';
    }
}

function formula3_caluclate() {
    var t = document.getElementById('time').value;
    var u = document.getElementById('intialvelocity').value;
    var a = document.getElementById('acceleration').value;
    var s = document.getElementById('displacement').value;
    if (t && u && a && s) {
        document.getElementById("error_msg30").innerHTML = "Please provide on 3 Inputs";
    } else if (u == '' && t == '' && a == '' && s == '') {
        document.getElementById("error_msg30").innerHTML = "Please provide any 3 Inputs";
    } else if (u && t && a) {
        let result = (u*t)+(0.5*a*Math.pow(t,2))
        if (result < 0) {
            document.getElementById("error_msg30").innerHTML = 'Displacement cant be Zero';
            document.getElementById('displacement').value = result;
            document.getElementById('displacement').style.background = '#ffc9de';
            document.getElementById('displacement').style.color = 'black';
        } else {
            document.getElementById("error_msg30").innerHTML = '';
            document.getElementById('displacement').value = result;
            document.getElementById('displacement').style.background = '#d9ffde';
            document.getElementById('displacement').style.color = 'black';
        }
        
    } else if (u && t && s) {
        let result = 2*(s-(u*t))/Math.pow(t,2)
        document.getElementById('acceleration').value = result;
        document.getElementById('acceleration').style.background = '#d9ffde';
        document.getElementById('acceleration').style.color = 'black';
        document.getElementById("error_msg30").innerHTML = '';
    } else if (u && a && s) {
        let root = Math.pow((2*u),2)-2*a*(-2*s)
        if (root<0){
            document.getElementById("error_msg30").innerHTML = 'Root is imaginary';
            return
        }
        root = Math.sqrt(root);
        let result1 = ((-2*u)+root)/(2*a)
        let result2 = ((-2*u)-root)/(2*a)
        if (result1<0){
            result = result2;
        } else if (result2<0){
            result = result1;
        } else{
            result = `${result1}, ${result2}`
        }
        document.getElementById('time').value = result;
        document.getElementById('time').style.background = '#d9ffde';
        document.getElementById('time').style.color = 'black';
        document.getElementById("error_msg30").innerHTML = '';
    } else if (s && a && t) {
        let result = (2*s)-(a*(Math.pow(t,2)))/(2*t)
        if (result<0){
            document.getElementById("error_msg30").innerHTML = 'Intial Velocity can\'t be Zero';
            document.getElementById('intialvelocity').value = result;
            document.getElementById('intialvelocity').style.background = '#ffc9de';
            document.getElementById('intialvelocity').style.color = 'black';
        } else{
            document.getElementById("error_msg30").innerHTML = '';
            document.getElementById('intialvelocity').value = result;
            document.getElementById('intialvelocity').style.background = '#d9ffde';
            document.getElementById('intialvelocity').style.color = 'black';
        }
        
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
        document.getElementById("error_msg23").innerHTML = "Please provide any value";
        document.getElementById("error_msg24").innerHTML = "To and from field can't be same";
        document.getElementById("error_msg25").innerHTML = "To and from field can't be same";
        return;
    }

    // cm/s to all
    //***************************************************************************************
    if (fromInput == 'cm/s' && toInput == 'm/s') {
        let result = (inputQuantity * 0.01).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} m/s`;
    } else if (fromInput == 'm/s' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.01).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'km/hr') {
        let result = (inputQuantity * 0.036).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/hr`;
    } else if (fromInput == 'km/hr' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.036).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'km/min') {
        let result = (inputQuantity * 0.0006).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/min`;
    } else if (fromInput == 'km/min' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.0006).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'km/s') {
        let result = (inputQuantity * 0.00001).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/s`;
    } else if (fromInput == 'km/s' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.00001).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'ft/hr') {
        let result = (inputQuantity * 118.11023622).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/hr`;
    } else if (fromInput == 'ft/hr' && toInput == 'cm/s') {
        let result = (inputQuantity / 118.11023622).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'ft/s') {
        let result = (inputQuantity * 0.032808399).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.032808399).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'mch') {
        let result = (inputQuantity * 0.000033893).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.000033893).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} cm/s`;
    }

    if (fromInput == 'cm/s' && toInput == 'kn') {
        let result = (inputQuantity * 0.019426026).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'cm/s') {
        let result = (inputQuantity / 0.019426026).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} cm/s`;
    }


    // m/s to all
    //***************************************************************************************
   
    if (fromInput == 'm/s' && toInput == 'km/hr') {
        let result = (inputQuantity * 3.6).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/hr`;
    } else if (fromInput == 'km/hr' && toInput == 'm/s') {
        let result = (inputQuantity / 3.6).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'km/min') {
        let result = (inputQuantity * 0.06).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/min`;
    } else if (fromInput == 'km/min' && toInput == 'm/s') {
        let result = (inputQuantity / 0.06).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'km/s') {
        let result = (inputQuantity * 0.001).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/s`;
    } else if (fromInput == 'km/s' && toInput == 'm/s') {
        let result = (inputQuantity / 0.001).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'ft/hr') {
        let result = (inputQuantity * 11811.023622047).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/hr`;
    } else if (fromInput == 'ft/hr' && toInput == 'm/s') {
        let result = (inputQuantity / 11811.023622047).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'ft/s') {
        let result = (inputQuantity * 3.280839895).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'm/s') {
        let result = (inputQuantity / 3.280839895).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'mch') {
        let result = (inputQuantity * 0.003389297).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'm/s') {
        let result = (inputQuantity / 0.003389297).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} m/s`;
    }

    if (fromInput == 'm/s' && toInput == 'kn') {
        let result = (inputQuantity * 1.942602569).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'm/s') {
        let result = (inputQuantity / 1.942602569).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} m/s`;
    }


    // km/hr to all
    //***************************************************************************************

    if (fromInput == 'km/hr' && toInput == 'km/min') {
        let result = (inputQuantity * 0.016666667).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/min`;
    } else if (fromInput == 'km/min' && toInput == 'km/hr') {
        let result = (inputQuantity / 0.016666667).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/hr`;
    }

    if (fromInput == 'km/hr' && toInput == 'km/s') {
        let result = (inputQuantity * 0.000277778).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/s`;
    } else if (fromInput == 'km/s' && toInput == 'km/hr') {
        let result = (inputQuantity / 0.000277778).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/hr`;
    }

    if (fromInput == 'km/hr' && toInput == 'ft/hr') {
        let result = (inputQuantity * 3280.839895013).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/hr`;
    } else if (fromInput == 'ft/hr' && toInput == 'km/hr') {
        let result = (inputQuantity / 3280.839895013).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/hr`;
    }

    if (fromInput == 'km/hr' && toInput == 'ft/s') {
        let result = (inputQuantity * 0.911344415).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'km/hr') {
        let result = (inputQuantity / 0.911344415).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/hr`;
    }

    if (fromInput == 'km/hr' && toInput == 'mch') {
        let result = (inputQuantity * 0.000941472).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'km/hr') {
        let result = (inputQuantity / 0.000941472).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/hr`;
    }

    if (fromInput == 'km/hr' && toInput == 'kn') {
        let result = (inputQuantity * 0.539611825).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'km/hr') {
        let result = (inputQuantity / 0.539611825).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/hr`;
    }

    // km/min to all
    //***************************************************************************************

    if (fromInput == 'km/min' && toInput == 'km/s') {
        let result = (inputQuantity * 0.016666667).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/s`;
    } else if (fromInput == 'km/s' && toInput == 'km/min') {
        let result = (inputQuantity / 0.016666667).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/min`;
    }

    if (fromInput == 'km/min' && toInput == 'ft/hr') {
        let result = (inputQuantity * 196850.39370079).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/hr`;
    } else if (fromInput == 'ft/hr' && toInput == 'km/min') {
        let result = (inputQuantity / 196850.39370079).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/min`;
    }

    if (fromInput == 'km/min' && toInput == 'ft/s') {
        let result = (inputQuantity * 54.680664917).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'km/min') {
        let result = (inputQuantity / 54.680664917).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/min`;
    }

    if (fromInput == 'km/min' && toInput == 'mch') {
        let result = (inputQuantity * 0.05648829).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'km/min') {
        let result = (inputQuantity / 0.05648829).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/min`;
    }

    if (fromInput == 'km/min' && toInput == 'kn') {
        let result = (inputQuantity * 32.37670949).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'km/min') {
        let result = (inputQuantity / 32.37670949).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/min`;
    }


    // km/s to all
    //***************************************************************************************

    if (fromInput == 'km/s' && toInput == 'ft/hr') {
        let result = (inputQuantity * 11811023.622047).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/hr`;
    } else if (fromInput == 'ft/hr' && toInput == 'km/s') {
        let result = (inputQuantity / 11811023.622047).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/s`;
    }

    if (fromInput == 'km/s' && toInput == 'ft/s') {
        let result = (inputQuantity * 3280.839895013).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'km/s') {
        let result = (inputQuantity / 3280.839895013).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/s`;
    }

    if (fromInput == 'km/s' && toInput == 'mch') {
        let result = (inputQuantity * 3.389297412).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'km/s') {
        let result = (inputQuantity / 3.389297412).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/s`;
    }

    if (fromInput == 'km/s' && toInput == 'kn') {
        let result = (inputQuantity * 1942.602569416).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'km/s') {
        let result = (inputQuantity / 1942.602569416).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} km/s`;
    }


    // ft/hr to all
    //***************************************************************************************

    if (fromInput == 'ft/hr' && toInput == 'ft/s') {
        let result = (inputQuantity * 0.000277778).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/s`;
    } else if (fromInput == 'ft/s' && toInput == 'ft/hr') {
        let result = (inputQuantity / 0.000277778).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/hr`;
    }

    if (fromInput == 'ft/hr' && toInput == 'mch') {
        let result = (inputQuantity * 0.000000287).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'ft/hr') {
        let result = (inputQuantity / 0.000000287).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/hr`;
    }

    if (fromInput == 'ft/hr' && toInput == 'kn') {
        let result = (inputQuantity * 0.000164474).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'ft/hr') {
        let result = (inputQuantity / 0.000164474).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/hr`;
    }


    // ft/s to all
    //***************************************************************************************

    if (fromInput == 'ft/s' && toInput == 'mch') {
        let result = (inputQuantity * 0.001033058).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Mach`;
    } else if (fromInput == 'mch' && toInput == 'ft/s') {
        let result = (inputQuantity / 0.001033058).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/s`;
    }

    if (fromInput == 'ft/s' && toInput == 'kn') {
        let result = (inputQuantity * 0.592105263).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'ft/s') {
        let result = (inputQuantity / 0.592105263).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} ft/s`;
    }

    // mch to all
    //***************************************************************************************

    if (fromInput == 'mch' && toInput == 'kn') {
        let result = (inputQuantity * 573.157894737).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} Knot`;
    } else if (fromInput == 'kn' && toInput == 'mch') {
        let result = (inputQuantity / 573.157894737).toFixed(5);
        document.getElementById("success_msg2").innerHTML = ` ${result} mch`;
    }


}