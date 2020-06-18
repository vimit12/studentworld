function onlyNumberKey1(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg1").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg1").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}

function onlyNumberKey2(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg2").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg2").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}

function onlyNumberKey3(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg3").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg3").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}
function onlyNumberKey4(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg7").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg7").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}

function onlyNumberKey5(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg10").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg10").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}

function onlyNumberKey6(evt) {

    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode > 47 && ASCIICode < 58) || ASCIICode == 46) {
        document.getElementById("error_msg13").innerHTML = "";
        return true;
    } else {
        document.getElementById("error_msg13").innerHTML = "Integers or Floating point Numbers only!";
        return false;
    }

}


function density_caluclate() {
    var mass = document.getElementById('recipient-mass').value;
    var volume = document.getElementById('recipient-volume').value;
    var density = document.getElementById('recipient-density').value;

    if (mass && volume && density ){
        document.getElementById("error_msg1").innerHTML = "Please provide on 2 Inputs";
    }
    else if (mass=='' && volume=='' && density=='') {
        document.getElementById("error_msg1").innerHTML = "Please provide any 2 Inputs";
    }
    else if (mass && volume){
        let result = mass/volume;
        document.getElementById('recipient-density').value = result;
        document.getElementById('recipient-density').style.background = '#d9ffde';
        document.getElementById('recipient-density').style.color='black';
        document.getElementById("error_msg1").innerHTML ='';
    }
    else if (mass && density) {
        let result = mass / density;
        document.getElementById('recipient-volume').value = result;
        document.getElementById('recipient-volume').style.background = '#d9ffde';
        document.getElementById('recipient-volume').style.color = 'black';
        document.getElementById("error_msg1").innerHTML = '';
    }
    else if (volume && density) {
        let result = volume * density;
        document.getElementById('recipient-mass').value = result;
        document.getElementById('recipient-mass').style.background = '#d9ffde';
        document.getElementById('recipient-mass').style.color = 'black';
        document.getElementById("error_msg1").innerHTML = '';
    }
}

function mass_caluclate() {
    var mass = document.getElementById('recipient-mass1').value;
    var weight = document.getElementById('recipient-weight').value;
    var gravity = document.getElementById('recipient-gravity').value;

    if (mass && weight && gravity) {
        document.getElementById("error_msg2").innerHTML = "Please provide on 2 Inputs";
    } 
    else if (mass == '' && weight == '' && gravity == '') {
        document.getElementById("error_msg2").innerHTML = "Please provide any 2 Inputs";
    }
    else if (mass && weight) {
        let result = weight / mass;
        document.getElementById('recipient-gravity').value = result;
        document.getElementById('recipient-gravity').style.background = '#d9ffde';
        document.getElementById('recipient-gravity').style.color = 'black';
        document.getElementById("error_msg2").innerHTML = '';
    } else if (mass && gravity) {
        let result = mass * gravity;
        document.getElementById('recipient-weight').value = result;
        document.getElementById('recipient-weight').style.background = '#d9ffde';
        document.getElementById('recipient-weight').style.color = 'black';
        document.getElementById("error_msg2").innerHTML = '';
    } else if (gravity && weight) {
        let result = weight / gravity;
        document.getElementById('recipient-mass').value = result;
        document.getElementById('recipient-mass').style.background = '#d9ffde';
        document.getElementById('recipient-mass').style.color = 'black';
        document.getElementById("error_msg2").innerHTML = '';
    }
}

