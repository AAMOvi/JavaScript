// Primitive(call by value)
//7 types: string, Number, Boolean, Null, undefined, Symbol, BigInt
// Reference (Non-Primitive)
//Array, Objects, Functions
bigNumber=1234567891234n;
const id= Symbol('123');
const anotherId= Symbol('123');
console.log(id==anotherId);
const heros=["super-man","bat-man","spider-man" ];
let myObj={
    name: "Ovi",
    age: 21,
}
const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof id);

//stack(Primitve), Heap(Non-Primitive)

let myName="abdullah al maruf"
let anotherName=myName;
anotherName="ovi";

console.log(myName);
console.log(anotherName);
let userOne={
    email:"user@gmail.com",
    bkash:"12345",
}
let userTwo=userOne;
userTwo.bkash="98760"
console.log(userOne.bkash);
console.log(userOne.bkash);