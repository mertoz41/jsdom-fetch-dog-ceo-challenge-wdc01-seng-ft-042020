console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){
    fetchDogs();
    dogBreeds();
});

function fetchDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => { json.message.forEach(element => { 
        let imagesDiv = document.getElementById('dog-image-container');
        let img = document.createElement('img');

        img.src = element;
        imagesDiv.appendChild(img);
        
        
        })})
}

function dogBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(data => displayBreeds(data))
}

function displayBreeds(data){
    
    let breedarray = Object.keys(data.message)
    breedarray.forEach(breed =>{

        let ulNode = document.querySelector("#dog-breeds")
        let breedli= document.createElement('li')
        breedli.innerText =  breed
        ulNode.appendChild(breedli)
    })

}