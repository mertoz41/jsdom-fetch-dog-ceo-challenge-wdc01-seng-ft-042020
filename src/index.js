console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){
    fetchDogs();
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