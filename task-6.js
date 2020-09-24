
const valInput = document.querySelector('#validation-input');
const pClass = document.createElement('p');
const createAllert = (el, className, msg) => {
  el.classList.add(className)
  el.textContent = msg;
  valInput.after(el);
}
const removeAlert = (el, className) => {
  el.classList.remove(className);
  el.textContent = '';
}
// createAllert(pClass, 'valid', 'Запонено неверно!!!');
console.log(pClass);
// console.dir(valInput);
let length = Number(valInput.dataset.length);
// console.log(length);
// valInput.classList.add('invalid');
valInput.addEventListener('blur', () => {
  // console.log(valInput.value);
  let textLength = valInput.value.length;
  // console.log(typeof length,length, typeof textLength, textLength);
  // console.log(length === textLength);
  // console.log(length == textLength);
  if (length === textLength) {
    valInput.classList.add('valid');
    valInput.classList.remove('invalid');
    removeAlert(pClass, 'js-msg-invalid');
    createAllert(pClass, 'js-msg-valid', 'Заполнено верно!!!');
  } else {
    valInput.classList.add('invalid')
    valInput.classList.remove('valid')
    removeAlert(pClass, 'js-msg-valid')
    createAllert(pClass, 'js-msg-invalid', 'Заполнено неверно!!!');
  }
});