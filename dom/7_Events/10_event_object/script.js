//event object argument e,evt(//info abt triggerd event)

//event.type
//event.currentTarget
//this keyword
//preventDefault()-prevents default behaviour

const h=document.querySelector('h1')
const btn=document.querySelector('.btn')
const link=document.querySelector('#link')
h.addEventListener('click',function(){
    h.classList.add('blue')
})
h.addEventListener('click',function(e){
    console.log(e.currentTarget)
})
btn.addEventListener('click',function(e){
    e.currentTarget.classList.add('blue')//use this one
    //console.log(btn.classList.add('blue'))//use this one
    this.classList.add('blue')//use this one but not work with anonymous
})
link.addEventListener('click',function(e){
    e.preventDefault()

})