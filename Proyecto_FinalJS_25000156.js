//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

//Valores de los recargos 
var edad_18 = 0.1 // 10%;
var edad_25 = 0.2 // 20%;
var edad_50 = 0.3 // 30%;

var casado_18 = 0.1 // 10%;
var casado_25 = 0.2 // 20%;
var casado_50 = 0.3 // 30%;
var hijos_recargo = 0.2 // 20%;


//Recargo
var recargo = 0;
var recargo_conyuge = 0;
var recargo_hijos = 0;
var recargo_total = 0;

//Precio final 
var precio_final = 0;

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números ");

var casado = prompt("¿Está casado actualmente?");
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge;
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?");
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad);
var edad_conyuge_numero = parseInt(edad_conyuge);
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge);
}

var hijos = prompt("¿Tiene hijos o hijas?");
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos;
if("SI" == hijos.toUpperCase()){
    cantidad_hijos = prompt("¿Cuantos hijos/as tiene?")
}
 //* 1. convierta la cantidad de hijos a numero
var cantidad_hijos_numero = parseInt(cantidad_hijos);

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado
//Recargo por rango de edad 18-24 años
if(edad_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo = precio_base * edad_18;
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo;
}
//Recargo por rango de edad 25-49 años
if(edad_conyuge_numero>=25 && edad_numero<50){
   recargo = precio_base * edad_25;
   recargo_total = recargo;
}
//Recargo por rango de edad 50 años o mas
if(edad_numero>=50){
   recargo = precio_base * edad_50;
   recargo_total = recargo;
}

//2. Recargo por la edad del conyuge
//Recargo por rango de edad 18-24 años
if(edad_conyuge_numero>=18 && edad_numero<25){
  //Calculamos el recargo en base a la edad 
  recargo_conyuge = precio_base * edad_18;
  //Sumamos todos los recargos que hemos obtenido
  recargo_total = recargo + recargo_conyuge;
}
//Recargo por rango de edad 25-49 años
if(edad_conyuge_numero>=25 && edad_numero<50){
   recargo_conyuge = precio_base * edad_25;
   recargo_total = recargo;
}
//Recargo por rango de edad 50 años o mas
if(edad_conyuge_numero>=50){
   recargo_conyuge = precio_base * edad_50;
   recargo_total = recargo + recargo_conyuge;
} 


// 3. Recargo por la cantidad de hijos 
if(cantidad_hijos_numero >0){
   recargo_hijos = ((precio_base * hijos_recargo) * cantidad_hijos_numero);
   recargo_total = recargo + recargo_conyuge + recargo_hijos;
}


precio_final = precio_base + recargo_total
//Resultado
alert ("Para el asegurado "+nombre);
alert ("El recargo total sera de: "+recargo_total);
alert ("El precio sera de: "+precio_final);

