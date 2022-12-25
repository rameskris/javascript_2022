class Account{
    constructor(name,balan){
        this.balance=balan;
        this.name=name
    }
    // common property each and every instance
    bank='chase'
    //common to all
    deposit(amount){
        this.balance+=amount;
        console.log(`Balance is ${this.balance}`)
    }
}

const rames=new Account('rames',300)
console.log(rames.name)