//using selectors inside the element
// traversing the dom

//const plus=document.querySelector('.fa-plus-square')
// const minus=document.querySelector('.fa-minus-square')
 
//one ways
// const questions=document.querySelectorAll('.question')
// console.log(questions)

// questions.forEach(function(item){
//     item.addEventListener('click',function(e){
       
//        if( e.target.classList.contains('fa-plus-square')){
//         item.classList.add('show-text')
//        }
//        if( e.target.classList.contains('fa-minus-square')){
//         item.classList.remove('show-text')
//        }
//     })
// })

//another way

// const buttons=document.querySelectorAll('.question-btn')
// buttons.forEach(function(button){
//     button.addEventListener('click',function(e){
        
//    const ques=e.currentTarget.parentElement.parentElement
//    ques.classList.toggle('show-text')

//     })
// })

//another way of doing

const questions=document.querySelectorAll('.question')
questions.forEach(function(question){
    const btn=question.querySelector('.question-btn')
        btn.addEventListener('click',function(e){
           // question.classList.toggle("show-text")
           

        })
    
})
