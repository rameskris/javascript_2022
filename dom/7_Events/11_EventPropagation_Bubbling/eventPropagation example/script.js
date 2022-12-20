const container=document.querySelector('.container')
const btn=document.querySelector('.btn')
//const heading=document.querySelector('.heading')

btn.addEventListener('click',function(e){
    const h1=document.createElement('h1')
    h1.classList.add('heading')
    h1.textContent="im heading inside container"
    container.appendChild(h1)
    h1.addEventListener('click',function(e){
        console.log(e.target)
    })
})
function sayHello(e){
    if(e.target.classList.contains('heading')){
        console.log("hello")
    }
   
}
container.addEventListener('click',sayHello)