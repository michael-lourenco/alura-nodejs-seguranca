function cifraMensagem(mensagem, movimentos) {
  const caracteresDeslocados = mensagem.split("").map((caractere) => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere + movimentos);
  });
  return caracteresDeslocados.join("");
}

function decifraMensagem(mensagem, movimentos) {
  const caracteresDeslocados = mensagem.split("").map((caractere) => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere - movimentos);
  });
  return caracteresDeslocados.join("");
}

const mensagemSecreta = "minhamensagemsecreta";
const mensagemCifrada = cifraMensagem(mensagemSecreta, 3);
const mensagemDecifrada = decifraMensagem(mensagemCifrada, 3);

console.log(mensagemSecreta);
console.log(mensagemCifrada);
console.log(mensagemDecifrada);
