let count;
const boxRefs = {
  div: document.getElementById("boxes"),
  input: document.querySelector('[type="number"]'),
  renderButton: document.querySelector('[data-action="render"]'),
  destroyButton: document.querySelector('[data-action="destroy"]'),
};
console.log(boxRefs);

boxRefs.input.addEventListener("change", () => {
  console.log(typeof boxRefs.input.value);

  count = boxRefs.input.value;
  return count;
});
console.log(count);
boxRefs.renderButton.addEventListener("click", () => {
  createBoxes(count);
});

boxRefs.destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  let size = 30;
  const colorBox = document.createElement("div");
  colorBox.style.width = size + "px";
  colorBox.style.height = size + "px";

  for (let i = 1; i <= amount; i++) {
    console.log(i);
    size += 10;
    const colorBox = document.createElement("div");
    colorBox.style.width = size + "px";
    colorBox.style.height = size + "px";

    let color = createRgb();
    colorBox.style.backgroundColor = color;

    boxRefs.div.append(colorBox);
  }
}

function destroyBoxes() {
  boxRefs.div.innerHTML = "";
  boxRefs.input.value = "";
}

function createRgb() {
  const red = Math.round(Math.random() * 255);
  // console.log(red);
  const green = Math.round(Math.random() * 255);
  // console.log(green);
  const blue = Math.round(Math.random() * 255);
  // console.log(blue);

  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
