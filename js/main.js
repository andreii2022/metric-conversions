function readJson () {
    fetch('new_value.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json();
    })
    .then(json => {
        document.getElementById('unitJson').innerHTML = json.distance.unit;
        document.getElementById('valueJson').innerHTML = json.distance.value;
        document.getElementById('convertJson').innerHTML = json.distance.convert;
        document.getElementById('resultJson').innerHTML = Calc(json.distance.unit, json.distance.value, json.distance.convert)+json.distance.convert;

    })
    .catch(function (e) {
        console.log(e)
    })
}
 readJson();

 

 
async function newLogic () {
    const response = await fetch('new_logic.json')
    if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();
    return data;
    
}
let dataJson;

newLogic().then(data => {
    let ArrayOptions = ["centimeter","feet","meter", "inch"];

    const unique = data.logic.filter(element => {
        const isDuplicate = ArrayOptions.includes(element.unit);
        if (!isDuplicate) {
            ArrayOptions.push(element.unit);
      
        }
      });    

    let optionList = document.getElementById('inputType').options;
    let optionList2 = document.getElementById('resultType').options;
   
    ArrayOptions.forEach(option => {
     optionList.add(
       new Option(option, option)
     );
     optionList2.add(
       new Option(option, option)
     )
    });
    dataJson = data;
});




let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');


// add listener
input.addEventListener("keyup", function(){ myResult(inputType.value, input.value,resultType.value )});
inputType.addEventListener("change", function(){ myResult(inputType.value, input.value, resultType.value)});
resultType.addEventListener("change", function(){ myResult(inputType.value, input.value, resultType.value)});

document.getElementById('Download').addEventListener("click", function() { downloadJson()});

function myResult (unit, value, convert) {
    result.value = Calc(unit, value, convert);
}



function Calc(unit, value, convert) {
    
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
        
        for(let i =0; i<=dataJson.logic.length; i++){
        
            if(unit === dataJson.logic[i].unit && convert === dataJson.logic[i].convert){
                return eval(Number(value) + dataJson.logic[i].value)
            }
        }
}

  function download(content, fileName, contentType) {
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = fileName;
    a.click();
  }

function downloadJson(){
    download(JSON.stringify({value: input.value,convertFrom: inputType.value, convertTo: resultType.value, result: result.value}), "result.json", "text/plain");
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
