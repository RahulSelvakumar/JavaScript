let link=[]
const ilink=document.getElementById("input-el")
const button=document.getElementById("input-btn")
const ul=document.getElementById("ulel")
button.addEventListener("click",function() {
    link.push(ilink.value)
    ilink.value=""
    renderLink()
})

function renderLink(){
    let finalLinks=""
    for(let i=0;i<link.length;i++){
        finalLinks+=`<li><a href='${link[i]}' target='_blank'>${link[i]}</a></li>`
    }
    ul.innerHTML=finalLinks
}

