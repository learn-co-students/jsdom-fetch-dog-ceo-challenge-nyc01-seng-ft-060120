document.addEventListener("DOMContentLoaded", function(e) {

    // CONSTANT DECLARATIONS
    const dogImageContainer = document.querySelector('#dog-image-container')
    const dogBreedsList = document.querySelector('ul#dog-breeds')
    const alphabetSelector = document.querySelector('select')




    // FUNCTION DECLARATIONS
    const getNDisplayDogPics = () => {
        fetch('https://dog.ceo/api/breeds/image/random/4')
            .then(function(response) {
                return response.json()
            }).then(function(json) {
                const dogUrlArray = json.message
                dogUrlArray.forEach(dogUrl => {
                    displayDogImage(dogUrl)

                });

            })
    }

    const displayDogImage = dogUrl => {
        const img = document.createElement('img')
        img.src = dogUrl
        img.style.maxWidth = '15%'
        img.style.display = 'block'
        img.style.margin = "1em"
        dogImageContainer.append(img)
    }

    const getNDisplayBreeds = () => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(response => response.json())
            .then(data => {
                const breeds = data.message
                for (const property in breeds) {
                    const breedli = document.createElement('li')
                    breedli.innerText = property
                    breedli.dataset.colorize = true
                    if (breeds[property].length) {
                        const subBreedUl = document.createElement('ul')
                        breeds[property].forEach(subBreed => {
                            const subBreedLi = document.createElement('li')
                            subBreedLi.innerText = subBreed
                            subBreedLi.dataset.colorize = true
                            subBreedUl.append(subBreedLi)
                        })
                        breedli.append(subBreedUl)
                    }

                    dogBreedsList.append(breedli)
                }
            })
    }

    const colorizeBreedLiOnClick = () => {
        document.addEventListener("click", event => {
            if (event.target.dataset.colorize === "true") {
                event.target.style.color = randomColor()
                event.target.style.backgroundColor = randomColor()
            }
        })
    }

    const randomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`
    }

    const filterer = () => {
        alphabetSelector.addEventListener('change', e => {
            const letter = e.target.value

            const breedLis = document.querySelectorAll('ul#dog-breeds>li')
            breedLis.forEach(breedName => {
                console.log(breedName)
                if (breedName.textContent.startsWith(letter)) {
                    breedName.style.display = ""
                } else {
                    breedName.style.display = "none"
                }
            })
        })
    }



    // FUNCTION CALLS

    getNDisplayDogPics()
    getNDisplayBreeds()
    colorizeBreedLiOnClick()
    filterer()
})