console.log('%c HI', 'color: firebrick')


document.addEventListener("DOMContentLoaded", function(e) {
   fetchImages()
   fetchBreeds()

   const imgContainer = document.getElementById('dog-image-container')
   const breedUl = document.getElementById('dog-breeds')
   const breedDropDown = document.getElementById('breed-dropdown')
   let letter = ""

    function fetchImages() {
     fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        const resultsArray = json.message
        resultsArray.forEach(el => renderImage(el))
    })
}

    function renderImage(pic) {
        
        let dogPic = document.createElement('img')
        dogPic.src = pic
        imgContainer.append(dogPic)
    }

    function fetchBreeds() {
        fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const breedsArray = json.message
            breeds = Object.keys(breedsArray)
            breeds.forEach(breed => renderBreed(breed))  
            listBreeds(breeds) 
            filterFunction(letter)
        
          
      })
     
    }
    
    function renderBreed(name) {
        let dogBreed = document.createElement('li')
        dogBreed.innerText = name
        breedUl.append(dogBreed)
        
    }


    
    breedUl.addEventListener("click", function(e) {
         e.target.style.color = 'red'

    });

    
    function listBreeds(doggos) {
        breedUl.innerHTML = ``
        doggos.forEach(breed => {
          const breedLi = document.createElement("li")
          breedLi.innerHTML = `
            ${breed}
          `
          breedUl.append(breedLi)
        })
      }
    


    function filterFunction (letter) {
    breedDropDown.addEventListener('change', function(e) {
        letter = e.target.value
        if (e.target.value === letter) {
        listBreeds(breeds.filter(element => element.startsWith(letter)))
      
        }
        
    })
   } 

  


  

})

