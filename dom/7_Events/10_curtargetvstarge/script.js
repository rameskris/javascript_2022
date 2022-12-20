//currentTarget-always refers to the element to which the event handler has been attached to
//target-identifies the elemnt on which the event occured

const btns=document.querySelectorAll('.btn')

btns.forEach(function(item){
    item.addEventListener('click',function(e){
        // e.currentTarget.style.color='green'
         e.target.style.color='green'
        
    })
})