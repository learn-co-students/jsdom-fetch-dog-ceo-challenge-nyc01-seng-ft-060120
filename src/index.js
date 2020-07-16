document.addEventListener("DOMContentLoaded", e=>{
    // console.log('%c HI', 'color: firebrick')
    loadImg();
    loadBreeds();
})

function loadImg(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => 
            data.message.forEach(url => {
                postImg(url);
            })
        );
}

function postImg(url) {
    const div = document.getElementById("dog-image-container");
    const img = document.createElement("img");
    img.src = url;
    div.appendChild(img);
}

function loadBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            breeds = Object.keys(data.message);
            updateBreedList(breeds);
            newFilter();
        });
}

function postBreed(breed) {
    const ul = document.getElementById("dog-breeds");
    const dogLi = document.createElement("li");
    dogLi.innerText = breed;
    ul.appendChild(dogLi); 
    dogLi.addEventListener("click", function(e){
        colorChange(e.target);
    });
}

function updateBreedList(breeds) {
    let ul = document.querySelector('#dog-breeds');
    removeChildren(ul);
    breeds.forEach(breed => postBreed(breed));
}

function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
}

function colorChange(li) {
    li.style.color = "blue";
}

function newFilter() {
    const select = document.getElementById("breed-dropdown");
    select.addEventListener("change", function(e){
        const value = e.target.value;
        updateBreedList(breeds.filter(breed => breed.startsWith(value)));
    })
}