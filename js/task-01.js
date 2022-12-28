let NumCategories = document.querySelectorAll(".item");
console.log("Number of categories:", NumCategories.length);

for (let i = 0; i < NumCategories.length; i++) {
    const element = NumCategories[i];
    console.log("Category:", NumCategories[i].firstElementChild.firstChild.textContent);
    console.log('Elements:', NumCategories[i].lastChild.previousElementSibling.children.length);
};