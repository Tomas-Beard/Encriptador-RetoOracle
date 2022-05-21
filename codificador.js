var mensaje = "";
var resultado = "";
var encripter = [];

function getInputValue() {
  mensaje = "";
  var inputVal = document.getElementById("codigo").value;
  mensaje = inputVal;
}

function encriptador() {
  getInputValue();
  for (let index = 0; index <= mensaje.length; index++) {
    var separador = mensaje.slice(index, index + 1);
    if (separador == "a") {
      separador = "ai";
    } else if (separador == "o") {
      separador = "ober";
    } else if (separador == "e") {
      separador = "enter";
    } else if (separador == "i") {
      separador = "imes";
    } else if (separador == "u") {
      separador = "ufat";
    } else {
      separador = separador;
    }

    encripter.push(separador);
  }
  resultado = encripter.join("").toString();
  // document.write(`la palabra ${resultado} es un ${typeof resultado}`);
  document.getElementById("respuesta").textContent = resultado;
  document.getElementById("resultArea").style.backgroundImage = "none";
  document.getElementById("resultArea").style.background =
    "rgba(237, 235, 234, 1)";
  encripter = [];
}

function desencriptar() {
  getInputValue();
  for (let index = 0; index <= mensaje.length; index++) {
    var corte = index + 1;
    var separador = mensaje.slice(index, corte);
    if (separador == "a") {
      corte = corte + 1;
      index = index + 1;
    } else if (separador == "o") {
      corte = corte + 3;
      index = index + 3;
    } else if (separador == "e") {
      corte = corte + 4;
      index = index + 4;
    } else if (separador == "i") {
      corte = corte + 3;
      index = index + 3;
    } else if (separador == "u") {
      corte = corte + 3;
      index = index + 3;
    } else {
      separador = separador;
    }
    encripter.push(separador);
  }
  resultado = encripter.join("").toString();
  document.getElementById("resultArea").style.backgroundImage = "none";
  document.getElementById("resultArea").style.background =
    "rgba(237, 235, 234, 1)";
  document.getElementById("respuesta").textContent = resultado;
  encripter = [];
}

function copiar() {
  var copiebutton = document.getElementById("copy");
  copiebutton.addEventListener(
    "click",
    alert("El mensaje secreto se ha Copiado!")
  );
  var result = document.getElementById("respuesta").textContent;
  navigator.clipboard.writeText(result);
}
