// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const navMenuRef = document.querySelector('#categories');
console.log(`Number of categories: ${navMenuRef.children.length}`);
const itemsMenuRef = document.querySelectorAll('li.item');
itemsMenuRef.forEach((itemMenu) => {
    console.log(`Categories : ${itemMenu.firstElementChild.textContent}`);
    console.log(`Elements: ${itemMenu.lastElementChild.children.length}`);
});

