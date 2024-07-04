const accountId =144553;
let acountEmail="xyz@gmail.com";
var accountPassword="12345"
accountCity="Rajshahi";
// accountId=2; not allowed
accountEmail="abc@gmail.com";
accountPassword="54321";
accountCity="Bogura";
let accountState;

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and function
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);