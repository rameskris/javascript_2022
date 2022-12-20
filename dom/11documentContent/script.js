/*
THe DOMContentloaded event fires when the initial html document has been completely loaded and parsed
wothout waiting for stylesheets,images, and subframes to finish loading

window.addEventListener('DOMContentloaded'function(){

})

*/ 



/*
innerWidth -The read only window property the interiror width of the window in pixels
innerHeight -The read only property of window interface the interiror height of the window in pixels

*/

console.log(window.innerHeight)

console.log(window.innerWidth)

/*
the Element.getBoundingClientRect() ,method returns a domRect object providing informstion about the
size of the element and size relative to viewport

*/
const box=document.querySelector('.box')
const btn=document.querySelector('.btn')

btn.addEventListener('click',function(){
   const val= box.getBoundingClientRect()
   console.log(val)

})

// the resize events fires when the document view(window) has been resized

window.addEventListener('resize',function(){
    console.log(window.innerWidth)
})