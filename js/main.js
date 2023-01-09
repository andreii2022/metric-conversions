function readJson () {
    fetch('new_logic.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        console.log(Calc(json.logic.unit, json.logic.value, json.logic.convert));
        
        document.getElementById('unitJson').innerHTML = json.logic.unit;
        document.getElementById('valueJson').innerHTML = json.logic.value;
        document.getElementById('convertJson').innerHTML = json.logic.convert;
        document.getElementById('resultJson').innerHTML = Calc(json.logic.unit, json.logic.value, json.logic.convert);

    })
    .catch(function (e) {
        console.log(e)
    })
}
 readJson();

 let ArrayOptions = ["cm","km","feet"];

 let optionList = document.getElementById('inputType').options;


 ArrayOptions.forEach(option =>
  optionList.add(
    new Option(option, option)
  )
);



let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');


// add listener
input.addEventListener("keyup", function(){ myResult(inputType.value, input.value,resultType.value )});
inputType.addEventListener("change", function(){ myResult(inputType.value, input.value, resultType.value)});
resultType.addEventListener("change", function(){ myResult(inputType.value, input.value, resultType.value)});

function myResult (unit, value, convert) {
    result.value = Calc(unit, value, convert);
}



function Calc(unit, value, convert) {
    console.log(unit);
    console.log(value);
    console.log(convert)

    if(unit === 'meter' && convert === 'inch') {

        return Number(value) * 39.370;
    }else if(unit === 'meter' && convert === 'centimeter') {
        
        return Number(value) * 100;
    }else if (unit === 'meter' && convert === 'feet') {

        return Number(value) * 3.28084
    }else if(unit === 'meter' && convert === 'meter') {

        return value;
    }

    if(unit === 'inch' && convert === 'meter') {

        return Number(value) / 39.370;
    } else if(unit === 'inch' && convert === 'centimeter'){

        return Number(value) / 0.39370;

    }else if (unit === 'inch' && convert === 'feet') {

        return Number(value)  * 0.083333;

    } else if (unit === 'inch' && convert === 'inch') {
        return value;
    }

    if(unit === 'centimeter' && convert === 'inch') {

        return Number(value) * 0.39370;

    } else if(unit === "centimeter" && convert === 'meter') {

        return Number(value) * 0.01;

    }else if (unit === 'centimeter' && convert === 'feet') {

        return Number(value)  * 0.032808 

    } else if(unit === 'centimeter' && convert ==='centimeter') {
        return value;
    }



    if(unit === 'feet' && convert === 'inch') {

        return Number(value) *12;
        
    } else if(unit === "feet" && convert === 'meter') {

        return Number(value) * 0.01;

    }else if (unit === 'feet' && convert === 'centimeter') {

        return Number(value)  * 0.032808 

    } else if(unit === 'feet' && convert ==='feet') {
        return value;
    }
}



// let array = [1,2,3,4,5,6,7];
// let count = 0;
// function linearSearch(array, item) {
//     count += 1;
//     for(let i = 0; i < array.length; i++ ) {
//         if(array[i] === item) {
//             return i;
//         }
//     }
//     return null;
// }
// console.log(linearSearch(array, 2))
// console.log('caunt =', count);





// const array =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let  caunt = 0;

// function binarySearch(array,item) {
//     let start = 0;
//     let end = array.length;
//     let midle;
//     let found = false;
//     let position = -1;

//     while (found === false && start <= end) {
//         count +=1;
//         midle = Math.floor((start + end) / 2);
//         if(array[midle] === item) {
//             found = true
//             position = midle;
//             return position;
//         }
//         if(array < array[midle]) {
//             end = midle -1;
//         } else {
//             start = midle + 1;
//         }
//     }
//     return position;
// }










// const array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// let count = 0

// function binarySearch(array, item) {
//     let start = 0
//     let end = array.length
//     let middle;
//     let found = false
//     let position = -1
//     while (found === false && start <= end) {
//         count+=1
//         middle = Math.floor((start + end) / 2);
//         if (array[middle] === item) {
//             found = true
//             position = middle
//             return position;
//         }
//         if (item < array[middle]) {
//             end = middle - 1
//         } else {
//             start = middle + 1
//         }
//     }
//     return position;
// }

// function recursiveBinarySearch(array, item, start, end) {
//     let middle = Math.floor((start + end) / 2);
//     count += 1
//     if (item === array[middle]) {
//         return middle
//     }
//     if (item < array[middle]) {
//         return recursiveBinarySearch(array, item, 0, middle - 1 )
//     } else {
//         return recursiveBinarySearch(array, item, middle + 1, end )
//     }
// }

// console.log(recursiveBinarySearch(array, 0, 0, array.length))
// console.log(count)
