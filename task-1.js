let list_1 = document.querySelectorAll("#categories li.item");
console.log(`В списке ${list_1.length} категории.`);
list_1.forEach((el, index) => {
  let h2 = document.querySelectorAll("h2");
  let li = document.querySelectorAll("li.item ul");
  console.log(`Категория: ${h2[index].textContent}`);
  console.log(`Количество элементов: ${li[index].children.length}`);
});