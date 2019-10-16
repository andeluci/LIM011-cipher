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

const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', () => { 
    document.getElementById('seguridad1').reset();
    document.getElementById('ingresaContraseña1').reset();
    document.getElementById('contraseñaCifrada2').reset();
});

const regresar = document.getElementById('regresar');
regresar.addEventListener('click', () => {
    root.classList.remove('hide');
    cifrar.classList.add('hide');
    cifrando.classList.add('hide');
    contenedor2.classList.add('hide');
    document.getElementById('seguridad1').reset();
    document.getElementById('ingresaContraseña1').reset();
    document.getElementById('contraseñaCifrada2').reset();
});

const logoCentrar = document.getElementById('logoCentrar');
logoCentrar.addEventListener('click', () => {
    root.classList.remove('hide');
    cifrar.classList.add('hide');
    cifrando.classList.add('hide');
    contenedor2.classList.add('hide');
    document.getElementById('seguridad1').reset();
    document.getElementById('ingresaContraseña1').reset();
    document.getElementById('contraseñaCifrada2').reset();
});

const nuevaContraseña = document.getElementById('nuevaContraseña');
nuevaContraseña.addEventListener('click', ()=>{
    let string = document.getElementById('ingresaContraseña').value; 
    let offset = document.getElementById('seguridad').value;  
    window.cipher.encode(offset, string); 
    document.getElementById('contraseñaCifrada').value = window.cipher.encode(offset, string);
}); 

const descifrarContraseña = document.getElementById('recordarContraseña');
descifrarContraseña.addEventListener('click', () => {
    let string = document.getElementById('ingresaContraseña').value;
    let offset = document.getElementById('seguridad').value;
    window.cipher.decode(offset, string);
    document.getElementById('contraseñaCifrada').value = window.cipher.decode(offset, string); 
});


    