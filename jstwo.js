let tog = document.querySelector(".home-togg")
let cards = document.getElementsByClassName('card')
let body = document.querySelector('body')
let untouchable = document.getElementsByClassName("untouchable")
let wt = document.getElementsByClassName('wt')

tog.addEventListener('click',()=>{
    // alert("clicked")
    body.classList.toggle("dark")
    for(let i = 0;i<untouchable.length;i++){
        untouchable[i].classList.toggle('dark')
    }
    for(let i =0;i<cards.length;i++){
        cards[i].classList.toggle("dark")
    }
    for(let i=0;i<wt.length;i++){
        wt[i].classList.toggle('dd')
    }


})