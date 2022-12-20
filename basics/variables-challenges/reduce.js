

 
function totalVotes(arr) {
   // your code here    
   
//   let tot= arr.reduce(fucntion(acc,cur){
//         if(cur.voted===true){
// 		acc=acc+1
// 		}
// 		return acc
		
		
   
//    },0)

let red=arr.reduce(function(acc,cur){
      if(cur.voted){
        acc+=1

      }
      return acc
        
},0)

return red
   
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters))



function shoppingSpree(arr) {
    // your code here    
    let tot=arr.reduce(function(acc,cur){
        acc+=cur.price
        return acc

    },0)
    return tot
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005


 function flatten(arr) {
    // your code here    
    let rd=arr.reduce(function(acc,cur){
         acc=acc.concat(cur)
         return acc
         
        
    },[])
    console.log(rd)
    return rd
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];


 var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   // your code here
   let voteOb=arr.reduce(function(acc,cur){
    if(cur.voted){
        if(cur.age>18 && cur.age<=25){
            acc.numYoungVotes++
        }else if(cur.age>25 && cur.age<=32){
            acc.numMidVotesPeople++
        }else if(cur.age>32 && cur.age<60){
            acc.numOldVotesPeople++
        }
    }
    if(cur.age>18 && cur.age<=25){
        acc.numYoungPeople++
    }else if(cur.age>25 && cur.age<=32){
        acc.numMidsPeople++
    }else if(cur.age>32 && cur.age<=60){
        acc.numOldsPeople++
    }else if(cur.age>32 && cur.age<=60){
        acc.numOldsPeople++
    }

    return acc

   },{ numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0 
  })
  return voteOb
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4 
}
*/