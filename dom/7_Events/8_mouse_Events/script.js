//mouseup when released
//mousedown when pressed
const btn=document.querySelector('.btn')
const h1=document.querySelector('h2')
btn.addEventListener('mouseup',function(){
    console.log("mouse released")
})
btn.addEventListener('mousedown',function(){
    console.log("mouse pressed")
})

//mouseenter when moved onto the element
//mouseleave when moved out from the element

h1.addEventListener("mouseenter",function(){
    h1.classList.add('blue')

})
h1.addEventListener("mouseleave",function(){
    h1.classList.remove('blue')

})

