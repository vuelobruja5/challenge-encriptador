function encriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/igm, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/igm, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/igm, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/igm, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show"
    document.getElementById("botonCopiar").style.display = "inherit"

}

function desencriptar() {
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/igm, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/igm, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/igm, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/igm, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar").style.display = "show"
    document.getElementById("botonCopiar").style.display = "inherit"

}

function copiar() {
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}