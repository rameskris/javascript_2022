/*
Prototypal inhertance modal
js uses protypal inheritance modal.
that means that every constructor function/class has a protype property that is shared by every instance of the constructor/class.
so any properteis and methos or prototype can be accessed by every instance.
protype propery return a object

*/ 

function Account(name,initialBalance){
    this.name=name
    this.initialBalance=initialBalance
    
}
Account.prototype.bank='chase'
Account.prototype.deposit=function(amount){
        this.initialBalance+=amount;
        console.log(`your new blance is ${this.initialBalance}`)
    }
const ammu=new Account('ammu',500)
const ramesh=new Account('ramesh',500)

ammu.deposit(500)