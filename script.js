//#region 
var edad = "17";
let pais = "Argentina";
const dni = "123456";

let num1 = 10;
let num2 = 5;

let array = [80, 90, 100];
//#endregion

//#region 
console.log(edad);
console.log(pais);
console.log(dni);
suma (num1, num2);
resta (num1, num2);
multi (num1, num2);
div (num1, num2);
//#endregion

//#region 
function suma (num1, num2){
    console.log ("suma: "+ (num1+num2));
}
function resta (num1, num2){
    console.log ("resta: "+ (num1-num2));
}
function multi (num1, num2){
    console.log ("multiplicacion: "+ (num1*num2));
}
function div (num1, num2){
    console.log ("division: "+ (num1/num2));
}
//#endregion

//#region 
for(let x = 0; x < array.length; x++){
    console.log(array[x]);
}
//#endregion