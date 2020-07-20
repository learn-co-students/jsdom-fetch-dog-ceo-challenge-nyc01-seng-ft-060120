console.log('%c HI', 'color: pink')

document.addEventListener("DOMContentLoaded", () => {

  // VARIABLES
  const dogBreedUl = document.getElementById("dog-breeds")
  const dogImgContainer = document.getElementById("dog-image-container")
  const dogDropDown = document.getElementById("breed-dropdown")

  // FETCH REQUESTS
  function fetchImgs(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then (response => response.json())
    .then (imgs => renderImg(imgs))
  }

  function fetchBreeds(){
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then (response => response.json())
    .then (breeds => {breedArray = Object.keys(breeds.message);
      renderBreeds(breedArray);
      dropDownClick(breedArray)
  })
  }

  // EVENT LISTENERS
  const breedClick = () => {
    dogBreedUl.addEventListener('click', function(e){
      e.target.style.color = '#F806CF'
    })
  }

  const dropDownClick = (breedArray) => {
    dogDropDown.addEventListener("change", function (e){
      filterBreeds(e.target.value)
    })
    function filterBreeds(letter){
      let a = breedArray
      const filtered = a.filter(breed => breed.startsWith(letter));
      renderBreeds(filtered)
    }
  }

  // FUNCTIONS
  function renderImg(images){
    images.message.forEach(image => {
     const imgElement = document.createElement("img")
     imgElement.src = image
     dogImgContainer.append(imgElement)
    });
  }

  function renderBreeds(breedArray){
    dogBreedUl.innerHTML = ''
    dogBreedUl.id = "dog-breeds"
    breedArray.forEach(breed => {
      const breedElement = document.createElement("li")
      breedElement.innerHTML = breed
      dogBreedUl.append(breedElement)
      breedElement.style.cursor = 'pointer'
    })
  }

  // EXECUTIONS 
  dropDownClick()
  breedClick()
  fetchImgs()
  fetchBreeds()

})
