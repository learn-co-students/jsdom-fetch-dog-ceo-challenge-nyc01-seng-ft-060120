console.log('%c HI', 'color: firebrick')

// const toyList = document.getElementById("dog-image-container");
fetch('https://dog.ceo/api/breeds/image/random/4')
  .then(response => response.json())
  .then(data => {
    data.message.forEach(toy => {
      renderToys(toy);
    });
  })


function renderToys(toy){
    let container = document.querySelector('#dog-image-container');
    let newImageEl = document.createElement('img');
    newImageEl.src = toy;
    container.appendChild(newImageEl);
}