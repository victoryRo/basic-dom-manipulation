function log(elem) {
    console.log(elem)
}
const names = ["maia", "susana", "juliana", "pepita"];

let one = names.push("victor");
console.log(`one push() ${one}`);
console.log(`names: ${names}`);
console.log("----------------------------------------------");

let two = names.pop();
console.log(`two pop() ${two}`);
console.log(`names: ${names}`);
console.log("----------------------------------------------");

let three = names.shift();
console.log(`three shift() ${three}`);
console.log(`names: ${names}`);
console.log("----------------------------------------------");


let four = names.unshift("mary", "victor");
console.log(`four unshift() ${four}`);
console.log(`names: ${names}`);
console.log("----------------------------------------------");


let five = names.concat("josefa");
console.log(`five concat() ${five}`);
console.log(`names: ${names}`);
console.log("----------------------------------------------");

let six = names.join(" - ");
console.log(`six join() ${six}`);
console.log(`names: ${names}`);
console.log("----------------------------------------------");

let seven = names.slice(2, 4);
console.log(`seven slice() ${seven}`)
console.log(`names: ${names}`);
console.log("----------------------------------------------");

let eight = names.indexOf("susana");
console.log(`eight indexOf() ${eight}`);
console.log(`names: ${names}`);
console.log("----------------------------------------------");

let nine = names.includes("victor");
console.log(`nine includes() ${nine}`);
console.log(`names: ${names}`);
console.log("----------------------------------------------");

const numbers = [1, 2, 3, 4, 5];

let ten = numbers.find((e) => {
    return e > 4;
});
console.log(`ten find() ${ten}`);
console.log(`numbers: ${numbers}`);
console.log("----------------------------------------------");

let eleven = numbers.findIndex((e) => e === 2);
console.log(`ten find() ${ten}`);
console.log(`numbers: ${numbers}`);
console.log("----------------------------------------------");

let twelve = numbers.map((e) => e * 2);
console.log(`twelve map() ${twelve}`);
console.log(`numbers: ${numbers}`);
console.log("----------------------------------------------");

let thirteen = numbers.filter((e) => e % 2 === 0);
console.log(`thirteen filter() ${thirteen}`);
console.log(`numbers: ${numbers}`);
console.log("----------------------------------------------");

let fourteen = numbers.reduce((pre, curr) => pre + curr);
console.log(`fourteen reduce() ${fourteen}`);
console.log(`numbers: ${numbers}`);
console.log("----------------------------------------------");

let fifteen = numbers.every((e) => e < 10);
console.log(`fifteen every() ${fifteen}`);
console.log(`numbers: ${numbers}`);
console.log("----------------------------------------------");

let sixteen = numbers.some((e) => e > 10);
console.log(`sixteen some() ${sixteen}`);
console.log(`numbers: ${numbers}`);
console.log("----------------------------------------------");

let seventeen = numbers.reverse()
console.log(`seventeen reverse() ${seventeen}`);
console.log(`numbers: ${numbers}`);
console.log("----------------------------------------------");

let eighteen = numbers.at(-2)
console.log(`eighteen at() ${eighteen}`);
console.log(`numbers: ${numbers}`);
console.log("----------------------------------------------");

