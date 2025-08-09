// create load categories
const loadCategories = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error()));
};
// create display categories
const displayCategories = (categories) => {
  const categoriesContainer = document.getElementById("categories");
  categories.forEach((item) => {
    console.log(item);
    // create button
    const button = document.createElement("button");
    button.innerText = item.category;
    button.classList = "btn";
    // add button to category container
    categoriesContainer.append(button);
  });
};

loadCategories();
