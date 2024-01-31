var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup-box")
var add=document.getElementById("add-popup")

add.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})
var cancel=document.getElementById("cancel")
cancel.addEventListener("click",function(enent){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
})
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title")
var author=document.getElementById("book-author")
var description=document.getElementById("book-description")

addbook.addEventListener("click",function(){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitle.value}</h2>
    <h5>${author.value}</h5>
    <p>${description.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}