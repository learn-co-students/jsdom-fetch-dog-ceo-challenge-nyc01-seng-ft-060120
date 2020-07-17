//console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {

  const url = "https://dog.ceo/api/breeds/image/random/4"
  const dogContainer = document.getElementById("dog-image-container")

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dogBreedContainer = document.getElementById("dog-breeds")

  const allBreeds = document.getElementById('dog-breeds')

  let dogsArray = []
  
  console.log(allBreeds)
  const breedLis = document.getElementsByTagName('li')
  console.log(breedLis)
  //const breedNames = breedLis.foreach(breed => breed[])
  //const breedNames = breedLis.forEach(breed => breed.innerHTML)
  //const breedArray = arrayFrom.allBreeds.childElements
  //console.log(breedLis)

  const breedDropDown = document.getElementById('breed-dropdown')

  function getImages() {
    fetch(url)
    // make request
    .then(response => response.json())
    // get some request, turn it into JSON object
    .then(dogResults => renderDogs(dogResults.message))
    // do something with request
  }

  function getBreeds() {
    fetch(breedUrl)
    .then(response => response.json())
    .then(breedResults => {
      breeds = Object.keys(breedResults.message);
      listBreeds(breeds);
      printBreeds(breeds);
      dogsArray = breeds
    })
  }

  function renderDogs(dogs) {
    dogs.forEach(dog => {
      const dogPic = document.createElement("img")
      dogPic.src=dog
      dogContainer.append(dogPic)
    })
  } 

  function listBreeds(losBreeds) {
    dogBreedContainer.innerHTML = ``
    losBreeds.forEach(breed => {
      const breedLi = document.createElement("li")
      breedLi.innerHTML = `
        ${breed}
      `
      dogBreedContainer.append(breedLi)
    })
  }

  allBreeds.addEventListener("click", (e) => {
    e.target.style.color = "red"
  })

  function printBreeds() {
    breedDropDown.addEventListener('change', (e) => {
      filterBreedsByLetter(e.target.value)
    })
  }

  function filterBreedsByLetter(letter) {
    listBreeds(dogsArray.filter(breed => breed.startsWith(letter)))
  }
  
  getImages()

  getBreeds()

})


