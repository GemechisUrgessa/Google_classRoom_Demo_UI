
let toggle = document.querySelector(".my-toggle")
let body = document.querySelector('body')

let nav = document.querySelectorAll('.na')
let el = document.getElementsByClassName('test')
let label =document.querySelectorAll('label')
let nav2 = document.querySelector('.df')
let title = document.querySelector('.title')

let num =0


toggle.addEventListener("click",()=>{
    body.classList.toggle("dark")
    nav2.classList.toggle('night')
    title.classList.toggle('title')

   


    if(num%2===0){
    for(let i=0;i<nav.length;i++){
        nav[i].style.color="white"
    }
    num+=1
    }else{
        for(let i=0;i<nav.length;i++){
            nav[i].style.color="black"
        }
        num+=1

    }
    
    for(let i=0;i<el.length;i++){
        el[i].classList.toggle('dark')
    }
    for(let i=0;i<label.length;i++){
        label[i].classList.toggle('label')
    }
    
})
  



