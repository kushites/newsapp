// Ude Import export (MANDATORY)
import {nav} from "../components/navbar.js"
document.querySelector("#navbar").innerHTML=nav()
let data=JSON.parse(localStorage.getItem("news"))
console.log(data)

function append(){
    data.map((el)=>{
        let div= document.createElement("div")
        let h3=document.createElement("h3")
        let p=document.createElement("p")
        let img=document.createElement("img")
        img.src=el.urlToImage
        h3.innerText=el.title
        p.innerText=el.description
        div.append(img,h3,p)
        document.querySelector("#detailed_news").append(div)
    })
}
append(data)
document.querySelector("#search_input").addEventListener("click", function(){
    searchfun()
})
function searchfun(){
    
    window.location.href="search.html"
}
