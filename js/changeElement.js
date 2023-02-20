const par = document.querySelectorAll(".changeElement p");
console.log(par, par[1].innerHTML = "how are you today?", par[0]);

let subTitle = document.querySelector("#sub");
let title =subTitle.getAttribute("title");
console.log(subTitle, title);

let parr = document.querySelectorAll(".changeElement p")[0];
console.log(parr);
parr.setAttribute("title", "angela");

const sm = document.getElementsByTagName("small");
console.log(sm, sm[0]);
sm[0].classList.add("color"); // also remove() toggle(event) contains(bool)
const color = sm[0].style.color = "blue";
document.getElementsByClassName("color")[0].style.fontSize = "20px";
console.log("------------------------------------------");

const ipt = document.querySelector("input");
console.log(ipt);
ipt.value = "jesus";
console.log("------------------------------------------");

const img = document.createElement("img");
console.log(img);
img.setAttribute("src", "../practice/assets/rubia_1.png");
img.setAttribute("alt", "beauty");
img.style.width = "250px";

const elem = document.getElementsByClassName("changeElement")[0];
elem.append(img);

ipt.remove(); // delete input