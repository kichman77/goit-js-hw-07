const ingredients = ["Картошка", "Грибы", "Чеснок", "Помидоры", "Зелень", "Приправы"];

const ingredientsList = document.querySelector("#ingredients");
//console.log(ingredientsList);

ingredients.forEach((elem) => {
  // создаем элементы
  const ingredientItem = document.createElement("li");
 // console.dir(ingredientItem);
  ingredientItem.textContent = elem;
  ingredientsList.append(ingredientItem);
  //console.log(ingredientItem);
 // console.log(elem);
});