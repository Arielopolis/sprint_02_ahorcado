

var eventoLetra = event => {
    nuevaLetra = event.key.toUpperCase();
    if(nuevaLetra.match(/^[a-zñ]$/i)) {
        console.log(nuevaLetra);
        compararPalabra()
            
    };
};

function sortearPalabra(){
    imagen.src = "Imágenes/error0.png";
    botonInic.style.display = "none";
    botonAgPal.style.display = "none";
    avisoFinal.style.display = "none";
    botonDecl.style.display = "flex";
    botonAgregar.style.display = "none";
    dialogoAgPal.style.display = "none";
    cant_errores = 0;
    cant_aciertos = 0;
    palabraSorteada = palabrasSecretas[Math.floor(Math.random()*palabrasSecretas.length)].toUpperCase();
    console.log(palabraSorteada);
    
    parrafo.innerHTML = "";
    letrasUsadas.innerHTML = "";

    for(let i = 0; i < palabraSorteada.length; i++){
        var span = document.createElement("span");
        parrafo.appendChild(span)
    }
    document.addEventListener("keydown", eventoLetra);

}

function compararPalabra(){
    const letraCor = document.querySelectorAll( "#palabra span" );
    var letraInc = document.querySelectorAll( "#letrasUsadas span" );
    acierto = false;
    for(i = 0; i < palabraSorteada.length; i++){
        if( nuevaLetra == palabraSorteada[i]){
            letraCor[i].innerHTML = nuevaLetra;
            cant_aciertos++;
            acierto = true;
        }
    }

    if(acierto == false && !letrasUsadas.textContent.includes(nuevaLetra)){
        letraInc = document.createElement("span");
        letraInc.innerHTML = nuevaLetra;
        letrasUsadas.appendChild(letraInc);
        cant_errores++;
        const source = `Imágenes/error${cant_errores}.png` ;
        imagen.src = source;
    }
    var cartel = document.getElementById('aviso');

    if(cant_errores == 6){
        cartel.innerHTML = `Qué pena, la palabra era ${palabraSorteada}`;
        game_over( );
    }else if( cant_aciertos == palabraSorteada.length ){
        cartel.innerHTML = "GANASTE!!!";
        game_over( );
        
    }
}


function game_over(){
    document.removeEventListener("keydown", eventoLetra);
    botonDecl.style.display = "none";
    avisoFinal.style.display = "flex";
    botonInic.style.display = "flex";
    botonAgPal.style.display = "flex";
}

function declinar(){
    parrafo.innerHTML = "";
    document.removeEventListener("keydown", eventoLetra);
    botonDecl.style.display = "none";
    avisoFinal.style.display = "none";
    botonInic.style.display = "flex";
    botonAgPal.style.display = "flex";
}


