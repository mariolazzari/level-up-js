const username = Symbol("username");
const password = Symbol("password");

const user = {
  [username]: "mario",
  [password]: "1234566",
  age: 27,
};

console.log(user.username); // undefined
console.log(user.password); // undefined
console.log(user[username]); // mario
