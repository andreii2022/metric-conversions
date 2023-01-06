
// console.log("Test 1");

// function LengthConverterMeters(valNum) {
//   document.getElementById("input").innerHTML = valNum;
//   document.getElementById("result").innerHTML = valNum / 100.00;
//   document.getElementById("inputType").innerHTML = valNum / 39.37;
//   document.getElementById("resultType").innerHTML = valNum / 3.2808;
// }
// function LengthConverterCentimeters(valNum) {
//   document.getElementById("outputMeters").innerHTML = valNum / 0.01;
//   document.getElementById("outputCentimeters").innerHTML = valNum;
//   document.getElementById("outputInches").innerHTML = valNum / 0.39370;
//   document.getElementById("outputFeet").innerHTML = valNum / 0.03808;
// }
// function LengthConverterInches(valNum) {
//   document.getElementById("outputMeters").innerHTML = valNum / 2.54;
//   document.getElementById("outputCentimeters").innerHTML = valNum / 25.40;
//   document.getElementById("outputInches").innerHTML = valNum;
//   document.getElementById("outputFeet").innerHTML = valNum / 0.08333;
// }
// function LengthConverterFeet(valNum) {
//   document.getElementById("outputMeters").innerHTML = valNum / 0.3048;
//   document.getElementById("outputCentimeters").innerHTML = valNum / 30.48;
//   document.getElementById("outputInches").innerHTML = valNum / 12;
//   document.getElementById("outputFeet").innerHTML = valNum;
// }



let input = document.getElementById("input");
let result = document.getElementById("result");
let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");
let inputTypeValue,resultTypeValue;




// add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {

    result.value = input.value;


inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

if(inputTypeValue === 'meter' && resultTypeValue === 'kilometr') {
    result.value = Number(input.value) * 0.001;
} else if(inputTypeValue === 'meter' && resultTypeValue === 'Centimetr') {
    result.value = Number(input.value) * 100;
} else if(inputTypeValue === 'meter' && resultTypeValue === 'meter') {
    result.value = input.value;
}

if(inputTypeValue === 'kilometer' && resultTypeValue === 'meter') {
    result.value = Number(input.value) * 1000;
} else if(inputTypeValue === 'kilometer' && resultTypeValue === 'Centimeter'){
    result.value = Number(input.value) * 100000
} else if (inputTypeValue === 'kilometer' && resultTypeValue === 'kilometr') {
    result.value = input.value
}

if(inputTypeValue === 'Centimetr' && resultTypeValue === 'kilometer') {
    result.value = Number(input.value) * 0.00001;
} else if(inputTypeValue === "Centimetr" && resultTypeValue === 'meter') {
    result.value = Number(input.value) * 0.01;
} else if(inputTypeValue === 'Centimetr' && resultTypeValue ==='Centimeer') {
    result.value = input.value
}


    
}
