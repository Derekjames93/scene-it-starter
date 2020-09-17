




document.addEventListener('DOMContentLoaded', function () {
    //code here will execute after the document is loaded

    function renderMovies(moviesArray) {
        const movieHtmlArray = moviesArray.map((currentMovie) => {
            return `<div class="col-12 col-md-6 col-lg-4">
            <div class="card">
                <img class="card-img-top" src=${currentMovie.Poster} />
                <div class="card-body">
                <h3>${currentMovie.Title}</h3>
                <h2>${currentMovie.Year}</h2>
                <a href="#" class="btn btn-primary">Add</a>
                </div>
                </div>
                </div>
            `
            console.log('Hello world')
            
        })
        return movieHtmlArray.join("")
    }
    let movies = document.querySelector('.movies-container')
    movies.innerHTML = renderMovies(movieData)
    
});


const myForm = document.getElementById('search-form');

myForm.addEventListener('click', function(event){

    
})



