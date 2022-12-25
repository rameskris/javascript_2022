function createPerson(firstName,lastName){

    return{
        firstName,
        lastName,
        showFullName:function(){
            console.log(`${this.firstName} ${this.lastName}`)
        }
    }
}

const ramesh=createPerson('ramesh','krishnan')
ramesh.showFullName()

const ram=createPerson('ram','krish')
ramesh.showFullName()