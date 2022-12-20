//select element
const btn=document.querySelector('.btn')
const h2=document.querySelector('h2')

function changeColors(){
    // my code worst i frogot contain
    // if(h2.className){
    //     h2.classList.remove('red')
    // }else{
    //     h2.classList.add('red')
    // }
    // console.log(h2.className)

    h2.classList.contains('red')?h2.classList.remove('red'):h2.classList.add('red')

    
}

// btn.addEventListener('click',function(){
//     //console.log("hi")
//     h2.classList.add('red')
// })


btn.addEventListener('click',changeColors)