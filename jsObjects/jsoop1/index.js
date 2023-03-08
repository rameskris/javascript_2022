const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw')
    }

}
circle.draw()

// factory

function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log("draw circle")
        }
    }
}

const circle1 = createCircle(2)
circle1.draw()

//constructor

function Circle(radius) {
    this.radius = radius
    this.draw = function () {
        console.log('drawing circle')
    }
}

const firstCircle = new Circle(1)
firstCircle.draw()

// 

function Square(rad){
    this.rad=rad;
    this.draw=function(){
        console.log('draw sq')
    }
}

const sq=new Square(1)
sq.draw()

const sq1=new Function('radiu',`this.draw=function(){
        console.log('draw sq')
    }`)

const sqw=new sq1(1)

///recreate
const hi=new Function('name',`this.sayName=function(a,b){
    console.log(a,b)}`)

const h=new hi('ram')
h.sayName("rames",4)


///objects in js are dynamic

function Car(model){
    this.model=model
    this.start=function(){
        console.log(`${this.model} started`)
    }
}

const bseries=new Car("BMW")

//after we create we can add or delete

bseries.location={x:1}
//or use when dynamic or specia character in name
bseries['location']={y:1}
//here u set only key
const propName='loccccccccccccccccccccccccccccccccccccccccccccccccc'
//here only you give or set value
bseries[propName]=9
bseries['kl']=0

//delete
// delete bseries['propName']

console.log(bseries[propName])

//objects enumerate

for(let key in bseries){
//     if(typeof key !=="function"){
//       console.log(key + "Hello")
// }
  // console.log(typeof bseries[key])
//        if(typeof bseries[key] !=="function"){
//       console.log(key + "H")
// }

//TO acces properties
console.log(bseries[key])

    }
      
//
console.log(Object.keys(bseries))//(4) ['model', 'start', 'location', 'loc']
console.log('location' in bseries)// true

//
const n=[1,2,34]

for(let key in n){
console.log(n[key])
}


console.log(Object.keys(n))
console.log(6 in n)


//abstraction

function Trim(radius){
    this.radius=radius
    //declare as local 
    let name='raj'
    let defaultLocation={x:2}
    let cd=function(){
        console.log("nose")
    }

    this.draw=function(){
       cd()
        
        console.log('draw',name,defaultLocation.x)
    }
}
//only this will get access
const tr=new Trim(6)
tr.draw()


//getters and setters
//used to read a property(gettter)

function rectangle(){
    let defaultLocation={x:0,y:0}

    Object.defineProperty(this,'default',{
        get:function(){
            return defaultLocation
        },
        set:function(value){
            if(!value.x || !value.y)
                 throw new Error("fuck off")

            defaultLocation=value
           
            

        }
    })
}
const rec=new rectangle()
console.log(rec.default)
rec.default={x:1,y:1}

//STOP WATCH

function stopWatch(){
  this.duration=0;
  let track=0;
  this.start=function(){

   if(!this.track) {

   
    this.track=setInterval(()=>{
        this.duration+=1
        
    },1000)
}else{
    throw new Error("already started")
}
  } 
 this.stop=function(){
    
    clearInterval(this.track)
    this.track=0
  
 }
 this.reset=function(){
    this.duration=0;
    this.track=0
 }
 Object.defineProperty(this,'track',{
    get:function(){
        return track
    },
    set:function(value){
       track=value
    }
 })
}

const sw=new stopWatch()


//author solution

function stopWatches(){
    let startTime,endTime,running,duration=0;
    this.start=function(){
        if(running)
        throw new Error("stop watch has already started")

        running=true
        startTime=new Date();

    }
    this.stop=function(){
        if(!running)
         throw new Error("Alredy  sttoped")
        running=false;
        endTime=new Date()
        const seconds=(endTime.getTime()-startTime.getTime())/1000
        duration+=seconds

    }
    this.reset=function(){
        startTime=null
        endTime=null
        running=false;
        duration=0

    }
    Object.defineProperty(this,'duration',{
        get:function(){
            return duration
        }
    })

}

const st=new stopWatches()
