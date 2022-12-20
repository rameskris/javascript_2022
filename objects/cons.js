//blue print
//factory functions and constructor functions

//constructor functions

//new-creates new object ,points to instanceof,omit return

//common signal using capital letter function Person(){}
//if we declare functions in global context its pointing to window object

function Createperson(firstName,lastName){
   this.firstName=firstName;
   this.lastName=lastName;
   this.showName=function(){
    console.log(`your full name is ${this.firstName}${this.lastName}`)
   }
}

const ram=new Createperson('ramesh','krishnan')
ram.showName()