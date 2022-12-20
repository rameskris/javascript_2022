//this
//this point to the left dot

const ramesh={
    firstName:'ramesh',
    lastName:'krish',
    fullName:function(){
        console.log(this)
        console.log(`my full name is ${this.firstName}`)
    }
}

const ram={
    firstName:'ramesh',
    lastName:'krish',
    fullName:function(){
        console.log(`my full name is ${this.firstName} ${this.lastName}`)
    }
}
//left of the dot
ram.fullName()
ramesh.fullName();

/*
in regular functions(not arrow) "this"
determined by "how" a function is invoked (left of) 

*/
// default to global window(without anything of left)
//console.log(this)
function showThis(){
    console.log(this)
}

const rk={
    name:'rk',
    showThis:showThis
}
const mk={
    name:'mk',
    showThis:showThis
}

rk.showThis()
mk.showThis()

const btn1=document.querySelector('.btn-1')
const btn2=document.querySelector('.btn-2')

btn1.addEventListener('click',showThis)//here show this invoked by btn1
//btn2 showthis invoked by anonymous function show window obbject
btn2.addEventListener('click',function(){
    showThis()
})