function force_caluclate() {
    var mass = document.getElementById('recipient-mass2').value;
    var acceleration = document.getElementById('recipient-acceleration').value;
    var force = document.getElementById('recipient-force').value;

    if (mass && acceleration && force) {
        document.getElementById("error_msg3").innerHTML = "Please provide on 2 Inputs";
    } else if (mass == '' && acceleration == '' && force == '') {
        document.getElementById("error_msg3").innerHTML = "Please provide any 2 Inputs";
    } else if (mass && acceleration) {
        let result = mass / acceleration;
        document.getElementById('recipient-force').value = result;
        document.getElementById('recipient-force').style.background = '#d9ffde';
        document.getElementById('recipient-force').style.color = 'black';
        document.getElementById("error_msg3").innerHTML = '';
    } else if (mass && force) {
        let result = mass / force;
        document.getElementById('recipient-acceleration').value = result;
        document.getElementById('recipient-acceleration').style.background = '#d9ffde';
        document.getElementById('recipient-acceleration').style.color = 'black';
        document.getElementById("error_msg3").innerHTML = '';
    } else if (force && acceleration) {
        let result = force * acceleration;
        document.getElementById('recipient-mass2').value = result;
        document.getElementById('recipient-mass2').style.background = '#d9ffde';
        document.getElementById('recipient-mass2').style.color = 'black';
        document.getElementById("error_msg3").innerHTML = '';
    }
}

function swap_density() {
    var fromInput = document.getElementById("fromdensity").value;
    var toInput = document.getElementById("todensity").value;
    document.getElementById("fromdensity").value = toInput;
    document.getElementById("todensity").value = fromInput;
}

