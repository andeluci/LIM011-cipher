const empezar = document.getElementById('empezar');
const root = document.getElementById('root');
const cifrar = document.getElementById('cifrar');
const cifrando = document.getElementById('cifrando');
const contenedor2 = document.getElementById('contenedor2');
empezar.addEventListener('click', ()=>{
    root.classList.add('hide');
    cifrar.classList.remove('hide');
    cifrando.classList.remove('hide');
    contenedor2.classList.remove('hide');
});

const nuevaContraseña = document.getElementById('nuevaContraseña');
nuevaContraseña.addEventListener('click', ()=>{
    let string = document.getElementById('ingresaContraseña').value; 
    let offset = document.getElementById('seguridad').value;  
    window.cipher.encode(offset, string); 
    document.getElementById('contraseñaCifrada').innerHTML = window.cipher.encode(offset, string);
}); 

const descifrarContraseña = document.getElementById('recordarContraseña');
descifrarContraseña.addEventListener('click', () => {
    let string = document.getElementById('ingresaContraseña').value;
    let offset = document.getElementById('seguridad').value;
    window.cipher.decode(offset, string);
    document.getElementById('contraseñaCifrada').innerHTML = window.cipher.decode(offset, string); 
});

const logoCentrar = document.getElementById('logoCentrar');
logoCentrar.addEventListener('click', () => {
    root.classList.remove('hide');
    cifrar.classList.add('hide');
    cifrando.classList.add('hide');
    contenedor2.classList.add('hide');
    document.getElementById('seguridad').value='';
    document.getElementById('ingresaContraseña').value='';
    document.getElementById('contraseñaCifrada').value='';
})

const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', () => { 
    document.getElementById('seguridad').value='';
    document.getElementById('ingresaContraseña').value='';
    document.getElementById('contraseñaCifrada').value='';
       
});

const regresar = document.getElementById('regresar');
regresar.addEventListener('click', () => {
    root.classList.remove('hide');
    cifrar.classList.add('hide');
    cifrando.classList.add('hide');
    contenedor2.classList.add('hide');
    document.getElementById('seguridad').value='';
    document.getElementById('ingresaContraseña').value='';
    document.getElementById('contraseñaCifrada').value='';
});

/*const nuevaContraseña = document.getElementById('nuevaContraseña');
let contraseñaCifrada = document.getElementById('contraseñaCifrada');
nuevaContraseña.addEventListener('click', ()=>{    
let respuesta = cipher.encode(numero.value, texto.value);   
contraseñaCifrada.value= respuesta;
});*/

/*let contraseña = document.getElementById('ingresaContraseña');
let desplazamiento = document.getElementById('seguridad');
const descifrarContraseña = document.getElementById('recordarContraseña');
let contraseñaDescifrada = document.getElementById('contraseñaCifrada');
descifrarContraseña.addEventListener('click', ()=>{
let resultado = cipher.decode(desplazamiento.value, contraseña.value);
contraseñaDescifrada.value= resultado;    
}); */

