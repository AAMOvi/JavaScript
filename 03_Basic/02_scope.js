var c=300;
let a =300;
if (true){
    let a=10;
    const b=20;
    console.log("Inner: ",a);
}
// { scope }

console.log(a);
// console.log(b);
console.log(c);

function one(){
    const username="ronaldo";

    function two(){
        const website="Youtube";
        console.log(username);
    }
}
// interesting

AddOne(4);
function AddOne(num)
{
    return num+1;
}
// AddTwo(6) it won't work
const AddTwo=function (num)
{
    return num+2;
}
