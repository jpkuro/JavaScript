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

/*
var confirma = window.confirm("¿Has jugado lol hoy?");
if(confirma == true){
    console.log("has cumplido con la grieta ")
}else{
    console.log("escapa del visio");
}*/

/*
var fecha = new Date();

alert("la fecha actual es: " + fecha);*/
/*
var fecha = new Date(1996, 10, 8);

alert("la fecha actual es: " + fecha);*/
/*
var fecha = new Date("05/06/2026");

alert("la fecha actual es: " + fecha);*/
/*
var fecha = new Date();
var  dia = fecha.getDay();
var mes = fecha.getMonth();
var anio = fecha.getFullYear();

alert( " Dia : " + dia + " Mes: " + (mes+1) +" Año  :" + anio);*/
/*
var valor1 = parseInt(window.prompt("ingrese el primer valor"));
var valor2 = parseInt(window.prompt("Ingrese el segundo valor"));

if(valor1 < valor2){
    alert("el valor 2 es mayor");

}else{
    alert ("valor 1 es mayor");
}*/
/*
var fechaingreso = prompt("ingrese la fecha que requiera", "MM/DD/YYYY");

var fecha = new Date (fechaingreso);
var dia = fecha.getDay();
var mes = fecha.getMonth();
var anio = fecha.getFullYear();

var diaSemana;

switch  (dia){
    case 0 :
        diaSemana = "Domingo"
        break;
    case 1 :
        diaSemana = "Lunes"
        break;
    case 2 :
        diaSemana = "Martes"
        break;
    case 3 :
        diaSemana = "Miercoles"
        break;
    case 4 :
        diaSemana = "Jueves"
        break;
    case 5 :
        diaSemana = "Viernes"
        break;
    case 6 :
        diaSemana = "Sabado"
        break;
    default:  alert("No es un dia valido ");

}

alert("la fecha ingresada es: " + (mes+1) + "/" + diaSemana + "/" + anio);
*/

///matis con datos
/*let miVector = [1,2,3,4,5];

console.log(miVector[2]);//bucar en  array

let miMatriz =[[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(miMatriz[2][3]);//buscar en matriz

*/
/*
let vector = new Array(3);

vector[0] = "Jose";
vector[1] = "Luis";
vector[2] = "Palma";


let matriz = new Array(3);

for( let i = 0; i<3; i++ ){
 matriz[i] = new Array(3);
}
console.log(matriz);*/
/*
let persona0 =["jose", "luis", "palma"];
//let persona2 = ["alison", "nayerli", "palma"];
//let persona3 = ["pablo", "daniel", "palma"];

//let matriz = [persona0,persona2,persona3];
for(let i=0; i<persona0.length; i++){
    console.log(persona0[i]);

    if(persona0[i] == "jose"){
        console.log("eres el mejor");
    }
}
//console.log(matriz);*/
/*
let persona0 =["jose", "luis", "palma"];
let persona2 = ["alison", "nayerli", "palma"];
let persona3 = ["pablo", "daniel", "palma"];

let matriz = [persona0,persona2,persona3];

for(let i=0; i<matriz.length; i++){
    for(let j=0; j<matriz[j].length; j++){
        console.log(matriz[j][i]);
    }
    
}
*/

//metodo push en array
/*
let frutas  = ["naranja","banana"];
frutas.push("manzana");
console.log(frutas);
*/
///metodo eliminar
/*let frutas  = ["naranja","banana"];
frutas.push("manzana");
console.log(frutas);
frutas.pop();
console.log(frutas);*/
/*
let frutas  = ["naranja","banana"];
frutas.push("manzana");
console.log(frutas);
frutas.shift();
//frutas.unshitf();
console.log(frutas);*/
/*
let frutas  = ["naranja","banana","quiwi"];
frutas.push("manzana");
console.log(frutas);

let frutasConA = frutas.filter(fruta =>fruta.includes("a"));
console.log(frutasConA);*/
/*
let frutas  = ["naranja","banana","quiwi"];
let frutas2  = ["manzana","mango","uva"];

let todasLasFrutas = frutas.concat(frutas2);
console.log(todasLasFrutas);///union

todasLasFrutas.reverse();/// orden inverso
console.log(todasLasFrutas);

todasLasFrutas.sort();
console.log(todasLasFrutas);*/
/*
function saludar(){
    console.log("estoy en la primera funcion");
}

saludar();*/
/*
function sumar (num1,num2){

        let resultado;
        resultado = num1 + num2;
        return resultado;

}
*//*
let suma = sumar(5,2);
console.log("el resultado es : " + suma);
*/
//ejercicio integrador principiante
/* en un campo de entrenamiento pokemon se necesita evaluar el desempeño
de cada pokemon en sus batalla para determiannr si estan listos para competir
en la liga
crea una funcion en javaScript que calcule el promedio de habilidades de un pokemon
y determina si esta preparado para la competicion 
(promedio mayor  o igual a 70) o no (promedio menor a 70)

utiliza array para almacenar las habilidades de cada pokemon y sus nombres
pistas:
crea una array de nombre pokemon y una matriz de habilidades donde el indice de cada
array con nombres de pokemones represente lña fila de habilidades de matriz

ejemplo : si bulbasaur es el pokemon en la posicion 1 la fila 1 de la matriz tendra sus habilidades
utiliza metodo array para manejar los datos y calcular el promedio de habilidades

la funcion debe mostrar en consola el nombre del pokemon , sus habilidades 
y si esta listo o no para la competicion

podes crear mas de una funcion para diferentes tareas si quieres modular mas aun tu app
*/

var pokemon = ["Bulbasour","Chicorita","tourterra","Pikachu","Torti"];
var habilidadesPokemon = [["latigo","hojaDaño","corteHoja"],
                            ["corteHoja","tiraTormenta","talloDaño"],
                            ["DañoSolar","terremoto","Temblor"],
                            ["Impatrueno","cargaRelampago","colaMetal"],
                            ["Fuego","LanzaLlamas","borticeFuego"]
]
function promediopokemon(pokemon,habilidaPo){
    for(let i=0; i<pokemon.length; i++){
        for(let j=0; j<habilidaPo[j].length; j++){
            //console.log("el pokemon : " + pokemon[i] + " tiene las habilidaes de: " + habilidaPo[j])
            return pokemon[i],habilidaPo[j];
        }

    }
}
let pokemonYHabilidad = promediopokemon(pokemon,habilidadesPokemon);
console.log(pokemonYHabilidad);

