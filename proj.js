let nexts=document.getElementById("next")
let prev =document.getElementById("prev")
let back =document.getElementById("back")
let see =document.querySelectorAll(".see-more")
let carousal =document.querySelector(".carousal")
let list =document.querySelector(".carousal .list")
nexts.onclick=function(){
    shows("next")
}
prev.onclick=function(){
    shows("prev")

}
let click;
const shows =(type) =>{
    prev.style.pointerEvents="none"
    nexts.style.pointerEvents="none"

    carousal.classList.remove("prevx","next")
    let items =document.querySelectorAll(".carousal .list .item")
    if(type === "next"){
        list.appendChild(items[0]);
        carousal.classList.add("nexr")

    }
    else{
        let last=items.length -1;
        list.prepend(items[last])
        carousal.classList.add("prevx")

    }   
    clearTimeout(click)
    click=setInterval(()=>{
        prev.style.pointerEvents="auto"
        nexts.style.pointerEvents="auto"
    

    }, 2000) 
}
see.forEach(button =>{
    button.onclick =function () {
        carousal.classList.add("showdetail")
    }
})
back.onclick=function(){
    carousal.classList.remove("showdetail")
}
//hoisting
