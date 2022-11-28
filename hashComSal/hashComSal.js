import { scryptSync, randomBytes, timingSafeEqual } from 'crypto';


function makeHashWithSalt(password) {
  const salt = randomBytes(16).toString('hex');
  const passwordHashed = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${passwordHashed}`;
}

class User {
  constructor(name, password) {
    this.name = name;
    [this.salt, this.hash] = makeHashWithSalt(password).split(':');
  }

  authenticate(name, password) {
    if (name === this.name) {
      const hashTest = scryptSync(password, this.salt, 64);
      const realHash = Buffer.from(this.hash, 'hex');
      const hashesMatch = timingSafeEqual(hashTest,realHash);
      if(hashesMatch){
        console.log("User authenticated with success!");
        return true;
      }
    }

    console.log("User or password incorrect!");
    return false;
  }
}

console.log(makeHashWithSalt("uma String Qualquer"));

const user = new User("Michael Lourenco", "minhaSenha");

console.log(user);

console.log(user.authenticate("Michael Lourenco", "minhaSenha"));
console.log(user.authenticate("Michael Lourenc", "minhaSenha"));
console.log(user.authenticate("Michael Lourenco", "minha senha"));
