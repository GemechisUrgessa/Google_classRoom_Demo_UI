let but =document.getElementsByClassName("pin-button")
let container = document.getElementsByClassName("mine-container")
let toggle = document.querySelector(".my-toggle")
let body= document.querySelector('.my-body')
let root = document.querySelector(':root')
let rootm= document.querySelector('html')
let target= document.getElementsByClassName('target')
let second= document.getElementsByClassName('target2')
let nav = document.querySelectorAll('.na')
console.log(but)
let num =0
let sidebar = document.querySelector('hr')

for(let i=0;i<but.length;i++){
    but[i].addEventListener('click',()=>{
        container[i].classList.toggle("pinned")
    
    })
    
}

toggle.addEventListener("click",()=>{
    body.classList.toggle("dark")

    
        for(let i =0;i<target.length;i++){
      target[i].classList.toggle('dark')

  }
  for(let i =0;i<second.length;i++){
    second[i].classList.toggle('dark')

}
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
    
  
  
    
    second.classList.toggle('dark')

    // body.style.background='rgb(21, 40, 68)';
   

})

