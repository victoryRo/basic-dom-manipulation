const h1     = document.querySelector("h1");
const inp1   = document.querySelector("#cal1");
const inp2   = document.querySelector("#cal2");
const btn    = document.querySelector("#btn-cal");
const result = document.getElementById("result");
const form   = document.getElementById("form");

form.addEventListener("submit", btnClick);

function btnClick(event) {
  console.log(event);
  event.preventDefault();

  const res = parseInt(inp1.value) + parseInt(inp2.value);
  result.innerText = "Result: " + res.toString();
  inp1.value = "";
  inp2.value = "";
}