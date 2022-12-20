//using selectors inside the element
// traversing the dom

const plus=document.querySelector('.fa-plus-square')
// const minus=document.querySelector('.fa-minus-square')
 

const questions=document.querySelectorAll('.question')
console.log(questions)

questions.forEach(function(item){
    item.addEventListener('click',function(e){
       
       if( e.target.classList.contains('fa-plus-square')){
        item.classList.add('show-text')
       }if( e.target.classList.contains('fa-minus-square')){
        item.classList.remove('show-text')
       }
    })
})


