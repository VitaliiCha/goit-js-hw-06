const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]; for (const ingredient of ingredients) {

  const list = document.createElement('li');
  list.classList.add('item');
  list.textContent = ingredient;
 
  const lists = document.querySelector('ul');
  lists.prepend(list);

  console.log(list);
};