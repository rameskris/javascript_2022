function Person(fn,ln){
    this.fn=fn
    this.ln=ln
    this.fullname=function(){
          console.log(`${this.fn}`)
    }
}

const r=new Person('ram','krish')
r.fullname()


// constructor property

const j={}
console.log(j.constructor)

const v=[]
console.log(v.constructor)

//const susy=r.constructor('sus','kl')//its a mistake always use new keyword for constructor

const pr=new r.constructor('p','r')
console.log(pr.fullname())