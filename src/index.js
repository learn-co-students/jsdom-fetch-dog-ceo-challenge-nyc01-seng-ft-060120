console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", function() {
const dogBreedul = document.getElementById('dog-breeds')
const dogContainer = document.getElementById('dog-image-container')
const ulBreed = document.querySelector('ul')
const dropDown = document.getElementById('breed-dropdown')


const url = "https://dog.ceo/api/breeds/image/random/4"
const urlTwo = "https://dog.ceo/api/breeds/list/all"

// CHALLENGE 1

function getImages(){

    fetch(url) //make request
    .then(response => response.json()) //get request
    .then(dogs => renderDogs(dogs.message)) //do something with request
}


function renderDogs(array){
    for (let i = 0; i < array.length; i++){
        const dogPic = document.createElement('img');
        dogPic.src=array[i]
        dogContainer.appendChild(dogPic);
    }
}

// CHALLENGE 2

function getBreeds(){

    fetch(urlTwo) //make request
    .then(response => response.json()) //get request
    .then(breeds => {normalArray = Object.keys(breeds.message);
        renderBreeds(normalArray);
        printArray(normalArray)
    })       
}

function renderBreeds(array){
    dogBreedul.innerHTML = ''
    for (let i = 0; i < array.length; i++){
        const dogLi = document.createElement('li');
        dogBreedul.appendChild(dogLi);
        dogLi.innerText = array[i]
    }
}

// CHALLENGE 3

ulBreed.addEventListener('click',(e) =>
e.target.style.color = "red"
)


// CHALLENGE 4

function printArray(a){
    const breedArray = a;
   
    dropDown.addEventListener('change',(e) =>{
        startsWith(event.target.value);
    });

    function startsWith(letter) {
        const win = breedArray.filter(breed => breed.startsWith(letter));
        renderBreeds(win)
    }
}


getImages();
getBreeds();

})
