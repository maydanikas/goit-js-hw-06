const getLiItems = document.querySelectorAll(`li.item`);
console.log(`Number of categories: ${getLiItems.length}`);

console.dir(getLiItems);
// console.dir(getLiItems[0].firstElementChild.textContent);
getLiItems.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);

  console.log(`Elements: ${item.lastElementChild.children.length}`);
});

//
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в
// консоль текст заголовку елемента(тегу < h2 >) і кількість елементів в
// категорії(усіх < li >, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості
// навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5
