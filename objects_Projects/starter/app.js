// function Counter(element,value){
//   this.element=element
//   this.value=value
//   this.resetBtn=this.element.querySelector('.reset')
//   this.increaseBtn=this.element.querySelector('.increase')
//   this.decreaseBtn=this.element.querySelector('.decrease')
//   this.valueDom=this.element.querySelector('.value')
//   this.valueDom.textContent=this.value
//   this.increase=this.increase.bind(this)
//   this.decrease=this.decrease.bind(this)
//   this.reset=this.reset.bind(this)
// this.increaseBtn.addEventListener('click',this.increase)
// this.decreaseBtn.addEventListener('click',this.decrease)
// this.resetBtn.addEventListener('click',this.reset)
  
// }
//  console.log(Counter)



// function getElement(selection){
//     const element=document.querySelector(selection)
//     if(element){
//         return element
//     }throw new Error(`check the selector not available${selection}`)
// }

// Counter.prototype.increase=function(){
//     this.value++
//     this.valueDom.textContent=this.value
// }
// Counter.prototype.decrease=function(){
//     this.value--
//     this.valueDom.textContent=this.value
// }
// Counter.prototype.reset=function(){
//     this.value=0
//     this.valueDom.textContent=this.value
// }

// const firstCounter=new Counter(getElement('.first-counter'),100);
// const secondCounter=new Counter(getElement('.second-counter'),200);



// function Counter(element,value){
//     this.element=element
//     this.value=value
//      this.increaseBtn=element.querySelector('.increase')
//      this.decreaseBtn=element.querySelector('.decrease')
//      this.resetBtn=element.querySelector('.reset')
//      this.valueDom=element.querySelector(".value")
//      this.valueDom.textContent=this.value
//     this.increase=this.increase.bind(this)
//     this.decrease=this.decrease.bind(this)
//     this.reset=this.reset.bind(this)
//      this.increaseBtn.addEventListener('click',this.increase)
//      this.decreaseBtn.addEventListener('click',this.decrease)
//      this.resetBtn.addEventListener('click',this.reset)
     
// }
// Counter.prototype.increase=function(){
    
//     this.value++
//     this.valueDom.textContent=this.value
    
// }
// Counter.prototype.decrease=function(){
    
//     this.value--
//     this.valueDom.textContent=this.value
    
// }
// Counter.prototype.reset=function(){
    
//     this.value=0
//     this.valueDom.textContent=this.value
    
// }
// function getElement(selection){
//     const element=document.querySelector(selection)
//     if(element){
//         return element
//     }throw new Error(`no element found${element}`)
// }
// const first=new Counter(getElement('.first-counter'),100)
// const second=new Counter(getElement('.second-counter'),100)

//class

class Counter{
    constructor(element,value){
    this.element=element
    this.value=value
     this.increaseBtn=element.querySelector('.increase')
     this.decreaseBtn=element.querySelector('.decrease')
     this.resetBtn=element.querySelector('.reset')
     this.valueDom=element.querySelector(".value")
     this.valueDom.textContent=this.value
    this.increase=this.increase.bind(this)
    this.decrease=this.decrease.bind(this)
    this.reset=this.reset.bind(this)
     this.increaseBtn.addEventListener('click',this.increase)
     this.decreaseBtn.addEventListener('click',this.decrease)
     this.resetBtn.addEventListener('click',this.reset)
     
     
}
increase=function(){
    
    this.value++
    this.valueDom.textContent=this.value
    
}
decrease(){
    
    this.value--
    this.valueDom.textContent=this.value
    
}
reset(){
    
    this.value=0
    this.valueDom.textContent=this.value
    
}
}
function getElement(selection){
    const element=document.querySelector(selection)
    if(element){
        return element
    }throw new Error(`no element found${element}`)
}
const first=new Counter(getElement('.first-counter'),100)
const second=new Counter(getElement('.second-counter'),100)