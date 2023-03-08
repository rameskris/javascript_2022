//apply -runs instantly,argumnet-array of items

const jhon={
    name:'jhon',
    age:24,
    greet:function(city){
        console.log(`${this.name} and age is ${this.age} wooooo ${city}`)
    }
}
const ramesh={
    name:'ramesh',
    age:34
}


function greet(city,pin){
    //here city and pin belongs to greet function dont use this
    //use this when its belongs to particular obj also same for jhon.greet
        console.log(`${this.name} and age is ${this.age} and city is ${city} pin ${pin}`)
    }
//use call
greet.call(jhon,'chennai',56789)
greet.call(ramesh,'madurai',600044)
greet.call({name:'krish',age:'30'},'chennai',56789)

jhon.greet.call({name:'rajini',age:'45'},'Goa')


//apply


greet.apply({name:'ala',age:20},['jordan',67899])
jhon.greet.apply(ramesh,['tennis'])

//bind
//assign and call it later,list of arguments
const susanGreet=greet.bind(ramesh,'kovai',67890)
susanGreet()