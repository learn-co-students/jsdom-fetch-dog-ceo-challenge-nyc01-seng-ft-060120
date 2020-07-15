console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4" 
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function() { 

    const imgContainer = document.getElementById('dog-image-container');
    const breedList = document.getElementById('dog-breeds');
    const dropDown = document.getElementById('breed-dropdown')

    fetch(imgUrl)
        .then(function(response) {
        return response.json();
        })
        .then(function(json) {
        for(const key in json['message']) {
            const newImage = document.createElement('img');
            newImage.setAttribute('src', `${json['message'][key]}`);
            imgContainer.append(newImage);
        }
        });

    fetch(breedUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            console.log(json)
            for(const key in json['message']) {
                if (json['message'][key].length > 0) {
                    for (const specific of json['message'][key]) {
                        const newBreed = document.createElement('li');
                        newBreed.innerText = `${specific} ${key}`;
                        breedList.append(newBreed);
                    }
                } else {
                    const newBreed = document.createElement('li');
                    newBreed.innerText = `${key}`;
                    breedList.append(newBreed);
                }
            }
        });

    breedList.addEventListener("click", function(e) {
        const clickedBreed = e['path'][0]
        clickedBreed.style.color = "red"
    })

    dropDown.addEventListener("change", function(e) {
        const letter = `${e.target.value}`
        for (const breed of breedList.children) {
            if (breed.innerText.charAt(0) !== letter) {
                breed.style.display = "none"
            } else {
                breed.style.display = "list-item"
            }
        }
    })
});
