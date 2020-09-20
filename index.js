




// document.addEventListener('DOMContentLoaded', function () {
//     //code here will execute after the document is loaded

//     // function renderMovies(moviesArray) {
//     //     const movieHtmlArray = moviesArray.map((currentMovie) => {
//     //         return `<div class="col-12 col-md-6 col-lg-4">
//     //         <div class="card">
//     //             <img class="card-img-top" src=${currentMovie.Poster} />
//     //             <div class="card-body">
//     //             <h3>${currentMovie.Title}</h3>
//     //             <h2>${currentMovie.Year}</h2>
//     //             <a href="#" class="btn btn-primary">Add</a>
//     //             </div>
//     //             </div>
//     //             </div>
//     //         `
//     //         console.log('Hello world')

//     //     })
//     //     return movieHtmlArray.join("")
//     // }
//     // let movies = document.querySelector('.movies-container')
//     // movies.innerHTML = renderMovies(movieData)

// });


function saveToWatchList(imdbID){
    const movie = movieData.find(function(currentMovie){
        
        return currentMovie.imdbID == imdbID;
    })
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if(watchlist === null){
        watchlist = [];
    }
    watchlist.push(movie);
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}



let movies = document.querySelector('.movies-container')
const myForm = document.getElementById('search-form');
myForm.addEventListener('submit', function (event) {
    
    let searchString = document.querySelector('.search-bar').value
    let urlEncodedSearchString = encodeURIComponent(searchString);
    
    event.preventDefault();
    axios.get(`http://www.omdbapi.com/?apikey=b43843a0&s=${urlEncodedSearchString}`)
        .then((response)=>{
            console.log(response.data.Search)
            // moviesArray = response.data.Search
            // console.log(response.data);
            movies.innerHTML = renderMovies(response.data.Search)
        });
        
        }


)

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
        console.log('Hello world')
        
    })
    return movieHtmlArray.join("")
}



