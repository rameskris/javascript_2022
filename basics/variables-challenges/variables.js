const firstName="ramesh";
const lastName="krishnan";
let address="main street"
address='first street'

console.log(firstName);
console.log(lastName)
console.log(address)

// string concatination
const street='danger st'

const country='india'
const fullmMilingAddress=street+' '+country
console.log(fullmMilingAddress)

//Numbers

const score1=10;
const score2=50;
const score3=100;

const totalScore=score1+score2+score3
const avgScore=totalScore/3

console.log(totalScore)
console.log(avgScore)


let plates=20;
let people=7;
let remainigPlates=plates%people
remainigPlates++;
console.log('There are '+remainigPlates+''+' plates available')

//Data types

//primitives -numbers,string,bool,null,undefined,symbol,
//objects,functions,array


//array
let fruits=['apple','orange','bananna','berries',45]

let firstFruit=fruits[0];
fruits[4]='kiwi'
console.log(firstFruit,fruits[4])


const fruitsc=['apple','orange','bananna','berries',45]

const firstFru=fruits[0];
fruitsc[4]='kiwi'
console.log(fruitsc,fruitsc[4])

//function

function hello(){
    console.log("Hello")
}
hello()


//functions


//function challenges
function calculateTotal(subTotal,tax){
    return (subTotal+tax);
}
var order1,order2,order3
order1=calculateTotal(5,2)
order2=calculateTotal(6,2)
order3=calculateTotal(7,2)

console.log(order1,order2,order3)

const calculateTotalA=function(subTotal,tax){
    return (subTotal+tax);
}

//object tut
const person={
    name:'jhon',
    lastname:'peters',
    age:40,
    education:false,
    married:true,
    sibilings:['anna','susan','peter'],
    greeting:function(){
        console.log("my name is jhon");
    }

}

console.log(person.age);
console.log(person.sibilings[2]);
person.greeting()  

//objects
const car={
    details:['Jagguar','fista',2021,'red'],
    hybridKeys:true,
    drive:function(){
        console.log("car is running")

    },
    stop(){
      console.log("car is stopped");
    }
}

car.details;
car.hybridKeys;
car.drive();
car.stop();



/********************/

const Car={
    make:'lambo',
    model:"turbo",
    year:2007,
    colors:['red','blue','green'],
    hybris:true,
    drive:function(){
        console.log("driving")

    },
    stop(){
     console.log("car stopped")
    }

}

Car.colors[0]
console.log(Car.colors[0]);
Car.drive()



/***********conditional */

const Person1={
    name:'ramesh',
    age:25,
    status:'tourist'


}
const Person2={
    name:'raja',
    age:15,
    status:'resident'


}

if(Person1.age>=18 && Person1.status==='resident'){
    console.log('person1')
}
else if(Person2.age>=18 && Person2.status==='tourist'){
    console.log('person2')
}
else{
    console.log("Bot not")
}

/***********do while */
let monry=0
do{
    console.log("money is " + monry)
    monry++
 
}while(monry<10)

/***********for loop */


/**************strings */

function fullName(firstName,lastName){
    let result =firstName+" "+lastName
    return result.toUpperCase();

}
let outPut=fullName('ramesh','krishnan')
console.log(outPut)


/********* */

function fullNameUsingLiterals(firstName,lastName){
    let result=`${firstName} ${lastName}`
    return result.toUpperCase()
}

console.log(fullNameUsingLiterals('jhon','wick'))

//object as parameter

function fullNameObject({firstName,lastName}){
    let result=`${firstName} ${lastName}`
    return result.toUpperCase()
}

console.log(fullNameObject({firstName:'maha',lastName:'vishnu'}))

/*********************String Mehods */

let text='Ramesh krishnan';
let reuslt=text.length;
console.log(text.length)
console.log(text.toLowerCase())
console.log(text.toLocaleUpperCase())
console.log(text.charAt(text.length-1))
console.log(text.indexOf('k'));

//string challenge

function fullNameAgain(firstname,lastName){
    //return (firstname+lastName).toUpperCase()
    return `${firstname} ${lastName}`

}
function fullNameAgainusingObject({firstname,lastName}){
    //return (firstname+lastName).toUpperCase()
    return `${firstname} ${lastName}`

}
console.log(fullNameAgain('ramesh','krishnan'))
console.log(fullNameAgain('mani','Arunachalam'))

/************array methods */

const names=['ram','krish','selva','arina','james'];
console.log(names.length)
console.log(names[names.length-1])
//concat

//const fruits=['apple','orange']
//names='rame'
let nameandFruits=names.concat(fruits)
console.log(typeof nameandFruits)

