function checkPassword(password) {
  const oneLower = /(?=.+[a-z])/;
  const oneUpper = /(?=.+[A-Z])/;
  const oneDigit = /(?=.+[0-9])/;
  const oneSpecial = /(?=.+[!@#$%^&*])/;
  const min8 = /(?=.{8,})/;

  const isValid =
    oneLower.test(password) &&
    oneUpper.test(password) &&
    oneDigit.test(password) &&
    oneSpecial.test(password) &&
    min8.test(password);

  return isValid ? "Valid Password" : "Invalid Password";
}

console.log(checkPassword("abc"));
console.log(checkPassword("9Ab!4567"));
