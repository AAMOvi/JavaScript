const fav_Player=["messi","Neymar","Alveraz"];
const rival_Player=["Penaldo","Embobies","Halaund"];

fav_Player.push(rival_Player);

console.log(fav_Player);
console.log(fav_Player[3][1]);

const all_player=fav_Player.concat(rival_Player);
console.log(all_player);
const new_All_Player=[...fav_Player, ...rival_Player];
console.log(new_All_Player);

const another_array=[1,2,3,[4,5,6],7[6,7,[4,5]]];
const real_another_array= another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("AAMOvi"));
console.log(Array.from("AAMOvi"));
let score1=99;
let score2=94;
let score3=40;
console.log(Array.of(score1,score2,score3));