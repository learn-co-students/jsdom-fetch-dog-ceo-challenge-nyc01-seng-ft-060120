let breeds = [];

document.addEventListener('DOMContentLoaded', function(){
    let imageContainer = document.querySelector('#dog-image-container') 
    let breedList = document.querySelector('#dog-breeds')
    let breedDropdown = document.querySelector('#breed-dropdown')    

loadImages();
loadDogBreedOptions();


function loadImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
        fetch(imgUrl)
        .then(response => response.json())
        .then(data => addImage(data.message))
}

function loadDogBreedOptions(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {breeds = Object.keys(data.message)
        addBreed(breeds)
        updateBreedList();
        breedDropdownListener();
    });
}

function addBreed(breeds){
    breeds.forEach(breed => {
    let newBreedEl = document.createElement('li')
    newBreedEl.innerText = breed
    breedList.appendChild(newBreedEl)
    newBreedEl.addEventListener('click', updateColor)
    })
} 

function addImage(imageURLS){
    imageURLS.forEach(imageURL => {
       const newImageEl = document.createElement('img')
       newImageEl.src = imageURL      
       imageContainer.appendChild(newImageEl)
       
    })
}

function updateColor(e) {
    e.target.style.color = 'red';
}

function breedDropdownListener() {
    breedDropdown.addEventListener('change', function(e){
         selectBreed(e.target.value)
    })
}

function selectBreed(letter) {
updateBreedList(breeds.filter(breed => {breed.startsWith(letter)}))
}

function updateBreedList(){
removeChildren(breedList);
breeds.forEach (breed => 
    addBreed(breed)
);
}

function removeChildren(element){
    let child = element.lastElementChild;
    while (child){
        element.removeChild(child);
        child = element.lastElementChild;
    } 
}
});

// select dropdown menu check 
// add click listener to dropdown menu check 
// get letter that was clicked within the breeddropdownlistener check
// create function to use letter to find all breeds starting with that letter
// create function to remove breeds that don't start with that letter



// create function to iterate through breed list 
// use the letter clicked in the dropdown menu  
// match with breeds beginning with that letter



// const imageContainer = document.querySelector('#dog-image-container')
   
//     newImageEl.src = imageUrl;
//     imageContainer.appendChild('newImageEl')












// document.addEventListener('DOMContentLoaded', function(){

//     loadImages();

//     function loadImages() {
//         const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//         fetch(imgUrl)
//         .then(response => response.json())
//         .then(results => {
//             results.message.forEach(image => addImage(image))
//         });
//     }
  
//     function addImage(dogPicUrl) {
//         let container = document.querySelector('#dog-image-container');
//         let newImageEl = document.createElement("img");
//         newImageEl.src = dogPicUrl;
//         container.appendChild(newImageEl);
//     }    

// })




