const name="ovi";
const repoCount=4;
// console.log(name + repoCount +" value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const discordName= new String("lol-zzz-ZZZ");

console.log(discordName[0]);
console.log(discordName.__proto__);
console.log(discordName.length);
console.log(discordName.toUpperCase());
console.log(discordName.charAt(4));
console.log(discordName.indexOf('z'));
const newString= discordName.substring(0,4);
console.log(newString);
const anotherString= discordName.slice(-6,3);
console.log(anotherString);
const newStringOne= "    ovi   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://o.com/Abdullah al-Maruf";
console.log(url.replace(" ",'-'));
console.log(discordName.includes("x"));
console.log(discordName.split('-'));
