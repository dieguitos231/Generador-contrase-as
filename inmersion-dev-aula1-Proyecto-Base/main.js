let  cantidad =document.getElementById('cantidad');
let boton=document.getElementById('generar');
let contrasena=document.getElementById('contrasena');

const cadena_caracteres='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

function generar(){
    let numeroDigitado =parseInt (cantidad.value)
    if(numeroDigitado < 8 ){
        alert('La cantidad de caracteres tiene que  ser mayor que 8')
    };
    let password='';
    for (let i =0 ;i < numeroDigitado;i++){

        let caracteraleatorio =cadena_caracteres[Math.floor(Math.random()*cadena_caracteres.length)];
        password+=caracteraleatorio;
    }
    contrasena.value=password;

}
function limpiar(){

}











