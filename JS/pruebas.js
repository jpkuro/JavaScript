/*var nombre = "Jose";
var edad = 29;
var presenteONo = true;
var apellido = "Palma";
var statura = 1.67;
//let nombre2 = "Luis";

//alert("el nombre es:" + nombre);

console.log("el nombre es:" + nombre + " " + typeof nombre);
console.log("la edad es:" + edad + " " + typeof edad);
console.log("presente o no:" + presenteONo + " " + typeof presenteONo);
console.log("el apellido es:" + apellido + " " + typeof apellido);
console.log("la statura es:" + statura + " " + typeof statura);

if(true){
    let nombre2 = "Luis";
}

console.log("el nombre es:" + nombre2 );*/

/*var suma = 5 + 3;
var resta = 5 - 3;
var multiplicacion = 5 * 3;
var division = 5 / 3;
var modulo = 5 % 3;

console.log("suma:" + suma + " " + typeof suma);
console.log("resta:" + resta + " " + typeof resta);
console.log("multiplicación:" + multiplicacion + " " + typeof multiplicacion);
console.log("división:" + division + " " + typeof division);
console.log("módulo:" + modulo + " " + typeof modulo);*/
/*
console.log(5>2);
console.log(98<1);
console.log(5=5);*/

/*var edad = 14;
var DNI = true;

if(edad >= 18 && DNI == true){
    console.log("puede votar");
}else{
    console.log("no puede votar");
}*/
/*var edad = 14;
var DNI = true;

if(edad >= 18 || DNI == true){
    console.log("puede votar");
}else{
    console.log("no puede votar");
}*/
/*var edad = 14;
var DNI = !true;

if(edad >= 18 || DNI == true){
    console.log("puede votar");
}else{
    console.log("no puede votar");
}

*/
/*
var comensal = "Jose";
var cuentaComida = 2800 + 1300;
var cuentaBebida = 900 + 650;

var totalCuenta = cuentaComida + cuentaBebida;

console.log("el total de la cuenta en comida es de: " + cuentaComida);
console.log("El total de la cuenta en bebida es de: " + cuentaBebida);
console.log("El total de la cuenta es de: " + totalCuenta);

*/
/*
var color = prompt("Ingrese un color: ");

switch(color){
    case "rojo":
        console.log("El color es rojo");
        break;
    case "azul":
        console.log("el color es azul");
        break;
    default:
        console.log("El color no es ni rojo ni azul");
        break;

}
*/

// ingresa dos numeros  mediante un prompt y almacena sus valores en dos variables distintas
// realiza una resta entre los dos valores en javascript
// almacenar el resultado en una variable, importar el archivo JS a una pagina html
// si e resultado de la resta es mayor a 0 mostrar mediante  un console o un aler "es mayor a 0 "
//si es mayor a 0 comparar si el numero es par en caso de que lo sea, mostrar un mensaje que diga "es par"
// en caso de que no uno que diga "es impar"
// en caso de que sea menor a 0 mostrar un mesaje que  diga "es menor o igual a 0"  

/*var num1 = prompt("ingrese el primer numero: ");
var num2 = prompt("Ingresa el segund numero: ");

var resta = num1 - num2;

if (resta > 0){
    console.log("es mayor a 0");
    resta = resta % 2
    if(resta == 0){
    console.log("el numero es par");
    }else{
        console.log("el numero es impar");
    }

}else{
    console.log("es menor o igual a 0");
}
*/
/*
var contador = 0;

while (contador <=10){
    console.log("esta e la vuelta numero: " + contador);
    contador++
}*/
/*
for (var i=1;i<=10;i++){
    console.log("vuelta numer: " + i);
}*/
/*                                                                                                                                                                                                  
var contador =20;
do{
 console.log("la vuelta numero: " + contador);
 contador++
}while(contador <10);*/
/*

for(var i=1;i<=35;i++){

    console.log("va pór el numero: " + i);
}*/
/*
var contador = 10;
do{
console.log("cuenta regresiva: " + contador);
contador--
}while(contador > 0);
if(contador == 0){
    console.log("feliz año");
}*/

/*var respuesta = window.prompt("se bienvenido a la grieta del invocador","llama a lagrieta");
alert ("su respuesta fue: " + respuesta);*/


var confirma = window.confirm("¿Has jugado lol hoy?");
if(confirma == true){
    console.log("has cumplido con la grieta ")
}else{
    console.log("escapa del visio");
}