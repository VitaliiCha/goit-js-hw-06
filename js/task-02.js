const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]; 

const lists = document.querySelector('ul');

// for (const ingredient of ingredients) {

//   const list = document.createElement('li');
//   list.classList.add('item');
//   list.textContent = ingredient;
//   lists.append(list);
// };


const listsContent = ingredients.map(ingredient => `<li class = 'item'>${ingredient}</li>`)
  .join('');
lists.insertAdjacentHTML("beforeend" ,listsContent);
