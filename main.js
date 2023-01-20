let watchListMovie =[]
let baseUrl = 'https://www.omdbapi.com/?'
const render =(data)=>{

    // assigning 404 error message
    if(data.Response === "False"){
        document.getElementById("bg").style.display = "none";
document.getElementById('falseResponse').style.display = 'flex'
    }else if(data.Response === "True"){
        document.getElementById('falseResponse').style.display = 'none'
    }

    //rendering data
    data.Search.forEach(
        item => {
           fetch(baseUrl+`t=${item.Title}&apikey=ae8b39bb`)
           .then(response=>response.json())
           .then(data => {
            document.getElementById("bg").style.display = "none";
    poster.innerHTML +=`<div class='postImgDiv'><img src=${data.Poster} alt="poster"></div>` 
    details.innerHTML +=   
    `
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
    <i data-id=${data.imdbID} class="fa-solid fa-circle-plus"></i>
    </div>
    <h5>Wathclist</h5>
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

//adding watch list data
document.addEventListener('click',(e)=>{
    if(e.target.dataset.id){
        if(!watchListMovie.includes(e.target.dataset.id)){
        watchListMovie.push(e.target.dataset.id)
        }
      localStorage.setItem('watchListMovie', JSON.stringify(watchListMovie))
      localStorage.setItem("lastname", "Smith");
    }
})


export {render,watchListMovie};