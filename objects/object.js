//objects Basics

/*
Objects are collectionns of keys(property)value pairs
Property values can be strings,numbers,booleans,arrays and functions
however if the property values is a function its called a method
*/

//object literal syntx,{}
//dot notation


const age=60
let support='email'
support='age'
let isM='married'
const Person={
    name:'jhon',
    age:age,
    //es6
    //age,
    married:true,
    greet:function(name){
        console.log(`Hello my name is ${name}`)
    },
    sayHello(name){
        console.log(`Hello my name is ${name}`)
    },
    sibilings:['vinayak','murugu'],
    //nested 
    job:{
          title:'developer',
          comapny:{
            name:"denovo",
            address:"sm tower"
          },
          'random-value':'random'
    },
    'random-value':'not',
    support:support,
    //es6
    //support
    isM

}

console.log(Person.name)
console.log(Person.age=40)
console.log(Person)

//delete property
delete Person.sibilings;//returns boolean
console.log(Person)

//acess values using brackets notation
//we need quotes to access using brackets
console.log(Person['name'])
console.log(Person['job']['random-value'])
console.log(Person['random-value'])
//if support is not covered by quotes its gives you age =60 why because technically it is Person['age']//60
//id surround by quotes means Person['support']//age gives you value its hold //'age'
console.log(Person[support])
console.log(Person['support'])
console.log(Person[isM])//true
console.log(Person['isM'])//married