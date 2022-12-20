// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

const prevBtn=document.querySelector('.prev-btn')
const nextBtn=document.querySelector('.next-btn')
const surpriseMe=document.querySelector('.random-btn')
const btnContainer=document.querySelectorAll('.btn-container')
const author=document.getElementById('author')
const pImg=document.getElementById('person-img')
const pJob=document.getElementById('job')
const pText=document.getElementById('info')
const surprise=document.querySelector('.random-btn')

let prevCount=reviews.length-1

let i=0
btnContainer.forEach(function(item){
  item.addEventListener('click',function(e){
    
   
       if(e.target.classList.contains('fa-chevron-left')){
        for(let i=prevCount;i>=0;){
          author.textContent=reviews[i].name
          pImg.src=reviews[i].img
          pJob.innerText=reviews[i].job
          pText.innerText=reviews[i].text
          prevCount--
          i=prevCount
          if(prevCount===0){
            prevCount=reviews.length-1
          }
          break
          
        }
        
       } else if(e.target.classList.contains('fa-chevron-right')){
           for(i;i<reviews.length;){
            author.textContent=reviews[i].name
          pImg.src=reviews[i].img
          pJob.innerText=reviews[i].job
          pText.innerText=reviews[i].text
          i++
          if(i===reviews.length){
            i=0
          }
          break

           }

       }
  })
})

//surprise button
surprise.addEventListener('click',function(){
  const randomPerson=Math.floor(Math.random()*reviews.length)
          author.textContent=reviews[randomPerson].name
          pImg.src=reviews[randomPerson].img
          pJob.innerText=reviews[randomPerson].job
          pText.innerText=reviews[randomPerson].text
})

//initial load

let currItem=3;
window.addEventListener('DOMContentLoaded',function(){
  const item=reviews[currItem]
         author.textContent=item.name
          pImg.src=item.img
          pJob.innerText=item.job
          pText.innerText=item.text

})
