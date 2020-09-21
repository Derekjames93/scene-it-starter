function renderMovies(moviesArray) {
    const movieHtmlArray = moviesArray.map((currentMovie) => {
        return `<div class="col-12 col-md-6 col-lg-4">
        <div class="card">
        <img class="card-img-top" src=${currentMovie.Poster} />
        <div class="card-body">
        <h3>${currentMovie.Title}</h3>
        <h2>${currentMovie.Year}</h2>
        
        
        </div>
        </div>
        </div>
        `
        console.log('Hello world')
        
    })
    return movieHtmlArray.join("")
}



const movieContainer = document.querySelector('.movies-container')
movieContainer.innerHTML = renderMovies(JSON.parse(localStorage.getItem('watchlist')));

// document.addEventListener('DOMContentLoaded', function (){

// };