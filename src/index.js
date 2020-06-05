console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){
    fetchDogs();
    dogBreeds();
    // dogNames();
    let dropdown = document.getElementById('breed-dropdown')
    dropdown.addEventListener('change', sortBreed)
    
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
        breedli.addEventListener('click', changeColor)
        function changeColor(){
            breedli.style.color = 'red'; 
        }
    })
}

// function dogNames(){
//     fetch("https://dog.ceo/api/breeds/list/all")
//     .then(resp => resp.json())
//     .then(name => sortBreed(name))
// }


function sortBreed(){
    let dropdown = document.getElementById('breed-dropdown');
    let sortValue = dropdown.value;
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(data => { 
        let dogNames = Object.keys(data.message);
        let filtered = dogNames.filter(dog =>{
            return dog.charAt(0) === sortValue;
        })
        let ulNode = document.querySelector("#dog-breeds")
        ulNode.innerHTML = ""
        
        filtered.forEach(elem => {
            let filteredLi = document.createElement('li')
            filteredLi.innerHTML = elem;
            ulNode.appendChild(filteredLi)

        })

        })
        
        
        
        
  
    

    
}

// added event listener change on the dropdown 
// get all dogs names from api
// filter dogs names from api based on dropdown value
// create new li items to append it on the ul 


