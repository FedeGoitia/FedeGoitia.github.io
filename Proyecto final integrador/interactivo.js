const icono1 = document.querySelector(".icn1");
const icono2 = document.querySelector(".icn2");
const icono3 = document.querySelector(".icn3");
const icono4 = document.querySelector(".icn4");
const icono5 = document.querySelector(".icn5");
const icono6 = document.querySelector(".icn6");

const email = document.querySelector(".email");
const nombre = document.querySelector(".nombre-usuario");
const nacimiento = document.querySelector(".nacimiento");
const direccion = document.querySelector(".direccion");
const telefono = document.querySelector(".telefono");
const password = document.querySelector(".password");

icono1.addEventListener("mouseover", interaccionNombre);
icono2.addEventListener("mouseover", interaccionEmail);
icono3.addEventListener("mouseover", interaccionNacimiento);
icono4.addEventListener("mouseover", interaccionDireccion);
icono5.addEventListener("mouseover", interaccionTelefono);
icono6.addEventListener("mouseover", interaccionPassword);

function interaccionEmail(){
email.style.display = "block";
nombre.style.display = "none";
nacimiento.style.display = "none";
direccion.style.display = "none";
telefono.style.display = "none";             
password.style.diplay = "none";
}   

function interaccionNombre(){
email.style.display = "none";
nombre.style.display= "block";
nacimiento.style.display= "none";
direccion.style.display= "none";
telefono.style.display= "none";
password.style.display = "none";
}

function interaccionNacimiento(){
    email.style.display = "none";
    nombre.style.display = "none"; 
    nacimiento.style.display = "block";
    direccion.style.display = "none";
    telefono.style.display = "none";
    password.style.display = "none";
}

function interaccionDireccion(){
    email.style.display = "none";
    nombre.style.display = "none";
    nacimiento.style.display = "none";
    direccion.style.display = "block";
    telefono.style.display = "none";
    password.style.display = "none";
}       

function interaccionTelefono(){
    email.style.display = "none";
    nombre.style.display = "none";
    nacimiento.style.display = "none";
    direccion.style.display = "none";
    telefono.style.display = "block";
    password.style.display = "none";
}

function interaccionPassword(){
    email.style.display = "none";
    nombre.style.display = "none";
    nacimiento.style.display = "none";
    direccion.style.display = "none";
    telefono.style.display = "none";
    password.style.display = "block";
}