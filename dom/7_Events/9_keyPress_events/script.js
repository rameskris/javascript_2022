//keypressed when key is pressed
//keydown when key is down(holding)
//keyup whenn key is released (return property it holds buch of methods use console.dir to see methods and props)


// const inputName=document.querySelector('#name')
// inputName.addEventListener('keypress',function(){
//     console.log('key pressed')
// })
// const inputName=document.querySelector('#name')
// inputName.addEventListener('keydown',function(){
//     console.log('key holdss')
// })
const inputName=document.querySelector('#name')
inputName.addEventListener('keyup',function(){
    console.log(inputName.value)
})
console.dir(inputName)
