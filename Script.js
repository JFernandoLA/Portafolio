const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encpritarBtn = document.getElementById('encriptar-btn');
const desencriptarBtn = document.getElementById('desencriptar-btn');
const copiarBtn = document.getElementById('copiar-btn');
const resetBtn = document.getElementById('reset-btn');

function encriptarTexto() {
  const text = inputText.value;
  const encriptado = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
  outputText.value = encriptado;
  inputText.value = "";
  //inputText.disabled = true;
  //encpritarBtn.style.display = "none";
  //desencriptarBtn.style.display = "inline-block";
}

function desencriptarText() {
  const text = inputText.value;
  const desencriptado = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
  outputText.value = desencriptado;
  inputText.value = "";
  //inputText.disabled = false;
  //encpritarBtn.style.display = 'inline-block';
  //desencriptarBtn.style.display = 'none';
}

function copiarText() {
  outputText.select();
  document.execCommand('copy');
}

function resetText() {
  outputText.value = "";
  inputText.value = "";
}

encpritarBtn.addEventListener("click", encriptarTexto);
desencriptarBtn.addEventListener("click", desencriptarText);
copiarBtn.addEventListener("click", copiarText);
resetBtn.addEventListener("click", resetText);