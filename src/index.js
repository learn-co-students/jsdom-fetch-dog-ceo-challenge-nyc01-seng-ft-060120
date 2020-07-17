// console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let breedsSource;

function fetchImgs() {
    return fetch(imgUrl)
    .then(res => res.json())
    .then(json => renderImgs(json))
}

function fetchBreeds() {
    return fetch(breedUrl)
    .then(res => res.json())
    .then(json => {
        breedsSource = Object.keys(json.message); renderBreeds(breedsSource);
    })
}

function renderImgs(json) {
    const imgs = json.message
    const divDogImgContainer = document.querySelector('#dog-image-container')
    
    imgs.forEach( img => {
        const imgDiv = document.createElement('div')
        const htmlIMG = document.createElement('img')
        htmlIMG.src = img
        imgDiv.appendChild(htmlIMG)
        divDogImgContainer.appendChild(imgDiv)
    })
}

function renderBreeds(breeds){
    const ul = document.querySelector('#dog-breeds')
    ul.innerHTML = "";
    breeds.forEach(breed => {
        let li = document.createElement('li');
        li.innerHTML = breed;
        li.addEventListener('click', swapColor);
        ul.appendChild(li);
    })
}

function filterBreeds(breeds, value){
    if (value === 'all') {return breedsSource}
    else {return breeds.filter(breed => breed.startsWith(value))}
}

function swapColor(e){
    if (e.target.style.color === 'black') {e.target.style.color = 'red'}
    else {e.target.style.color = 'black'}
}

function breedSelect(){
    dropdown = document.querySelector('#breed-dropdown')

    //added extra selector options
    let alphaArray = ("efghijklmnopqrstuvwxyz").split("")
    alphaArray.forEach(char => {
        let option = document.createElement('option')
        option.setAttribute('value', char)
        option.innerText = char;
        dropdown.appendChild(option)
    })
    let allOption = document.createElement('option')
    allOption.setAttribute('value', 'all')
    allOption.innerText = "Show All Breeds";
    dropdown.insertAdjacentElement('afterbegin', allOption);
    dropdown.selectedIndex = allOption;
    //
    dropdown.addEventListener('change', (e) => {
        renderBreeds(filterBreeds(breedsSource, e.target.value))
    })
}

document.addEventListener('DOMContentLoaded', function(){
    fetchImgs()
    fetchBreeds()
    breedSelect()
})