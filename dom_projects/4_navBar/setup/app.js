// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


const navHeader=document.querySelector(".links")
const navtoggle=document.querySelector(".nav-toggle")

console.log(navHeader)

navtoggle.addEventListener('click',function(){
    
   
navHeader.classList.toggle('show-links')
    
})
