function sayMyname()
{
    console.log("O");
    console.log("v");
    console.log("I");
}
sayMyname();
function addTwoNumbers(num1,num2){
    return num1+num2;
}
const result=addTwoNumbers(3,7);
console.log("Result: ",result);

function LoginUserMessage(username="IshowSpeed")
{
    if(!username)
    {
        console.log("Please enter a username");
        return;
    }
    else return `${username} just loggedin!`
}
console.log(LoginUserMessage("Messi"));

function calculateCartPrice(val1,val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice(200,400,600,800, 1000));

const user={
    userName:"Mbappe",
    price:"120M"
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`)
}
// handleObject(user);
handleObject({
    userName: "halland",
    price: "200M"
})
const myNewarray=[200,300,400,500];
function returnArray(getArray){
    return getArray[2];
}
console.log(returnArray(myNewarray));
