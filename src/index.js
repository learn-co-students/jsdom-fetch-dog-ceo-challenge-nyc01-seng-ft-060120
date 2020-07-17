console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {


  function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(res=> res.json())
      .then(results => {
        results.message.forEach(image => addImage(image))
      });
    }

    function addImage(image) {
      let container = document.getElementById("dog-image-container")
      let imageElement = document.createElement('img');
      imageElement.src = image;
      container.appendChild(imageElement);
    }

    function fetchBreeds() {
      const breedUrl = 'https://dog.ceo/api/breeds/list/all'
      fetch(breedUrl)
        .then(res => res.json())
        .then(results => {
          breeds = Object.keys(results.message);
          breeds.forEach(breed => addBreed(breed));
        });
    }

    function addBreed(breed) {
      let list = document.getElementById("dog-breeds");
      let li = document.createElement("li");
      li.innerText = breed;
      list.appendChild(li);
      li.addEventListener("click", updateColor);
    }

    function updateColor(event) {
      event.target.style.color = 'purple';
    }

    function filterBreeds(letter) {
      let breedDropdown = document.getElementById('breed-dropbown')
      breedDropdown.addEventListener('change', function(e){
        selectBreedsStartingWith(e.target.value);
      });
    }


    fetchImages();
    fetchBreeds();
});