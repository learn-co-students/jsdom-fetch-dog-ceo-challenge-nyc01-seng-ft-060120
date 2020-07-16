document.addEventListener('DOMContentLoaded', () => {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const dogBreedContainer = document.getElementById('dog-breeds');
  let breeds = [];

  // Sorting event
  document.getElementById('breed-dropdown').addEventListener('change', sortDogList);

  // Get dog images and load them into container
  fetch(imgUrl).then((response) => {return response.json()})
    .then(data => {
    data.message.forEach((src, i) => {
      createImage(src, 'dog-image-container');
    });
  })
  // Get breeds and load them into container and fill the array
  fetch(breedUrl).then((response) => {return response.json()})
    .then(data => {
    for (let breed in data.message) {
      breeds.push(breed);
      addBreed(breed);
    }
  })

  function sortDogList(event) {
    // Filter the "const" global breed array without mutating it
    let letter = event.target.value;
    let sorted_breeds = breeds.filter(breed => breed.startsWith(letter))
    dogBreedContainer.innerHTML = '';

    for (let breed of sorted_breeds) {
      addBreed(breed)
    }
  }

  function addBreed(breed) {
    // Create the li element and assign it an event of click
    const liElement = document.createElement('li');
    liElement.addEventListener('click', () => {liElement.style.color = 'red'});
    liElement.textContent = breed;

    dogBreedContainer.appendChild(liElement);
  }

  function createImage(src, elementId) {
    const imageElement = document.createElement('img');
    imageElement.src = src;

    document.getElementById(elementId).appendChild(imageElement)
  }
})
