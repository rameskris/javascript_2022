//blue print
//factoory functions and constructor functions


//factory functions

// function createPerson(fn,ln){
//   return{
//      firstName:fn,
//     lastName:ln,
//     showName:function(){
//         console.log(`${this.firstName} ${this.lastName} js`)
//     }
//   }

// }

// const rameshk=createPerson('rames',"kris")
// const ramesk=createPerson('rame',"kris")
// rameshk.showName()
// ramesk.showName()


function createPerson(firstName,lastName){
  return {
    firstName:firstName,
    lastName:lastName,
    showName:function(){
    console.log(`full name is ${this.firstName} ${this.lastName} i love js`)
    }

  }
}
const name=createPerson('rames','krish')
console.log(name.showName())