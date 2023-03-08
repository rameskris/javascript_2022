var welcome="hello"

//fucntion block of code perform a task

//function deeclartion(defining a function)
function square(number){
    return number * number
    //have access to this keyword
}
//fucntion call(calling /executing a function/invoking)



//functon expression

const name=function(params){
    //statements
}

//an arrow function
const arr=(params)=>{
    //statements
}

//by default returns undefined if return anything exclusively

// function add(a,b){
//     return a+b
// }

//arrow function

//arrow function dont have this reseverd keyword

// const square=(numnber)=>{
//     return number*number
// }

const result=square(5)

const squ=num=>num*num;

const add=(a=0,b=0)=>{
    return a+b
}

console.log(add())


//hositing behind the scene
var age;
console.log(age)//undefined
age=10

//by default fucntion are hosited but not arrow function
//it will work
ht()
function ht(){
    console.log("hello")
}

//uncaught reference error
// const ht=()=>{
//     console.log("hello")
// }

//string

const toCheck='jill'
console.log(toCheck.toLowerCase())

//metods serching for substring

//indexOf()

const hobb='i love java'

console.log(hobb.indexOf('javascript'))
console.log(hobb.lastIndexOf('javascript'))

//includes
//return true or false
console.log(hobb.includes('java'))

//startsWith()
hobb.startsWith()

//endswith()


//getting substring

//slice()
const examleString='hotDog'

const hot=examleString.slice(0,3)

console.log(hot)

const dog=examleString.slice(3,7)

console.log(dog.length)

//split
//returns array
const ex='dog'
ex.split("")//parameter is splitter //['d','0','g']

//reverse a string
//reversing only availabel on arry so use split to get array
//********HEre array join with string notes to give */
const reve="the macha and sucha come to bucha"
console.log(reve.split(" ").reverse().join(" "))

console.log(`HELOOOOOOOOOOOOOOOOO ${reve.split(" ")}`)
//repeat

const dogSays="woof"
console.log(dogSays.concat(" ").repeat(5))

//trim
//we use trim method to cleanup spaces

const trimString=" hello world "

console.log(trimString.trim())


//Excercise
const guestList='our guests are emma, jacob, isabella, ethan'

//get a length of a string and store it in a variiable callend length

const len=guestList.length
console.log(`length is ${len}`)

//uppercase the entire string

const upperCased=guestList.toLocaleUpperCase()
console.log(`uppercased  ${upperCased}`)

//check
const isEthen=upperCased.includes('ETHAN')
console.log(`isEthen available ${isEthen}`)

//substring that only contains the following
const substring=upperCased.slice(15)
console.log(`subs ${substring}`)

//gusests

const guests=substring.split(",")
console.log(`Guests ${guests}`)

//months

const months=['jan','feb','mar']
console.log(months)

//methods

//add to the end and returns the length
console.log(months.push({name:'Yash'}))
console.log(months[3].name)

//delete the last array
//returns the value of removed element
console.log(months.pop())

//shift
///deletes firtst element from an array
console.log(months.shift())

//add to start of an array and return length
console.log(months.unshift(['ram','veena']))

//splice
//add or removes fromany position of an array
//before 2 element delete 0 nothing and add rameswh
console.log(months.splice(2,0,'ramewsh'))
months.splice(2,2)
console.log(months)

//slice(1,2)//from starts to 2 exculsive return new array
console.log(months.slice(1))
console.log(months)

//for methods

//array forEach
//use when
//you want to do something each element of the aray

//dont use
//u want to stop or breakk the loop when some condition is true
//your working with with async(promises ,async)
const names=['ramesh','jen','jhony']
//Array.forEach((value,index,array))//we dont use array often
// names.forEach((element,i)=> {
//     console.log(element,i,names)
    
// });

const n=(name,i)=>console.log(name,i)

names.forEach(n)
//


//array map
//allocate mem 
//return new array

const inven=[
    {price:5,name:'eggs'},
    {price:4,name:'ham'},
    {price:3,name:'mayo'}
]

//array map
const prices=inven.map((item)=>item.price)
console.log(prices)