function densityConversion() {
    var inputQuantity = document.getElementById('quantityDensity').value;
    var fromInput = document.getElementById("fromdensity").value;
    var toInput = document.getElementById("todensity").value;

    if (inputQuantity == "" || fromInput == toInput) {
        document.getElementById("error_msg7").innerHTML = "Please provide any value";
        document.getElementById("error_msg8").innerHTML = "To and from field can't be same";
        document.getElementById("error_msg9").innerHTML = "To and from field can't be same";
        return;
    }
    // density gm/cm³ to all
    //***************************************************************************************
    if (fromInput == 'gm/cm³' && toInput == 'gm/liter') {
        let result = (inputQuantity * 1000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/liter`;
    } else if (fromInput == 'gm/liter' && toInput == 'gm/cm³') {
        let result = (inputQuantity / 1000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/cm³`;
    }

    if (fromInput == 'gm/cm³' && toInput == 'gm/m³') {
        let result = (inputQuantity * 1000000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/m³`;
    } else if (fromInput == 'gm/m³' && toInput == 'gm/cm³') {
        let result = (inputQuantity / 1000000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/cm³`;
    }

    if (fromInput == 'gm/cm³' && toInput == 'kg/cm³') {
        let result = (inputQuantity * 0.001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/cm³`;
    } else if (fromInput == 'kg/cm³' && toInput == 'gm/cm³') {
        let result = (inputQuantity / 0.001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/cm³`;
    }

    if (fromInput == 'gm/cm³' && toInput == 'kg/liter') {
        let result = (inputQuantity * 1).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/liter`;
    } else if (fromInput == 'kg/liter' && toInput == 'gm/cm³') {
        let result = (inputQuantity / 1).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/cm³`;
    }

    if (fromInput == 'gm/cm³' && toInput == 'kg/m³') {
        let result = (inputQuantity * 1000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/m³`;
    } else if (fromInput == 'kg/m³' && toInput == 'gm/cm³') {
        let result = (inputQuantity / 1000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/cm³`;
    }

    if (fromInput == 'gm/cm³' && toInput == 'pounds/foot³') {
        let result = (inputQuantity * 62.4279604746608).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/foot³`;
    } else if (fromInput == 'pounds/foot³' && toInput == 'gm/cm³') {
        let result = (inputQuantity / 62.4279604746608).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/cm³`;
    }

    if (fromInput == 'gm/cm³' && toInput == 'pounds/inch³') {
        let result = (inputQuantity * 0.036127292013401).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/inch³`;
    } else if (fromInput == 'pounds/inch³' && toInput == 'gm/cm³') {
        let result = (inputQuantity / 0.036127292013401).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/cm³`;
    }

    // density gm/liter to all
    //***************************************************************************************
   
    if (fromInput == 'gm/liter' && toInput == 'gm/m³') {
        let result = (inputQuantity * 1000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/m³`;
    } else if (fromInput == 'gm/m³' && toInput == 'gm/liter') {
        let result = (inputQuantity / 1000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/liter`;
    }

    if (fromInput == 'gm/liter' && toInput == 'kg/cm³') {
        let result = (inputQuantity * 0.000001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/cm³`;
    } else if (fromInput == 'kg/cm³' && toInput == 'gm/liter') {
        let result = (inputQuantity / 0.000001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/liter`;
    }

    if (fromInput == 'gm/liter' && toInput == 'kg/liter') {
        let result = (inputQuantity * 0.001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/liter`;
    } else if (fromInput == 'kg/liter' && toInput == 'gm/liter') {
        let result = (inputQuantity / 0.001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/liter`;
    }

    if (fromInput == 'gm/liter' && toInput == 'kg/m³') {
        let result = (inputQuantity * 1).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/m³`;
    } else if (fromInput == 'kg/m³' && toInput == 'gm/liter') {
        let result = (inputQuantity / 1).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/liter`;
    }

    if (fromInput == 'gm/liter' && toInput == 'pounds/foot³') {
        let result = (inputQuantity * 0.062427960474661).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/foot³`;
    } else if (fromInput == 'pounds/foot³' && toInput == 'gm/liter') {
        let result = (inputQuantity / 0.062427960474661).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/liter`;
    }

    if (fromInput == 'gm/liter' && toInput == 'pounds/inch³') {
        let result = (inputQuantity * 0.000036127292013).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/inch³`;
    } else if (fromInput == 'pounds/inch³' && toInput == 'gm/liter') {
        let result = (inputQuantity / 0.000036127292013).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/liter`;
    }

    // density gm/m³ to all
    //***************************************************************************************

    if (fromInput == 'gm/m³' && toInput == 'kg/cm³') {
        document.getElementById("success_msg3").innerHTML = ` To small value , please try another unit conversion`;
    } else if (fromInput == 'kg/cm³' && toInput == 'gm/m³') {
        document.getElementById("success_msg3").innerHTML = ` To small value , please try another unit conversion`;
    }

    if (fromInput == 'gm/m³' && toInput == 'kg/liter') {
        let result = (inputQuantity * 0.000001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/liter`;
    } else if (fromInput == 'kg/liter' && toInput == 'gm/m³') {
        let result = (inputQuantity / 0.000001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/m³`;
    }

    if (fromInput == 'gm/m³' && toInput == 'kg/m³') {
        let result = (inputQuantity * 0.001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/m³`;
    } else if (fromInput == 'kg/m³' && toInput == 'gm/m³') {
        let result = (inputQuantity / 0.001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/m³`;
    }

    if (fromInput == 'gm/m³' && toInput == 'pounds/foot³') {
        let result = (inputQuantity * 0.000062427960475).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/foot³`;
    } else if (fromInput == 'pounds/foot³' && toInput == 'gm/m³') {
        let result = (inputQuantity / 0.000062427960475).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} gm/m³`;
    }

    if (fromInput == 'gm/m³' && toInput == 'pounds/inch³') {
        document.getElementById("success_msg3").innerHTML = ` To small value , please try another unit conversion`;
    } else if (fromInput == 'pounds/inch³' && toInput == 'gm/m³') {
        document.getElementById("success_msg3").innerHTML = ` To small value , please try another unit conversion`;
    }

    // density kg/cm³ to all
    //***************************************************************************************


    if (fromInput == 'kg/cm³' && toInput == 'kg/liter') {
        let result = (inputQuantity * 1000.0000000000001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/liter`;
    } else if (fromInput == 'kg/liter' && toInput == 'kg/cm³') {
        let result = (inputQuantity / 1000.0000000000001).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/cm³`;
    }

    if (fromInput == 'kg/cm³' && toInput == 'kg/m³') {
        let result = (inputQuantity * 1000000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/m³`;
    } else if (fromInput == 'kg/m³' && toInput == 'kg/cm³') {
        let result = (inputQuantity / 1000000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/cm³`;
    }

    if (fromInput == 'kg/cm³' && toInput == 'pounds/foot³') {
        let result = (inputQuantity * 62427.9604746608).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/foot³`;
    } else if (fromInput == 'pounds/foot³' && toInput == 'kg/cm³') {
        let result = (inputQuantity / 62427.9604746608).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/cm³`;
    }

    if (fromInput == 'kg/cm³' && toInput == 'pounds/inch³') {
        let result = (inputQuantity * 36.1272920134006).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/inch³`;
    } else if (fromInput == 'pounds/inch³' && toInput == 'kg/cm³') {
        let result = (inputQuantity / 36.1272920134006).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/cm³`;
    }


    // density kg/liter to all
    //***************************************************************************************
   
    if (fromInput == 'kg/liter' && toInput == 'kg/m³') {
        let result = (inputQuantity * 1000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/m³`;
    } else if (fromInput == 'kg/m³' && toInput == 'kg/liter') {
        let result = (inputQuantity / 1000).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/liter`;
    }

    if (fromInput == 'kg/liter' && toInput == 'pounds/foot³') {
        let result = (inputQuantity * 62.4279604746608).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/foot³`;
    } else if (fromInput == 'pounds/foot³' && toInput == 'kg/liter') {
        let result = (inputQuantity / 62.4279604746608).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/liter`;
    }

    if (fromInput == 'kg/liter' && toInput == 'pounds/inch³') {
        let result = (inputQuantity * 0.036127292013401).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/inch³`;
    } else if (fromInput == 'pounds/inch³' && toInput == 'kg/liter') {
        let result = (inputQuantity / 0.036127292013401).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/liter`;
    }

    // density kg/m³ to all
    //***************************************************************************************

    if (fromInput == 'kg/m³' && toInput == 'pounds/foot³') {
        let result = (inputQuantity * 0.062427960474661).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/foot³`;
    } else if (fromInput == 'pounds/foot³' && toInput == 'kg/m³') {
        let result = (inputQuantity / 0.062427960474661).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/m³`;
    }

    if (fromInput == 'kg/m³' && toInput == 'pounds/inch³') {
        let result = (inputQuantity * 0.000036127292013).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/inch³`;
    } else if (fromInput == 'pounds/inch³' && toInput == 'kg/m³') {
        let result = (inputQuantity / 0.000036127292013).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} kg/m³`;
    }

    // density pounds/foot³ to all
    //***************************************************************************************

    if (fromInput == 'pounds/foot³' && toInput == 'pounds/inch³') {
        let result = (inputQuantity * 0.000578703704858).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/inch³`;
    } else if (fromInput == 'pounds/inch³' && toInput == 'pounds/foot³') {
        let result = (inputQuantity / 0.000578703704858).toFixed(5);
        document.getElementById("success_msg3").innerHTML = ` ${result} pounds/foot³`;
    }

}

function swap_force() {
    var fromInput = document.getElementById("fromForce").value;
    var toInput = document.getElementById("toForce").value;
    document.getElementById("fromForce").value = toInput;
    document.getElementById("toForce").value = fromInput;
}

function forceConversion() {
    var inputQuantity = document.getElementById('quantityForce').value;
    var fromInput = document.getElementById("fromForce").value;
    var toInput = document.getElementById("toForce").value;

    if (inputQuantity == "" || fromInput == toInput) {
        document.getElementById("error_msg10").innerHTML = "Please provide any value";
        document.getElementById("error_msg11").innerHTML = "To and from field can't be same";
        document.getElementById("error_msg12").innerHTML = "To and from field can't be same";
        return;
    }

    // density Newton to all
    //***************************************************************************************
    if (fromInput == 'n' && toInput == 'kn') {
        let result = (inputQuantity * 0.001).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Kilo Newton`;
    } else if (fromInput == 'kn' && toInput == 'n') {
        let result = (inputQuantity / 0.001).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Newton`;
    }

    if (fromInput == 'n' && toInput == 'gf') {
        let result = (inputQuantity * 101.9716213).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} gram-force`;
    } else if (fromInput == 'gf' && toInput == 'n') {
        let result = (inputQuantity / 101.9716213).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Newton`;
    }

    if (fromInput == 'n' && toInput == 'kgf') {
        let result = (inputQuantity * 0.1019716213).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Kilogram-force`;
    } else if (fromInput == 'kgf' && toInput == 'n') {
        let result = (inputQuantity / 0.1019716213).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Newton`;
    }

    if (fromInput == 'n' && toInput == 'dyn') {
        let result = (inputQuantity * 100000).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} dyne`;
    } else if (fromInput == 'dyn' && toInput == 'n') {
        let result = (inputQuantity / 100000).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Newton`;
    }

    if (fromInput == 'n' && toInput == 'lbf') {
        let result = (inputQuantity * 0.2248089431).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} pound-force`;
    } else if (fromInput == 'lbf' && toInput == 'n') {
        let result = (inputQuantity / 0.2248089431).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Newton`;
    }

    // density Kilonewton to all
    //***************************************************************************************
    if (fromInput == 'kn' && toInput == 'gf') {
        let result = (inputQuantity * 101971.6213).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} gram-force`;
    } else if (fromInput == 'gf' && toInput == 'kn') {
        let result = (inputQuantity / 101971.6213).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Kilo Newton`;
    }

    if (fromInput == 'kn' && toInput == 'kgf') {
        let result = (inputQuantity * 101.9716213).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Kilogram-force`;
    } else if (fromInput == 'kgf' && toInput == 'kn') {
        let result = (inputQuantity / 101.9716213).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Kilo Newton`;
    }

    if (fromInput == 'kn' && toInput == 'dyn') {
        let result = (inputQuantity * 100000000).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} dyne`;
    } else if (fromInput == 'dyn' && toInput == 'kn') {
        let result = (inputQuantity / 100000000).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Kilo Newton`;
    }

    if (fromInput == 'kn' && toInput == 'lbf') {
        let result = (inputQuantity * 224.8089431).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} pound-force`;
    } else if (fromInput == 'lbf' && toInput == 'kn') {
        let result = (inputQuantity / 224.8089431).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Kilo Newton`;
    }

    // density gram-force to all
    //***************************************************************************************

    if (fromInput == 'gf' && toInput == 'kgf') {
        let result = (inputQuantity * 0.001).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Kilogram-force`;
    } else if (fromInput == 'kgf' && toInput == 'gf') {
        let result = (inputQuantity / 0.001).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} gram-force`;
    }

    if (fromInput == 'gf' && toInput == 'dyn') {
        let result = (inputQuantity * 980.665).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} dyne`;
    } else if (fromInput == 'dyn' && toInput == 'gf') {
        let result = (inputQuantity / 980.665).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} gram-force`;
    }

    if (fromInput == 'gf' && toInput == 'lbf') {
        let result = (inputQuantity * 0.0022046226).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} pound-force`;
    } else if (fromInput == 'lbf' && toInput == 'gf') {
        let result = (inputQuantity / 0.0022046226).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} gram-force`;
    }

    // density Kilogram-force to all
    //***************************************************************************************


    if (fromInput == 'kgf' && toInput == 'dyn') {
        let result = (inputQuantity * 980665).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} dyne`;
    } else if (fromInput == 'dyn' && toInput == 'kgf') {
        let result = (inputQuantity / 980665).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Kilogram-force`;
    }

    if (fromInput == 'kgf' && toInput == 'lbf') {
        let result = (inputQuantity * 2.2046226219).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} pound-force`;
    } else if (fromInput == 'lbf' && toInput == 'kgf') {
        let result = (inputQuantity / 2.2046226219).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} Kilogram-force`;
    }

    // density dyne to all
    //***************************************************************************************

    if (fromInput == 'dyn' && toInput == 'lbf') {
        let result = (inputQuantity * 0.0000022481).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} pound-force`;
    } else if (fromInput == 'lbf' && toInput == 'dyn') {
        let result = (inputQuantity / 0.0000022481).toFixed(5);
        document.getElementById("success_msg4").innerHTML = ` ${result} dyne`;
    }

}

function swap_acceleration() {
    var fromInput = document.getElementById("fromAcceleration").value;
    var toInput = document.getElementById("toAcceleration").value;
    document.getElementById("fromAcceleration").value = toInput;
    document.getElementById("toAcceleration").value = fromInput;
}

function accelerationConversion() {
    var inputQuantity = document.getElementById('quantityacceleration').value;
    var fromInput = document.getElementById("fromAcceleration").value;
    var toInput = document.getElementById("toAcceleration").value;

    if (inputQuantity == "" || fromInput == toInput) {
        document.getElementById("error_msg13").innerHTML = "Please provide any value";
        document.getElementById("error_msg14").innerHTML = "To and from field can't be same";
        document.getElementById("error_msg15").innerHTML = "To and from field can't be same";
        return;
    }

    // density m/s² to all
    //***************************************************************************************
    if (fromInput == 'm/s²' && toInput == 'cm/s²') {
        let result = (inputQuantity * 100).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} cm/s²`;
    } else if (fromInput == 'cm/s²' && toInput == 'm/s²') {
        let result = (inputQuantity / 100).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} m/s²`;
    }

    if (fromInput == 'm/s²' && toInput == 'ft/s²') {
        let result = (inputQuantity * 3.280839895).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} ft/s²`;
    } else if (fromInput == 'ft/s²' && toInput == 'm/s²') {
        let result = (inputQuantity / 3.280839895).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} m/s²`;
    }

    if (fromInput == 'm/s²' && toInput == 'km/h²') {
        let result = (inputQuantity * 12960).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} km/h²`;
    } else if (fromInput == 'km/h²' && toInput == 'm/s²') {
        let result = (inputQuantity / 12960).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} m/s²`;
    }

    // density cm/s² to all
    //***************************************************************************************
    
    if (fromInput == 'cm/s²' && toInput == 'ft/s²') {
        let result = (inputQuantity * 0.03280839895).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} ft/s²`;
    } else if (fromInput == 'ft/s²' && toInput == 'cm/s²') {
        let result = (inputQuantity / 0.03280839895).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} cm/s²`;
    }

    if (fromInput == 'cm/s²' && toInput == 'km/h²') {
        let result = (inputQuantity * 129.6).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} km/h²`;
    } else if (fromInput == 'km/h²' && toInput == 'cm/s²') {
        let result = (inputQuantity / 129.6).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} cm/s²`;
    }

    // density ft/s² to all
    //***************************************************************************************

    if (fromInput == 'ft/s²' && toInput == 'km/h²') {
        let result = (inputQuantity * 3950.208000016).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} km/h²`;
    } else if (fromInput == 'km/h²' && toInput == 'ft/s²') {
        let result = (inputQuantity / 3950.208000016).toFixed(5);
        document.getElementById("success_msg5").innerHTML = ` ${result} ft/s²`;
    }

}

function swap_volume() {
    var fromInput = document.getElementById("fromVolume").value;
    var toInput = document.getElementById("toVolume").value;
    document.getElementById("fromVolume").value = toInput;
    document.getElementById("toVolume").value = fromInput;
}

function volumeConversion() {
    var inputQuantity = document.getElementById('quantityvolume').value;
    var fromInput = document.getElementById("fromVolume").value;
    var toInput = document.getElementById("toVolume").value;

    if (inputQuantity == "" || fromInput == toInput) {
        document.getElementById("error_msg16").innerHTML = "Please provide any value";
        document.getElementById("error_msg17").innerHTML = "To and from field can't be same";
        document.getElementById("error_msg18").innerHTML = "To and from field can't be same";
        return;
    }

     // m³ to all
     //***************************************************************************************
     if (fromInput == 'm³' && toInput == 'cm³') {
         let result = (inputQuantity * 1000000).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     } else if (fromInput == 'cm³' && toInput == 'm³') {
         let result = (inputQuantity / 1000000).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} m³`;
     }

     if (fromInput == 'm³' && toInput == 'lt') {
         let result = (inputQuantity * 1000).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} liter`;
     } else if (fromInput == 'lt' && toInput == 'm³') {
         let result = (inputQuantity / 1000).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} m³`;
     }

     if (fromInput == 'm³' && toInput == 'kl') {
         let result = (inputQuantity * 1).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} kiloliter`;
     } else if (fromInput == 'kl' && toInput == 'm³') {
         let result = (inputQuantity / 1).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} m³`;
     }

     if (fromInput == 'm³' && toInput == 'ml') {
         let result = (inputQuantity * 1000000).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} milliliter`;
     } else if (fromInput == 'ml' && toInput == 'm³') {
         let result = (inputQuantity / 1000000).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} m³`;
     }

     if (fromInput == 'm³' && toInput == 'g') {
         let result = (inputQuantity * 219.9692483).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} gallon[UK]`;
     } else if (fromInput == 'g' && toInput == 'm³') {
         let result = (inputQuantity / 219.9692483).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} m³`;
     }

     if (fromInput == 'm³' && toInput == 'in³') {
         let result = (inputQuantity * 61023.744095).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cubic inch`;
     } else if (fromInput == 'in³' && toInput == 'm³') {
         let result = (inputQuantity / 61023.744095).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} m³`;
     }

     if (fromInput == 'm³' && toInput == 'bl') {
         let result = (inputQuantity * 6.1102568972).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} Barrel[UK]`;
     } else if (fromInput == 'bl' && toInput == 'm³') {
         let result = (inputQuantity / 6.1102568972).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} m³`;
     }


     //  cm³ to all
     //***************************************************************************************
    
     if (fromInput == 'cm³' && toInput == 'lt') {
         let result = (inputQuantity * 0.001).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} liter`;
     } else if (fromInput == 'lt' && toInput == 'cm³') {
         let result = (inputQuantity / 0.001).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     }

     if (fromInput == 'cm³' && toInput == 'kl') {
         let result = (inputQuantity * 0.000001).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} kiloliter`;
     } else if (fromInput == 'kl' && toInput == 'cm³') {
         let result = (inputQuantity / 0.000001).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     }

     if (fromInput == 'cm³' && toInput == 'ml') {
         let result = (inputQuantity * 1).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} milliliter`;
     } else if (fromInput == 'ml' && toInput == 'cm³') {
         let result = (inputQuantity / 1).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     }

     if (fromInput == 'cm³' && toInput == 'g') {
         let result = (inputQuantity * 0.0002199692).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} gallon[UK]`;
     } else if (fromInput == 'g' && toInput == 'cm³') {
         let result = (inputQuantity / 0.0002199692).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     }

     if (fromInput == 'cm³' && toInput == 'in³') {
         let result = (inputQuantity * 0.0610237441).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cubic inch`;
     } else if (fromInput == 'in³' && toInput == 'cm³') {
         let result = (inputQuantity / 0.0610237441).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     }

     if (fromInput == 'cm³' && toInput == 'bl') {
         let result = (inputQuantity * 0.0000061103).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} Barrel[UK]`;
     } else if (fromInput == 'bl' && toInput == 'cm³') {
         let result = (inputQuantity / 0.0000061103).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     }

     // liter to all
     //***************************************************************************************

     if (fromInput == 'lt' && toInput == 'kl') {
         let result = (inputQuantity * 0.001).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} kiloliter`;
     } else if (fromInput == 'kl' && toInput == 'lt') {
         let result = (inputQuantity / 0.001).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     }

     if (fromInput == 'lt' && toInput == 'ml') {
         let result = (inputQuantity * 1000).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} milliliter`;
     } else if (fromInput == 'ml' && toInput == 'lt') {
         let result = (inputQuantity / 1000).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     }

     if (fromInput == 'lt' && toInput == 'g') {
         let result = (inputQuantity * 0.2199692483).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} gallon[UK]`;
     } else if (fromInput == 'g' && toInput == 'lt') {
         let result = (inputQuantity / 0.2199692483).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     }

     if (fromInput == 'lt' && toInput == 'in³') {
         let result = (inputQuantity * 61.023744095).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cubic inch`;
     } else if (fromInput == 'in³' && toInput == 'lt') {
         let result = (inputQuantity / 61.023744095).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     }

     if (fromInput == 'lt' && toInput == 'bl') {
         let result = (inputQuantity * 0.0061102569).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} Barrel[UK]`;
     } else if (fromInput == 'bl' && toInput == 'lt') {
         let result = (inputQuantity / 0.0061102569).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cm³`;
     }

     // kiloliter to all
     //***************************************************************************************

     if (fromInput == 'kl' && toInput == 'ml') {
         let result = (inputQuantity * 1000000).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} milliliter`;
     } else if (fromInput == 'ml' && toInput == 'kl') {
         let result = (inputQuantity / 1000000).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} Kiloliter`;
     }

     if (fromInput == 'kl' && toInput == 'g') {
         let result = (inputQuantity * 219.9692483).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} gallon[UK]`;
     } else if (fromInput == 'g' && toInput == 'kl') {
         let result = (inputQuantity / 219.9692483).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} Kiloliter`;
     }

     if (fromInput == 'kl' && toInput == 'in³') {
         let result = (inputQuantity * 61023.744095).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cubic inch`;
     } else if (fromInput == 'in³' && toInput == 'kl') {
         let result = (inputQuantity / 61023.744095).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} Kiloliter`;
     }

     if (fromInput == 'kl' && toInput == 'bl') {
         let result = (inputQuantity * 6.1102568972).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} Barrel[UK]`;
     } else if (fromInput == 'bl' && toInput == 'kl') {
         let result = (inputQuantity / 6.1102568972).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} Kiloliter`;
     }


     // milliliter to all
     //***************************************************************************************

     if (fromInput == 'ml' && toInput == 'g') {
         let result = (inputQuantity * 0.0002199692).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} gallon[UK]`;
     } else if (fromInput == 'g' && toInput == 'ml') {
         let result = (inputQuantity / 0.0002199692).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} milliliter`;
     }

     if (fromInput == 'ml' && toInput == 'in³') {
         let result = (inputQuantity * 0.0610237441).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cubic inch`;
     } else if (fromInput == 'in³' && toInput == 'ml') {
         let result = (inputQuantity / 0.0610237441).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} milliliter`;
     }

     if (fromInput == 'ml' && toInput == 'bl') {
         let result = (inputQuantity * 0.0000061103).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} Barrel[UK]`;
     } else if (fromInput == 'bl' && toInput == 'ml') {
         let result = (inputQuantity / 0.0000061103).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} milliliter`;
     }


     // gallon[UK] to all
     //***************************************************************************************

     if (fromInput == 'g' && toInput == 'in³') {
         let result = (inputQuantity * 277.41943279).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cubic inch`;
     } else if (fromInput == 'in³' && toInput == 'g') {
         let result = (inputQuantity / 277.41943279).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} gallon[UK]`;
     }

     if (fromInput == 'g' && toInput == 'bl') {
         let result = (inputQuantity * 0.0277777778).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} Barrel[UK]`;
     } else if (fromInput == 'bl' && toInput == 'g') {
         let result = (inputQuantity / 0.0277777778).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} gallon[UK]`;
     }

     // cubic inch to all
     //***************************************************************************************


     if (fromInput == 'in³' && toInput == 'bl') {
         let result = (inputQuantity * 0.0001001292).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} Barrel[UK]`;
     } else if (fromInput == 'bl' && toInput == 'in³') {
         let result = (inputQuantity / 0.0001001292).toFixed(5);
         document.getElementById("success_msg6").innerHTML = ` ${result} cubic inch`;
     }



}
