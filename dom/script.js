//getElementById
// const h1=document.getElementById('h1');
// h1.style.color='orange'

// const but=document.getElementById('but')
// but.style.backgroundColor='green'

//

// const li=document.getElementsByTagName('li')
// console.log(li)
// console.log(li[0])
// console.log(li[0].color)
// li[3].style.color='green'

// const bli=[...li]

// bli.forEach(function(li){
//     console.log(li)

// })

// console.log(bli)

// const tr=document.querySelector('#result')
// console.log(tr.firstChild)
// console.log(tr.lastChild)
// console.log(tr.childNodes)
// console.log(tr.children)



/*
Understand that .children is a property of an Element. 1 Only Elements have .children, and these children are all of type Element. 2

However, .childNodes is a property of Node. .childNodes can contain any node. 3

A concrete example would be:

let el = document.createElement("div");
el.textContent = "foo";

el.childNodes.length === 1; // Contains a Text node child.
el.children.length === 0;   // No Element children.
*/

//
// const ul=document.querySelector('#result')
// console.log(ul)

// const orange=ul.childNodes//return nodelist including text and spaces

// console.log(orange[1].style.color='red')


// const onlyChildren=ul.children

// console.log(onlyChildren)

// const spChild=[...onlyChildren]
// console.log(spChild)

////Parent

// const heading=document.querySelector('h2')
// console.log(heading.parentElement)
// console.log(heading.parentElement.style.backgroundColor='green')
// console.log(heading.parentElement.parentElement.style.color='red')

//previous and next sibiling
//sibiling doesnt exit you get null

// const first=document.querySelector('.first')
// console.log(first.nextSibling.nextSibling.style.color='blue')

//previouselementsibling //differnce is whitespace //its only gets you element

/*text content*/
// const h1=document.querySelector("#special")

/*get attribute set attribute()*/

// const first=document.querySelector('.first')
// const idValue=first.getAttribute('id')
// console.log(idValue)

// const link=document.getElementById('link')
// const showLink=link.getAttribute('href')
// console.log(showLink)

// link.setAttribute('href','https:\\www.google.com')
// link.setAttribute('target','_blank')

// const noAttr=first.nextElementSibling.nextElementSibling
// noAttr.textContent='now i have attribute'
// console.log(noAttr.setAttribute("href",'https:\\www.google.com'))

// const ulCh=document.querySelector('ul')
// const allCh=ulCh.children
// console.log(allCh[2].textContent='corect')

// class list and class name

//const h1=document.querySelector('h1')
//console.log(h1.className)

//const h2=document.querySelector('#second')
//h2.className='colors'
//h2.className+='text'   //here youc cant add second class
                        //so use class list
//console.log(h1.className)

//const h3=document.querySelector('#third')//here both class will effect
// h3.classList.add('colors')
// h3.classList.add('text')

// h3.classList.add('colors','text')

// h2.classList.add('colors')


//check with contains

// const h2C=h2.classList.contains('colors')//return bool
// if(h2C){
//     console.log('gotcha!!')
//     h2.classList.remove('colors')
// }else{
//     console.log('Bye')
// }


///create element() and create text node()

const result=document.querySelector('#result')

//create empty element

const simpleDiv=document.createElement('div')

//create a text node
const divTex=document.createTextNode('A simple Text')

//append text node to simpledive using append child
const simDiv=simpleDiv.appendChild(divTex)

//append the created div to body
document.body.appendChild(simDiv)

//
const secondH2=document.createElement('h2')
console.log(secondH2)
cosnth2Text=document.createTextNode('Im second Child of result')
secondH2.appendChild(cosnth2Text)
secondH2.classList.add('blue')
console.log(result.appendChild(secondH2))
