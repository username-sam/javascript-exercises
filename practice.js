let str  =  "ami moga"
// let f = str[0].toUpperCase()
// let s = str.slice(1)
// let final = f + s;
// console.log(final);
let lama = [] 
let spitter = str.split(" ")
// console.log(spitter[1].length);
for(let i = 0 ; i <= spitter.length - 1 ; i++){
   lama.push(spitter[i][0].toUpperCase()+spitter[i].slice(1)) 
}
let final = lama.join(" ")
console.log(final);