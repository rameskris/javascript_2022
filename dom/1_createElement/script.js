//
// const result=document.querySelector('result')

// //createElement('div')
// const simpleDiv=document.createElement('div')
// //crete text 
// const simText=document.textContent('Hello im for sim div')

// //now append the text to div
// //using appendCHild()

// simpleDiv.appendChild(simText)

// //now append it to body

// document.body.appendChild(appSimdev)

//chall

const divEl=document.createElement('div')
const heading=document.createElement('h1')
const para=document.createElement('p')
const headText=document.createTextNode('simple Heading')
console.log(headText)
heading.appendChild(headText)
heading.classList.add('h1')
para.classList.add('para')
divEl.appendChild(heading)

divEl.appendChild(para)
divEl.classList.add('result')

document.body.append(divEl)

//insertBEfore

