//Declaracion de variables que obtienen los id de los div's del HTML
const comenzar = document.getElementById("empezar");
const cifrar = document.getElementById("encode");
const descifrar = document.getElementById("decode");
const regresar = document.getElementById("back");
const regresar2 = document.getElementById("back2");

//Declaracion de variables de id's
const bienvenida=document.getElementById('bienvenida');
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

//Variables que se ocupan en cipher.js para codificar y decodificar
//str almacena el mensaje que el usuario ingresa    
const str1 = document.getElementById("txt");
//offset almancena el numero que el usuario elige
const offset1 = document.getElementById("opcion");

/*Funcion en ES6 que al momento de hacer click en el boton empezar oculta la seccion de bienvenida 
y aparece la seccion box1*/
comenzar.addEventListener("click", () => {
    bienvenida.classList.add("ocultar");
    box1.classList.remove("ocultar");
    
});

/*Funcion en ES6 que al momento de hacer click en el boton codificar oculta la seccion de box1
y aparece la seccion box2*/
cifrar.addEventListener("click", () => {
    
    box1.classList.add("ocultar");
    box2.classList.remove("ocultar");
    const str = str1.value; //alamcena el valor del mensaje
    const offset = offset1.value; // almacena el valor del offset elegido
    const union = window.cipher.encode(offset,str); //almacena en la variabla la llamada de la funcion de JS
    document.getElementById("mensajecifrado").innerHTML = union; // Pinta el mensaje que ya se cifro en el div cifrado del HTML
    
});

/*Funcion en ES6 que al momento de hacer click en el boton decodificar oculta la seccion de box1
y aparece la seccion box3*/
descifrar.addEventListener("click", () => {
    box1.classList.add("ocultar");
    box3.classList.remove("ocultar");
    const str = str1.value; //alamcena el valor del mensaje
    const offset = offset1.value; // almacena el valor del offset elegido
    const union = window.cipher.decode(offset,str); //almacena en la variabla la llamada de la funcion de JS
    document.getElementById("mensajedescifrado").innerHTML = union; // Pinta el mensaje que ya se descifro en el div cifrado del HTML
});

/*Funcion en ES6 que al momento de hacer click en el boton regersar oculta la seccion de box2
y aparece la seccion box1*/
regresar.addEventListener("click", () => {
    box2.classList.add("ocultar");
    box1.classList.remove("ocultar");
});

/*Funcion en ES6 que al momento de hacer click en el boton regersar oculta la seccion de box3
y aparece la seccion box1*/
regresar2.addEventListener("click", () => {
    box3.classList.add("ocultar");
    box1.classList.remove("ocultar");
});