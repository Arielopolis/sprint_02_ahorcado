var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var asunto = document.getElementById('asunto');
var mensaje = document.getElementById('mensagem');
var error = document.getElementById('mensError');
var form = document.getElementById('form');
var emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;


form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    var mensajesError = [];

    if (nombre.value === null || nombre.value === '') {
        mensajesError.push('Escribe tu nombre');
        nombre.style.backgroundColor = '#ffcccb';
    }
    if (email.value === null || email.value === '') {
        mensajesError.push('Escribe tu dirección de E-mail')
        email.style.backgroundColor = '#ffcccb';

    }else{
        if(emailRegex.test(email.value)){
            console.log('ok')
        }else{
            email.style.backgroundColor = '#ffcccb';
            mensajesError.push('Formato de E-mail incorrecto')
        }
    }
    if (asunto.value === null || asunto.value === '' ){
        mensajesError.push('Dinos el asunto de tu mensaje')
        asunto.style.backgroundColor = '#ffcccb';
    }
    if (mensaje.value === null || mensaje.value === ''){
        mensajesError.push('Escribenos un breve texto')
        mensaje.style.backgroundColor = '#ffcccb';
    }

    error.innerHTML = mensajesError.join('<br>');

})
