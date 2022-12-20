//innerHtml 
//textContent
const firstUl=document.getElementById("first")
const divId=document.getElementById("second")

const orLi=document.createElement('ol')
orLi.innerHTML=`  <li class="item">list item</li>
<li>list item</li>  <li class="item">list item</li>
<li>list item</li>`

document.body.insertBefore(orLi,divId)
