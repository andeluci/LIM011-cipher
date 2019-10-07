const empezar = document.getElementById('empezar');
const root = document.getElementById('root');
const cifrar = document.getElementById('cifrar');
const cifrando = document.getElementById('cifrando');
empezar.addEventListener('click', ()=>{
    root.classList.add('hide');
    cifrar.classList.remove('hide');
    cifrando.classList.remove('hide');
});

let texto = document.getElementById('ingresaContraseña'); 
let numero = document.getElementById('seguridad');
const nuevaContraseña = document.getElementById('nuevaContraseña');
let contraseñaCifrada = document.getElementById('contraseñaCifrada');
nuevaContraseña.addEventListener('click', ()=>{    
let resultado = cipher.encode(numero.value, texto.value);   
contraseñaCifrada.value= resultado;
});

let contraseña = document.getElementById('ingresaContraseña');
let desplazamiento = document.getElementById('seguridad');
const descifrarContraseña = document.getElementById('recordarContraseña');
let descubrirPalabra = document.getElementById('contraseñaCifrada');
descifrarContraseña.addEventListener('click', ()=>{
let resultado = cipher.decode(desplazamiento.value, contraseña.value);
contraseñaCifrada.value= resultado;    
}); 


