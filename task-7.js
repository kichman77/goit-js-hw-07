const input = document.getElementById("font-size-control");
console.log(input);
const span = document.getElementById("text");
console.log(span);
input.addEventListener("input", () => {
  // console.dir(input);
  // console.log(input.value);
  span.style.fontSize = input.value + "px";
});