/*
const decrease=document.querySelector('.decrease')
const reset=document.querySelector('.reset')
const increase=document.querySelector('.increase')
const value=document.querySelector('#span')

decrease.addEventListener('click',function(){
    value.textContent-=1;
    color()
})
increase.addEventListener('click',function(){
    value.textContent++
    color()
})
reset.addEventListener('click',function(){
    value.textContent=0;
    color()
})

*/
function color(){
    if(value.textContent>0){
        value.style.color='green'
    }else if(value.textContent==0){
        value.style.color='black'
    }
    else{
        value.style.color='red'
    }
}

/*
const value=document.querySelector('#span')
const bcon=document.querySelector('.button-container')
bcon.addEventListener('click',function(e){
    if(e.target.textContent==='decrease'){
        value.textContent-=1;
        color()
    }else if(e.target.textContent==='increase'){
        value.textContent++
        color()
    }else{
        value.textContent=0
        color()
    }
   
    
    //color()
})
*/
const value=document.querySelector('#span')
const btn=document.querySelectorAll(".btn")
btn.forEach(function(item){
    item.addEventListener('click',function(){
        if(this.textContent==='decrease'){
            value.textContent-=1;
           color()

        }else if(this.textContent==='increase'){
            value.textContent++;
           color()
        }else{
            value.textContent=0
        color()
        }
    })
})