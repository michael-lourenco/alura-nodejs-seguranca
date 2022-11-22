const mensagemSecreta = "minhamensagemsecreta";

console.log(mensagemSecreta);

function cifraMensagem(mensagem, movimentos) {
  const mensagemCifrada = mensagem.split('').map(caractere => {
    const codigoCaractere = caractere.charCodeAt(0);
    return String.fromCharCode(codigoCaractere + movimentos);
  });
  return mensagemCifrada.join('');
}

console.log(cifraMensagem(mensagemSecreta, 3));