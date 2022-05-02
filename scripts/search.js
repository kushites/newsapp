// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {nav,listall,append,newspage} from '../components/navbar.js'

document.querySelector("#navbar").innerHTML=nav()
document.querySelector("#search_input").addEventListener("keypress", function(){
   debouce()
})


function searchfun(){
    
   let c= document.querySelector("#results")
let q=  document.querySelector("#search_input").value
let url=`https://masai-mock-api.herokuapp.com/news?q=${q}`
c.innerHTML=null
listall(url,c)
}
let id;
function debouce(){
if(id){
    clearTimeout(id)
}
id = setTimeout(function(){
    searchfun()
},1000)
}
