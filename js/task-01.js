const NumCategories = document.querySelectorAll(".item");
console.log("Number of categories:", NumCategories.length);


console.log("Category:", NumCategories[0].firstElementChild.firstChild.textContent);
console.log('Elements:', NumCategories[0].lastChild.previousElementSibling.children.length)

console.log("Category:", NumCategories[1].firstElementChild.firstChild.textContent);
console.log('Elements:', NumCategories[1].lastChild.previousElementSibling.children.length)

console.log("Category:", NumCategories[2].firstElementChild.firstChild.textContent);
console.log('Elements:', NumCategories[2].lastChild.previousElementSibling.children.length);