//signleton
//object.create
//Object literals

const mySym=Symbol("key1");

const JsUser={
    name: "AAMOvi",
    "full name":"Abdullah Al Maruf",
    [mySym]:"myKey",
    age:21,
    email:"aamo.official@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday, Friday"]
}
// console.log(JsUser.email);
// console.log(JsUser["age"]);
// console.log("full name");
// console.log(JsUser[mySym]);

// JsUser.email= "abdullahovi.official@gmail.com";
// //Object.freeze(JsUser);
// console.log(JsUser);

JsUser.greeting= function(){
    console.log("Hello JsUser");
}
JsUser.greeting2= function(){
  console.log(`Hello JsUser ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
