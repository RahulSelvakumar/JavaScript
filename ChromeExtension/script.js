// chrome://extensions/
let link=[]
const ilink=document.getElementById("input-el")
const button=document.getElementById("input-btn")
const button1=document.getElementById("delete-btn")
const ul=document.getElementById("ulel")

let linkFromLocalStorage=[]
linkFromLocalStorage=JSON.parse(localStorage.getItem("links"))
if(linkFromLocalStorage){
    link=linkFromLocalStorage
    renderLink()
}

button.addEventListener("click",function() {
    link.push(ilink.value)
    ilink.value=""
    localStorage.setItem("links",JSON.stringify(link))
    renderLink()
    console.log(link)
})

button1.addEventListener("dblclick",function(){
    localStorage.clear()
    link=[]
    renderLink()
})



function renderLink(){
    let finalLinks=""
    for(let i=0;i<link.length;i++){
        finalLinks+=`<li><a href='${link[i]}' target='_blank'>${link[i]}</a></li>`
    }
    ul.innerHTML=finalLinks
}
