let letter = "a";
let breeds = [];

let container = document.querySelector("#dog-breeds");
document.addEventListener("DOMContentLoaded", function () {
  
  
  loadImages();
  loadBreeds();
});

function loadImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/20";
  fetch(imgUrl, createImage)
    .then((resp) => resp.json())
    .then((data) => filterImages(Object.values(data.message)))
    .catch((error) => console.log(error));
}

function loadBreeds() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  return fetch(breedUrl, filterBreeds)
    .then((resp) => resp.json())
    .then((data) => filterBreeds(Object.keys(data.message)));
}

function createImage(imgUrl) {
  let newImage = document.createElement("img");
  newImage.src = imgUrl;
  document.querySelector("#dog-image-container").appendChild(newImage);
}

function filterImages(images) {
  let filtered = [];
  let final2 = [];
  images.forEach((image) => filtered.push(image.split("/")));
  let final = filtered.filter(firstLetter);
  final.forEach((string) =>
    final2.push(
      `${string[0]}//${string[2]}/${string[3]}/${string[4]}/${string[5]}`
    )
  );
  final2.forEach((puppyPic) => createImage(puppyPic));
}

function reString(urlArray) {
  return `${urlArray[0]}//${urlArray[2]}/${urlArray[3]}/${urlArray[4]}/${urlArray[5]}`;
}

function firstLetter(string) {
  return string[4].charAt(0) === letter;
}

function filterBreeds(breeds) {
  let filteredBreeds = breeds.filter((breed) => breed[0] === letter);
  filteredBreeds.forEach((pup) => addBreedToList(pup));
}

function addBreedToList(entry) {
  //is it possible to make a toggle function 
  //to
  breeds.push(entry);
  let newBreedUl = document.createElement("li");
  newBreedUl.innerHTML = entry;
  document.querySelector("#dog-breeds").appendChild(newBreedUl);
}

function clearBreedList() {
  console.log(container);
  if (!!container.firstElementChild) {
    while (container.firstChild) {
      container.removeChild(container.firstElementChild);
    }
  }
  
}

function eventListenerforLetter() {
  const startsWith = document.querySelector("#breed-dropdown");
  startsWith.addEventListener("change", (e) => {
    letter = e.target.value;
  });
  //clear dog list
  loadImages()
  loadBreeds()
}