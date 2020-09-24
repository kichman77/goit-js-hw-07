const input = document.getElementById('name-input');
const span = document.getElementById('name-output');
// console.log(input);
// console.log(span);
input.addEventListener('input', () => {
  // console.log(input.value);
  span.textContent = input.value;
  if (input.value === '') span.textContent = 'незнакомец'
});