// // alert("Buenasss");

// var nombre = "Nicolas";
// // alert(nombre);


// var numero1 = 5;
// var numero2 = 10;

// // console.log(numero1);

// var resulado = numero1 + numero2;
// var nombres = ["nico", "mati", "mili", "mora"];

// document.write(nombres); //Para printear en pantalla
// document.write("<br>"); //Para saltos de lineas
// document.write(resulado); //Para printear en pantalla


// //Hace una cadena de texto
// var cadenaTexto = nombres.join(" | | ");
// document.write("<br>"); //Para saltos de lineas
// document.write(cadenaTexto);

// document.write("<br>"); //Para saltos de lineas
// document.write("<br>"); //Para saltos de lineas

// //Existe pop y push
// nombres.pop();
// nombres.push("Tu Mama");
// document.write(nombres); //Para printear en pantalla


// document.write("<br>"); //Para saltos de lineas
// document.write("<br>"); //Para saltos de lineas

// //Existe shif y unshif 
// //shif saca el primero 
// //unshifa saca el ultimo
// var nombre2 = ["bruno", "facu"];
// var todosNombres = nombres.concat(nombre2);
// document.write(todosNombres);


// document.write("<br>"); //Para saltos de lineas
// document.write("<br>"); //Para saltos de lineas

// //Sort para ordenar alfabeticamente
// todosNombres.sort();
// document.write(todosNombres);

// // reverse ordena al revez

// var amigos = ["nico", "mati", "mili", "mora"];

// for(var i = 0; i <= amigos.length; i++){
//     document.write(amigos[i] + '<br>');
//     if(amigos[i] === "nico"){
//         i++;
//         document.write(amigos[i], '<br>');
//         break;

//     }
// }


// // document.write(amigos.length);

// for(amigo in amigos){
//     document.write(amigos[amigo] + '<br>');
// }

// var cajas = document.getElementsByTagName('div');
//     console.log(cajas);
    // cajas[0].textContent = 'Hola paaaaa';
    // cajas[1].innerHTML = '<h1>Hello<h1>';

// var cajas = document.getElementById('primeraCaja');


// Para Crear Indormacion
// var caja = document.createElement('div');
// var contenido = document.createTextNode('Tu Mama');
// // Para junatar la caja y el elemento
// caja.appendChild(contenido);

// // Para agregarle un atributo a la caja
// // caja.setAttribute('class', 'caja');
// caja.className = 'caja'


// var contenedor = document.getElementById('contenedor');

// contenedor.appendChild(caja);

// caja.id = 'primera';

// // Saco la id del contenedor padre
// var padre = caja.parentNode;
// // //inserto en antes de primera caja(Es el primer lorem)
// // // padre.insertBefore(caja, primeraCaja);


// // //Asi se podria insertar antes de la caja 2
// var cajas = document.getElementsByClassName('caja');
// // padre.insertBefore(caja, cajas[2]);

// //Como remplzar por otro elemento 
// padre.replaceChild(caja,cajas[2]);


// //Eliminar un nodo 
// padre.removeChild(cajas[1]);



// //Eventos
// function saludar(){
//     alert('Que onda paaa');
// }

// function saludar2(){
//     alert('Soy el puto 2');
// }

// function crearCaja(){
//     var caja = document.createElement('div');
//     var contenido = document.createTextNode('Soy una caja creada');
//     caja.appendChild(contenido);
//     caja.className = 'caja';

//     var contenedor = document.getElementById('contenedor');

//     contenedor.appendChild(caja);

// }

// var boton = document.getElementById('btnCaja');
// boton.addEventListener('click', saludar);
// boton.addEventListener('click', saludar2);

// boton.removeEventListener('click', saludar);
// boton.removeEventListener('click', saludar2);

// var botonCustom = document.getElementById('Crear');
// botonCustom.addEventListener('click', crearCaja);


var cajas = document.getElementsByClassName('caja');
//     cajas[0].addEventListener('click', color);

// function color(){
//     //Para agregar una clase a la ya existente esto cada vez que se aplica se pone y se saca
//     cajas[0].classList.toggle('gris'); 
//     //Esta queda permanente
//     // cajas[0].className = 'caja gris'
// }

function color() {
    this.classList.toggle('gris'); 
    // cajas[i].classList.toggle('gris'); 
}

for(var i = 0; i< cajas.length; i++){
    cajas[i].addEventListener('click', color);
}








