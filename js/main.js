

let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue,resultTypeValue;

// add listener
input.addEventListener("keyup", myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myResult() {

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer') {

    result.value = Number(input.value) * 0.001;
}else if(inputTypeValue === 'meter' && resultTypeValue === 'centimeter') {
    
    result.value = Number(input.value) * 100;
}else if (inputTypeValue === 'meter' && resultTypeValue === 'feet') {

    result.value = Number(input.value) * 3.28084
}else if(inputTypeValue === 'meter' && resultTypeValue === 'meter') {

    result.value = input.value;
}

if(inputTypeValue === 'kilometer' && resultTypeValue === 'meter') {

    result.value = Number(input.value) * 1000;
} else if(inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter'){

    result.value = Number(input.value) * 100000;

}else if (inputTypeValue === 'kilometer' && resultTypeValue === 'feet') {

    result.value = Number(input.value)  * 3280.8  

} else if (inputTypeValue === 'kilometer' && resultTypeValue === 'kilometr') {
    result.value = input.value;
}

if(inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer') {

    result.value = Number(input.value) * 0.00001;

} else if(inputTypeValue === "centimeter" && resultTypeValue === 'meter') {

    result.value = Number(input.value) * 0.01;

}else if (inputTypeValue === 'centimeter' && resultTypeValue === 'feet') {

    result.value = Number(input.value)  * 0.032808 

} else if(inputTypeValue === 'centimeter' && resultTypeValue ==='centimeter') {
    result.value = input.value;
}



if(inputTypeValue === 'feet' && resultTypeValue === 'kilometer') {

    result.value = Number(input.value) * 0.00001;
    
} else if(inputTypeValue === "feet" && resultTypeValue === 'meter') {

    result.value = Number(input.value) * 0.01;

}else if (inputTypeValue === 'feet' && resultTypeValue === 'centimeter') {

    result.value = Number(input.value)  * 0.032808 

} else if(inputTypeValue === 'feet' && resultTypeValue ==='feet') {
    result.value = input.value;
}





}

// const array = [1,4,4,5,8,5,1,2,7,2,11]

// function linearSearh(array, item) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === item) {
//             return i;
//         }
//     }
//     return null;
// }
// console.log(linearSearh(array, [4]));




// const array = [1,2,3,4,5,6,7];

// function lineSearh(array, item) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === item) {
//             return i;
//         }
//     }
//     return null;
// }
// console.log(lineSearh(array, 4));

// const array = [1,2,3,3,4,5,5,6];

// let count = 0;

// function linearSearh (array, item) {
//     for(let i = 0; i < array.length; i++) {
//         count += 1;
//         if(array[i] === item) {
//             return i;
//         }
//     }
//     return null;
// }
// console.log(linearSearh(array,5))
// console.log('count =', count)


// let input = document.getElementById('input');
// let result = document.getElementById('result');
// let inputType = document.getElementById('inputType');
// let resultType = document.getElementById('resultType');
// let inputTypeValue,resultTypeValue;

// input.addEventListener('keyup', myResult);
// inputType.addEventListener('change', myResult);
// resultType.addEventListener('change', myResult);

// inputTypeValue = inputType.value;
// resultTypeValue = resultType.value;

// function myResult() {
//     inputTypeValue = inputType.value;
//     resultTypeValue = resultType.value;
// }

// if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer'){
//     result.value = Number(input.value) * 0.001;
// } else if(inputTypeValue === 'meter' && resultTypeValue === 'Centimetr'){
//     result.value = Number(input.value) * 100;
// } else if (inputTypeValue === 'meter' && resultTypeValue ==='meter') {
//     result.value = input.value;
// }

// if(inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer') {
//     result.value = Number(input.value) * 0.001;
// } else if(inputTypeValue === 'kilometer' && resultTypeValue === '' ) {
//     result.value = Number(input.value) *100;
// } else if(inputTypeValue === 'kilometr' && resultTypeValue === '' ) {
//     result.value = input.value;
// }