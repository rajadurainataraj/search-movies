// let contentEl = document.querySelector(".content");
let posterEl = document.getElementById('poster');
let detailsEl = document.getElementById('details');
let movie = JSON.parse(localStorage.getItem("watchListMovie"));
let baseUrl = "https://www.omdbapi.com/?";
console.log(movie)

function movieData() {
  posterEl.innerHTML = ""
  detailsEl.innerHTML = ""

  movie.forEach((item) => {
    fetch(baseUrl + `i=${item}&apikey=ae8b39bb`)
      .then((response) => response.json())
      .then((data) => {

// assigning intial value content
        if (posterEl.innerHTML === ' ' ) {
          document.getElementById('emptyMsg').style.display = 'flex';
        } else {
          document.getElementById('emptyMsg').style.display = 'none';
        }

//redering data
        posterEl.innerHTML += 
        `<div class='postImgDiv'><img src=${data.Poster} alt="poster"></div>` 
        detailsEl.innerHTML += `
      
    <div class='movieList'>
    <div class='title'>
    <h3 id='title'>${data.Title}</h3>
    <i class="fa-solid fa-star"></i>
    <h3 class="rating">${data.imdbRating}</h3>
    </div>

    <div class='subtitle'>
    <h5>${data.Runtime}</h5>
    <h5 class='genre'>${data.Genre}</h5>
    <div class='sub-subTitile'>
<div>
    <i data-id=${data.imdbID} class="fa-solid fa-circle-minus"></i>
    </div>
    <h5>remove</h5>
    </div>
    </div>

    <div class='plot'>
    <p>${data.Plot}</p>
    </div> 
    </div>
    `
      })
  })
}
movieData();

//removing watchlist data
document.addEventListener("click", (e) => {
  if (e.target.dataset.id) {
    movie = movie.filter((item) => item !== e.target.dataset.id);

    localStorage.setItem("watchListMovie", JSON.stringify(movie));
    movieData();
  }
});
