let count=0;
let str="Previous save: ";
function increment(){
    count+=1;
    document.querySelector("h2").innerHTML=count;
}
function save(){
    let str1="-"+count;
    str=str.concat(str1);
    document.querySelector("h3").innerText=str;
    count=0;
    document.querySelector("h2").innerHTML=count;
}