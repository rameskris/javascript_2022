const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById('btn')
const color=document.querySelector('.color')

const links=document.querySelectorAll('.nav-links')[0].children

btn.addEventListener('click',function(){
     let randomValue='#'
    for(let i=0;i<6;i++){
        randomValue+=hex[Math.floor(Math.random()*hex.length)]
    }


    console.log(randomValue)
    color.textContent=`${randomValue}`
    document.body.style.background=`${randomValue}`
    // randomValue=""
    
})