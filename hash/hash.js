import { createHash } from "crypto";

function makeHash(password) {
  return createHash("sha256").update(password).digest("hex");
}

class User {
  constructor(name, password) {
    this.name = name;
    this.hash = makeHash(password);
  }

  authenticate(name, password) {
    if (name == this.name && this.hash === makeHash(password)) {
      console.log("User authenticated with success!");
      return true;
    }

    console.log("User or password incorrect!");
    return false;
  }
}

console.log(makeHash("uma String Qualquer"));

const user = new User("Michael Lourenco", "minhaSenha");

console.log(user);

console.log(user.authenticate("Michael Lourenco", "minhaSenha"));
console.log(user.authenticate("Michael Lourenc", "minhaSenha"));
console.log(user.authenticate("Michael Lourenco", "minha senha"));
