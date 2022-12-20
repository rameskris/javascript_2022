//allows select dynamic elements
//event propogation-order the events are fired
//event bubbling-clicked elemnt first then bubbles up--default
//event capturing fires at the root and fires until reaches target

const container=document.querySelector('.container')
const listItems=document.querySelector('.list-items')


function showBubbling(e){
    console.log('currentTarget',e.currentTarget)
    console.log('Target',e.target)
}
function stopPropagation(e){
    console.log('you clicked me')
    e.stopPropagation()
}
listItems.addEventListener('click',showBubbling,{capture:true})
container.addEventListener('click',showBubbling,{capture:true})
document.addEventListener('click',showBubbling,{capture:true})
window.addEventListener('click',showBubbling,{capture:true})
