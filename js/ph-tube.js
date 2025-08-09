// create load categories
const loadCategories = () => {
  // fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error()));
};
// create load videos
const loadVideos = () => {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));
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
// create display videos
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("videos");
  videos.forEach((video) => {
    const card = document.createElement("div");
    card.classList = "card card-compact";
    card.innerHTML = `
    <figure class="h-[200px]">
    <img
      src="${video.thumbnail}"
      alt="Shoes" class='w-full h-full object-cover'/>
  </figure>
  <div class="flex gap-2 px-0 py-2">
    <div>
        <img class="w-10 h-10 rounded-full object-cover" src="${video.authors[0].profile_picture}"/>
    </div>
    <div>
        <h2 class="font-bold">${video.title}</h2>
         <div class="flex gap-2 items-center">
        <div><p class="text-gray-400">${video.authors[0].profile_name}</p></div>
        <div> <img class="w-5" src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000"/></div>
    </div>
    </div>
   
  </.div>
    `;
    videoContainer.append(card);
  });
};

loadCategories();
loadVideos();
