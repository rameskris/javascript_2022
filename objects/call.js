//call-runs instantly argumnets-list of items


const jhon={
    name:'jhon',
    age:24,
    greet:function(){
        console.log(`${this.name} and age is ${this.age} wooooo`)
    }
}
const ramesh={
    name:'ramesh',
    age:34
}

//this all will fail
//ramesh.greet()
//greet()
//const secGreet=jhon.greet
//secGreet();
function greet(){
        console.log(`${this.name} and age is ${this.age}`)
    }
//use call
greet.call(jhon)
greet.call(ramesh)
greet.call({name:'krish',age:'30'})

jhon.greet.call({name:'rajini',age:'45'})


