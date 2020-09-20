function renderMovies(moviesArray) {
    const movieHtmlArray = moviesArray.map((currentMovie) => {
        return `<div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <img class="card-img-top" src=${currentMovie.Poster} />
            <div class="card-body">
            <h3>${currentMovie.Title}</h3>
            <h2>${currentMovie.Year}</h2>
            
            <a href="#" class="btn btn-primary" onclick="saveToWatchList('${currentMovie.imdbID}')">Add</a>
            </div>
            </div>
            </div>
        `
    });
    return movieHtmlArray.join('')
}

        
const movieContainer = document.querySelector('.movie-container')
movieContainer.innerHTML = renderMovies(JSON.parse(localStorage.getItem('movieData')));