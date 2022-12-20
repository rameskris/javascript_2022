//web storage api-provided by browser
//session storage(data prsists betwwen the sessions while our tab is still open) ,local storage(b/w opening and closing of the browser)
//setItem,getItem,removeItem,clear

//localStorage.setItem('name','jhon')
//sessionStorage.setItem('name','jhon')

//localStorage.setItem('name','ram')
//sessionStorage.setItem('name','kris')

localStorage.setItem('name','ramesh')
localStorage.setItem('friend','krish')
localStorage.setItem('job','dev')
localStorage.setItem('adress','street')

//to acess

const friend=localStorage.getItem('friend')
console.log(friend)
localStorage.removeItem('friend')

//to clear all from local

localStorage.clear()

//local storage with multiple values
//JSON.stringify(),JSON.parse()


const fruits=['apple','bannan','kiwi']

localStorage.setItem('fruits',JSON.stringify(fruits))

const val=JSON.parse(localStorage.getItem('fruits'))
console.log(localStorage.getItem('fruits'))//["apple","bannan","kiwi"]
console.log(val)//(3) ['apple', 'bannan', 'kiwi']


let friends;

if(localStorage.getItem('friends')){
    friends=JSON.parse(localStorage.getItem('friends'))
}else{
    friends=[]
}

console.log(friends)

friends.push('kkkkk')
localStorage.setItem('friends',JSON.stringify(friends))
