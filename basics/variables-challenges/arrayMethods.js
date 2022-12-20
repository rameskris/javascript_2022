
console.log(students)

//map method

const updatedStudents=students.map(function(item){
    item.role='Student'
    return item
})
console.log(updatedStudents)

//filter 

// const highScores=students.filter(function(item){
//     return item.score>80

// })

// console.log(highScores)

/**alter syntax */
// const highScores=students.filter(function(item){
//    if(item.score>80){
//     return item
//    }

// })

/**alter syntax */
const highScores=students.filter(function(item){
    if(item.score>80) return item
    
 
 })

console.log(highScores)

///fiind
//find specific id
const specificId=students.find(function(item){
        return item.id===5
})

console.log(specificId)

//reduce avreage score

const averageScore=students.reduce(function(acc,curItem){
    
    acc+=curItem.score
    return acc


},0)/students.length

console.log(`Average Score is ${averageScore}`)

//survey

//my solution
// const survey=students.reduce(function(subject,student){
  
//     if(student.favoriteSubjects==='English'){
        
//         subject['English']+=1
//     }
//     if(student.favoriteSubjects==='cs'){
    
//         subject['cs']+=1
//     }
//     if(student.favoriteSubjects==='Maths'){
      
//         subject['Maths']+=1
//     }
//     console.log(`After ${subject}`)
    
//    return subject

// },{English:0,cs:0,Maths:0})

// console.log( survey)


const survey=students.reduce(function(subject,student){
  let surv=student.favoriteSubjects
    if(subject[surv]){
        subject[surv]=subject[surv]+1
    }else{
        subject[surv]=1
    }
  
    
    return subject
  
   

},{})

console.log( survey)