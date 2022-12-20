//setTimeout run function once after specific time
//pass function as reference
//duration in ms
//returns unique identifier
//clear timeout to cancel
// default will be zero
//available on window object


function sayHello(){
    console.log("hi")

}

sayHello()

setTimeout(sayHello,1000)

//alternative approach
const si=setTimeout(function(){
    console.log(" sivaya nama")

},5000)

//pass arguments
function sayName(name,score){
    console.log(`your name is ${name} and score is ${score}`)
}

setTimeout(sayName,1000,'ramesh',55)
//clear interval

const cle=setTimeout(sayName,2000,'rame',76)
clearTimeout(si)