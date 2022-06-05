function accederAgPalabra(){
    botonAgregar.style.display = "flex";
    dialogoAgPal.style.display = "flex";
    botonAgPal.style.display = "none";
    avisoFinal.style.display = "none";
    botonAgregar.addEventListener("click", agregarPalabra)
}

var aceptado = false;
function agregarPalabra(){
    var palaAgregar = document.getElementById("inPal").value;
    for(i = 0; i<palaAgregar.length; i++){
        if (palaAgregar[i].match(/^[A-ZÑ]$/i)){
            console.log(palaAgregar);
            aceptado = true;
            console.log(aceptado);
        }
        if (!palaAgregar[i].match(/^[A-ZÑ]$/i)){
            aceptado = false;
            alert(`Caracter ${palaAgregar[i]} no válido`);
            accederAgPalabra();
            document.getElementById("inPal").value = "";
            console.log(aceptado);
        }

    }
    if(aceptado == true){
        palabrasSecretas.push(palaAgregar);
        console.log(palabrasSecretas);
        document.getElementById("inPal").value = "";
        botonAgregar.style.display = "none";
        dialogoAgPal.style.display = "none";
        botonAgPal.style.display = "flex";
    
    }else {
        console.log(palabrasSecretas);
        accederAgPalabra();
    }
}