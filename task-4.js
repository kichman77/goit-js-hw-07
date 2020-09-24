const counterRefs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  counterSpan: document.querySelector("#value"),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

// console.log(counterRefs);
let counterValue = 0;
counterRefs.counterSpan.textContent = counterValue;
counterRefs.decrementBtn.addEventListener("click", () => {
  if (counterValue > 0) {
    // console.log(counterValue);
    counterValue -= 1;
    // console.log(counterValue);
    counterRefs.counterSpan.textContent = counterValue;
  }
});

counterRefs.incrementBtn.addEventListener("click", () => {
  // console.log(counterValue);
  counterValue += 1;
  // console.log(counterValue);
  counterRefs.counterSpan.textContent = counterValue;
});
