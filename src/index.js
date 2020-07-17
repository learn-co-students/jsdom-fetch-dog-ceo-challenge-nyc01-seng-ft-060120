//console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {

  const url = "https://dog.ceo/api/breeds/image/random/4"
  const dogContainer = document.getElementById("dog-image-container")

  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  const dogBreedContainer = document.getElementById("dog-breeds")

  const allBreeds = document.getElementById('dog-breeds')
  
  console.log(allBreeds.children)
 // const breedLis = document.getElementsByTagName('li').innerHTML

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


  //function selectBreedsStartingWith(letter) {
    //updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
 // }



  function filterBreedsStartingWith(letter) {
    allBreeds.filter()
  }
  function printBreeds() {
    breedDropDown.addEventListener('change', (e) => {
      console.log(e.target.value)
      //selectBreedsStartingWith(e.target.value);
    })
  }
  
  getImages()

  getBreeds()

})


