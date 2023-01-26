

//

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
	const DATA = await response.json();
    return DATA;
    
}
let DATAJson;

newLogic().then(DATA => {
    let ArrayOptions = ["centimeter","feet","meter", "inch"];

    const unique = DATA.logic.filter(element => {
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
    DATAJson = DATA;
});




let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');



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
        
        for(let i = 0; i<=DATAJson.logic.length; i++){
        
            if(unit === DATAJson.logic[i].unit && convert === DATAJson.logic[i].convert){
                return eval(Number(value) + DATAJson.logic[i].value)
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

console.log("Task 2")


myJson={"DATA": [{"user": "mike@mail.com", "rating": 20, "disabled": false},
{"user": "greg@mail.com", "rating": 14, "disabled": false},
{"user": "john@mail.com", "rating": 25, "disabled": true}],
"condition": {"include": [{"disabled": true}], "sort_by": ["rating"]}}

let filterBy = Object.keys(myJson.condition)[0]


function sort (filtrBy, filter, sortBy) {
        let filterValue = Object.keys(myJson.condition[filtrBy][0])[0]


    if(filtrBy === 'exclude') {
        return myJson.DATA.filter((e) => e[filterValue] !== filter[0][filterValue] ).sort((a, b) => {return a[sortBy[0]] - b[sortBy[0]];});
        
    } else {
        return myJson.DATA.filter((e) => e[filterValue] === filter[0][filterValue] ).sort((a, b) => {return a[sortBy[0]] - b[sortBy[0]];});
        
    }

}
 let result2 =  sort(filterBy, myJson.condition[filterBy], myJson.condition.sort_by)
 console.log(result2)


 console.log('Task 4')


const questionList = [
    {"What is your marital status?": ["Single", "Married"]},
    {"Are you planning on getting married next year?": ["Yes", "No"]},
    {"How long have you been married?": ["Less than a year", "More than a year"]},
    {"Have you celebrated your one year anniversary?": ["Yes", "No"]},
];
const answerMap = {
    0: [1, 2],
    1: [false, false],
    2: [false, 3],
    3: [false, false]};

function getAnswer(answerMap, questionList) {
    const paths = { number: 0, list: [] };

    function generatePath(path, questionIndex) {

        if (answerMap[questionIndex] === undefined) {
            paths.list.push(path);
            paths.number++;
            return;
        }
        for (let i = 0; i < answerMap[questionIndex].length; i++) {
            const newPath = [...path];
            
            for (let key  in questionList[questionIndex]) {
                newPath.push({[key]: questionList[questionIndex][key][i]});
            }
            
            generatePath(newPath, answerMap[questionIndex][i]);
        }
    }
    generatePath([], 0);
    return paths;
}

console.log(getAnswer(answerMap, questionList));










