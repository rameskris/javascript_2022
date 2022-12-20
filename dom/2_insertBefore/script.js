//insertBefore('element','location')

const h2=document.createElement('h2')
const h2Text=document.createTextNode(`i'm inside heading text`)
h2.appendChild(h2Text)
h2.classList.add('red')

document.body.appendChild(h2)

//insertbefore

const h1=document.createElement('h2')
const h1Text=document.createTextNode(`i'm inside heading one text`)
h1.appendChild(h1Text)
h1.classList.add('blue')

document.body.insertBefore(h1,h2)

//replace child
const h3=document.createElement('h3')
const h3Text=document.createTextNode(`i'm inside heading three text`)
h3.appendChild(h3Text)


document.body.replaceChild(h3Text,h2)

//insert before



