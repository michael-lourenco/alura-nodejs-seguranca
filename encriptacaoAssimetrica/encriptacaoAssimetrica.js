import { generateKeyPairSync, privateDecrypt, publicDecrypt, publicEncrypt } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
})

// console.log(publicKey);
// console.log(privateKey);

const dadosCriptografados = publicEncrypt(publicKey, Buffer.from("Mensagem super secreta"))

console.log(dadosCriptografados.toString('hex'));
// --- Transmissão----

const dadosDescifrados = privateDecrypt(privateKey, dadosCriptografados);

console.log(`Dados descrifrados: ${dadosDescifrados}`);