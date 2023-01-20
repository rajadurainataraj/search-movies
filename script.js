import {render,watchListMovie} from './main.js';
const poster = document.getElementById("poster") 
const details = document.getElementById("details") 
const search = document.getElementById("search")
console.log("fromHtml",watchListMovie)
 document.getElementById('submitBtn').addEventListener('click', () => {
    let baseUrl = 'https://www.omdbapi.com/?'

 fetch(baseUrl+`s=${search.value}&apikey=ae8b39bb`)
.then(response=>response.json())
.then (data => {
   render(data)
})
})


