// return collection of element
let h1 = document.getElementsByTagName("h1");
h1[0].innerHTML = "Code every day";
console.log(h1, h1[0], h1[0].textContent);

// return html element
let id = document.getElementById("meid");
console.log(id, id.textContent);

// return collection of element
let myclass = document.getElementsByClassName("oneClass");
console.log(myclass, myclass[0], myclass[0].textContent);

// return a node list of elements
let classIntro = document.querySelectorAll("p.intro");
console.log(classIntro, classIntro[0], classIntro[1], classIntro[0].textContent);

// returns the first element that matches and (css selectors)
let theInput = document.querySelector("input");
console.log(theInput, theInput.placeholder);