//
console.log(names.push('raja'))

const fN='ramesh'

//unshift
console.log(names.unshift('raja'))
let newVal=names.unshift('raja');


//reverse
console.log(names.reverse())
let reversed=names.reverse()
console.log(reversed)

//
const fakNames=['ram','kris','kamal']
const newFakNames=[];
let fakeLastName='baba'

for(let i=0;i<fakNames.length;i++){
    newFakNames.push(`${fakNames[i]} ${fakeLastName}`)

}
console.log(newFakNames)

//
const gas=[20,30,50,60];
const food=[23,44.5,79];

function calculateTotalgf(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=arr[i]
    }
    if(total>100){
        console.log("whoa thats too much")
    }
    return total;
}

let gasTot=calculateTotalgf(gas)
let foodTo=calculateTotalgf(food)
let anonymous=calculateTotalgf([23,30,87])

console.log({
    gasTotal:gasTot,
    foodTotal:foodTo,
    anonymous:anonymous

})

const num1=7;
let num2=num1;
num2=9;


console.log(num1)
console.log(num2)

const num1ob={
    name:'bob'
}

let num2ob={...num1ob}

//num2ob.name='raja'



console.log(num2ob)
console.log(num1ob)


///falsy value '' "" `` nan false null undefined 0

function cb(timing,name){
    return `${timing}! ${name}`
}

//higher order function
function greet(name,cb,myName){
    
    console.log(`${cb('Good morning',name)},My name is ${myName}`)
}

greet('ramesh',cb,'bobo')

//foreach
//do not return array
let pep=[
    {name:'ramesh',age:35,job:'developer'},
    {name:'raja',age:35,job:'no title'},
    {name:'kris',age:35,job:'god'},
]

function showItem(pep){
    console.log(pep.job)
}

pep.forEach(showItem)

pep.forEach(function(item){
    console.log(`${item.name} ${item.job}`)

})

//map
//Does return new array
//doesn,t change oringinal array
//use values from original when making new one

const peoplea=pep.map(function(person){
    console.log(`${person.name} ${person.age}`)
    return {
        name:person.name,
        age:person.age+20,

    }
})
console.log(peoplea[0].age)

//filter
//does retrun new array
//can manipulate the size of new array
//return based on condition
//condition doesnt match return empty

let pepa=[
    {name:'ramesh',age:25,job:'developer'},
    {name:'raja',age:35,job:'no title'},
    {name:'kris',age:35,job:'god'},
    {name:'kris',age:45,job:'manager'},
]

const pepPer=pepa.filter(function(person){
    return person.age<30
})

console.log(pepPer)

const pepPers=pepa.filter(function(person){
    return person.job==='manager'
})
console.log(pepPers)

//find
//find return single value based on conditions(if obj means return obj )

let pepWithId=[
    {name:'ramesh',age:25,job:'developer',id:1},
    {name:'raja',age:35,job:'no title',id:2},
    {name:'kris',age:35,job:'god',id:3},
    {name:'kris',age:45,job:'manager',id:4},
]

const nameArr=['rames','lali','ammu']

const findPep=pepWithId.find(function(item){
    return item.id===3
})

const findPepa=nameArr.find(function(item){
    return item==='lali'
})

console.log(findPep)
console.log(findPepa)


//reduce
//returns depends on item
//reduce to a single value array,object,number...
//acc total of calculation must must have to return
//curItem reflects current item


let pepWithSal=[
    {name:'ramesh',age:25,job:'developer',id:1,sal:200},
    {name:'raja',age:35,job:'no title',id:2,sal:400},
    {name:'kris',age:35,job:'god',id:3,sal:500},
    {name:'kris',age:45,job:'manager',id:4,sal:700},
]
//here we return number
//after function the zero represents initial value of acc
const total=pepWithSal.reduce(function(acc,curItem){
    acc+=curItem.sal;
    return acc

},0)
console.log(total)

///*******************Array Challenges*********************

//setup student array
// const stuName=['peter','ram','krish','arjun','ramya']
// const subject=['maths','englsih','tamil','physics','history']
// const students=[]

// for(let i=0;i<stuName.length;i++){
//     students.push({
//         id:i+1,
//         name:stuName[i],
//         score:Math.floor(Math.random()*100),
//         favouriteSubject:subject[Math.floor(Math.random()*(subject.length-1))]

//     })

// }
// console.log(students)

// const updatedStudents=students.map(function(item){
//     console.log(item)
//     return item
// })
// console.log(updatedStudents)

//map 

