

let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');


// add listener
input.addEventListener("keyup", function(){ myResult(inputType.value, input.value,resultType.value )});
inputType.addEventListener("change", function(){ myResult(inputType.value, input.value, resultType.value)});
resultType.addEventListener("change", function(){ myResult(inputType.value, input.value, resultType.value)});




function myResult(unit, value, convert) {



if(unit === 'meter' && convert === 'inch') {

    result.value = Number(value) * 39.370;
}else if(unit === 'meter' && convert === 'centimeter') {
    
    result.value = Number(value) * 100;
}else if (unit === 'meter' && convert === 'feet') {

    result.value = Number(value) * 3.28084
}else if(unit === 'meter' && convert === 'meter') {

    result.value = value;
}

if(unit === 'inch' && convert === 'meter') {

    result.value = Number(value) / 39.370;
} else if(unit === 'inch' && convert === 'centimeter'){

    result.value = Number(value) / 0.39370;

}else if (unit === 'inch' && convert === 'feet') {

    result.value = Number(value)  * 0.083333;

} else if (unit === 'inch' && convert === 'inch') {
    result.value = value;
}

if(unit === 'centimeter' && convert === 'inch') {

    result.value = Number(value) * 0.39370;

} else if(unit === "centimeter" && convert === 'meter') {

    result.value = Number(value) * 0.01;

}else if (unit === 'centimeter' && convert === 'feet') {

    result.value = Number(value)  * 0.032808 

} else if(unit === 'centimeter' && convert ==='centimeter') {
    result.value = value;
}



if(unit === 'feet' && convert === 'inch') {

    result.value = Number(value) *12;
    
} else if(unit === "feet" && convert === 'meter') {

    result.value = Number(value) * 0.01;

}else if (unit === 'feet' && convert === 'centimeter') {

    result.value = Number(value)  * 0.032808 

} else if(unit === 'feet' && convert ==='feet') {
    result.value = value;
}




}
