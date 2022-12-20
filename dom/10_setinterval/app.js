//setInterval -runs function repeatly at specific intervals

///pass function as reference
//duration in ms
//returns unique identifier
//clearinterval to cancel
// default will be zero
//available on window object

function syaName(name){
    console.log('your name is ', name)
}

const tim=setInterval(syaName,2000,'ramesh')

setTimeout(function(){
    clearInterval(tim)
},5000)