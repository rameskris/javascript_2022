//All Objects in javascript have access to constructor property that returns a constructor funtion that created it
//built in constructor fucntions
//arrays and functions are objects in javascript

function Createperson(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;
    this.showName=function(){
     console.log(`your full name is ${this.firstName}${this.lastName}`)
    }
 }

const jhon=new Createperson('rr','rr')
console.log(jhon.constructor)//its points to the function created Createperson(){}

const kr={}
console.log(kr.constructor)//objet(){} there is a constructor function called object thats create a object for us

const list=[];
console.log(list.constructor)//Array() {} constructor function name of array

const sayHi=function(){};
console.log(sayHi.constructor) //Function(){}


const ss=new jhon.constructor('vijay','antony')
