const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


const addNameEl = ingredients.map(option => {
  const newEl = document.createElement('li');
  newEl.classList.add('item');
  newEl.textContent = option;
  
  return newEl;
});
// console.log(addNameEl);
const addItemsEl = document.querySelector('#ingredients');
addItemsEl.append(...addNameEl);
// console.log(addItemsEl);