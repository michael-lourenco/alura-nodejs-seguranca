import jwt from 'jsonwebtoken';

const chaveSecreta = "chaveSuperSecreta";

const token = jwt.sign(
  {
    nome: "Michael",
    pais: "Brasil"
  },
  chaveSecreta
)

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta);

console.log(tokenDecodificado);
