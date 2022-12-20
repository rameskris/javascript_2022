const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById('btn')
const color=document.querySelector('.color')

const links=document.querySelectorAll('.nav-links')[0].children

btn.addEventListener('click',function(){
    const randomColor=randomNumber()
    color.textContent=colors[randomColor]
    document.body.style.background=colors[randomColor]
})

function randomNumber(){
   return Math.floor(Math.random()*colors.length)
}