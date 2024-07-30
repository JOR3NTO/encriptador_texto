/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

document.querySelector('.btn_copiar').style.display = 'none';

function encriptar() {
    let texto = document.getElementById("texto").value;
    
    console.log(texto);
    let titulo_mensaje = document.getElementById("titulo_mensaje");
    let p = document.getElementById("parrafo");  
    let parrafo_encriptado = document.getElementById("parrafo_desencriptado");  

    let texto_cifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");                          
    
    if(texto.length != 0){
        document.getElementById('parrafo_desencriptado').style.display = 'block';
        titulo_mensaje.textContent = "Texto encriptado con éxito";
        p.textContent = "";
        parrafo_encriptado.textContent = texto_cifrado;
        console.log(parrafo_encriptado);
        
        document.querySelector('.btn_copiar').style.display = 'block';
        document.getElementById("muñeco").style.display = 'none';

    }else{
        
        document.querySelector('.btn_copiar').style.display = 'none';
        document.getElementById("muñeco").style.display ='block';
        document.getElementById('parrafo_desencriptado').style.display = 'none';

        titulo_mensaje.textContent = "Ningún mensaje fue encontrado";
        p.textContent = "Ingrese el texto que desee encriptar o desencriptar"; 
        alert("Debes ingresar algún texto");

    }
}


function desencriptar() {
    let texto = document.getElementById("texto").value;
    let titulo_mensaje = document.getElementById("titulo_mensaje");
    let p = document.getElementById("parrafo");    
    let parrafo_encriptado = document.getElementById("parrafo_desencriptado");

    let texto_cifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");                          
    
    if(texto.length != 0){
        document.getElementById('parrafo_desencriptado').style.display = 'block';
        titulo_mensaje.textContent = "Texto desencriptado con éxito";
        p.textContent = "";
        parrafo_encriptado.textContent = texto_cifrado;
        document.querySelector('.btn_copiar').style.display = 'block';
        document.getElementById("muñeco").style.display = 'none';

    }else{
        document.querySelector('.btn_copiar').style.display = 'none';
        document.getElementById("muñeco").style.display ='block';
        document.getElementById('parrafo_desencriptado').style.display = 'none';

        titulo_mensaje.textContent = "Ningún mensaje fue encontrado";
        p.textContent = "Ingrese el texto que desee encriptar o desencriptar"; 
        
        alert("Debes ingresar algún texto");

    }
}
function copiar() {

    const parrafo = document.getElementById('parrafo').innerText;
            
    // Crear un textarea temporal para copiar el texto
    const textarea = document.createElement('textarea');
    textarea.value = parrafo;
    document.body.appendChild(textarea);
    // Seleccionar y copiar el texto
    textarea.select();
    document.execCommand('copy');
            
    // Eliminar el textarea temporal
    document.body.removeChild(textarea);
            
    // Opcional: Notificación de que el texto fue copiado
    alert('Texto copiado: ' + parrafo);
    
}