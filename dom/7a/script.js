//click event
//mouseup when released
//mousedown when pressed
//mouseenter when moved onto the element
//mouseleave when moved out from the element
//keyup whenn key is released 
//event.type
//event.currentTarget
//this keyword
//preventDefault()-prevents default behaviour
const val=document.querySelector('input')
const thVal=document.querySelector('.color')
console.log(thVal)
let color
val.addEventListener('keyup',function(event){
    color=this.value

    thVal.textContent=color
    document.body.addEventListener('mouseover',function(e){
     
            e.currentTarget.style.color=color
            // e.currentTarget.style.backgroundColor=color
        
    })
    
})