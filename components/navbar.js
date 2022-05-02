let nav =()=>{
    return `<a href="index.html"><h2>News</h2></a>
    <input  type="text" id="search_input" >`
}

let listall=async(url,c)=>{
    let data= await fetch(url)
       data =await data.json()
       console.log(data)
       append(data.articles,c)
   }

let append=(data,c)=>{
    data.map((el)=>{
        let div= document.createElement("div")
        let div1=document.createElement("div")
        let img=document.createElement("img")
        let h3=document.createElement("h3")
        let p =document.createElement("p")
        div.setAttribute("class", "news")
       
        img.src=el.urlToImage
        h3.innerText=el.title
        p.innerText=el.description
        div1.append(h3,p)
        div.append(img,div1)
        div.addEventListener("click",function(){
            newspage(el)
        })
        c.append(div)
    })
}
function newspage(el){
    let arr=[]
    arr.push(el)
    localStorage.setItem("news",JSON.stringify(arr))
    window.location.href="news.html"
    }

export {nav,listall,append,newspage}