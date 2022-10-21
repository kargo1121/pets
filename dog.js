fetch('dog.json')
.then(function(response) {
    return response.json()
  }).then(function(json) {
    bigdatagenerator(48, 7, json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })

// burgermenu
// const burgericon = document.querySelector(".burger-icon");
// const burgeractive = document.querySelector(".burger-active");
// const displayblock = document.querySelector(".display-block");
// const headermenu = document.querySelector(".header-menu");
// const burgerexit = document.querySelector(".burger-exit");
// const body = document.querySelector("body");
// function openburger(){
//     burgeractive.style.display = "block";
//     displayblock.style.display = "block";
//     headermenu.style.display = "none";
//     body.style.overflow = "hidden";
// }
// burgericon.addEventListener("click", openburger)
// function exitburger(){
//     displayblock.style.display = "none";
//     headermenu.style.display = "flex";
//     burgeractive.style.display = "none";
//     body.style.overflow = "unset";
// }
// burgerexit.addEventListener("click", exitburger)
// displayblock.addEventListener("click",exitburger)
// swiperslide
// const jenniferslider = document.querySelector(".jennifer-slider");
// const learnmoretext = document.querySelector(".learn-more-text");
// const jenniferhome = document.querySelector(".jennifer-home");
// const swiperslide = document.querySelector(".swiper-slide");
// const vector = document.querySelector(".vector");
// function openjennifer(){
//     displayblock.style.display = "block";
//     jenniferhome.style.display = "block";
//     body.style.overflow = "hidden";
// }
// function exitjennifer(){
//     displayblock.style.display = "none";
//     jenniferhome.style.display = "none";
//     body.style.overflow = "unset";
// }
// jenniferslider.addEventListener("click",openjennifer)
// learnmoretext.addEventListener("click",openjennifer)
// vector.addEventListener("click", exitjennifer)
// displayblock.addEventListener("click", exitjennifer)
// swiperslide.addEventListener("click", openjennifer)
//our-pets slider
let x = 15;
const prevlast = document.querySelector(".prev-last")
const prevone = document.querySelector(".prev-one")
const frontplace = document.querySelector(".front-place")
const nextone = document.querySelector(".next-one")
const nextlast = document.querySelector(".next-last")

let bigdata = []
function drawpets( startcount = 0,count) {
  const slider = document.querySelector(".slider")
  for(let i = startcount; i<count;i++) {
    const our_pets = document.createElement("div")
    const img = document.createElement("img")
    const paragraph = document.createElement("p")
    const button = document.createElement("button")
    our_pets.classList.add("slider-our-pets")
    img.classList.add("slider-photo-our-pets")
    paragraph.classList.add("pet-name")
    button.classList.add("link-button", "button-text")
    paragraph.innerHTML = bigdata[i].name
    img.src = bigdata[i].img
    button.innerHTML = "Learn more"
    our_pets.appendChild(img)
    our_pets.appendChild(paragraph)
    our_pets.appendChild(button)
    slider.appendChild(our_pets)
  }
}
function  randomnumber(list) {
  let arr = []
  let userarr = []
  let i = 0
  while (i < list.length) {
    let randomnumber = Math.floor(Math.random() * list.length)
    if (!userarr.includes(randomnumber)) {
      arr.push(list[randomnumber])
      userarr.push(randomnumber)
      i++
    }
  }
  return arr
}
function randomnumbergo() {
  arr = [0,1,2,3,4,5,6,7]
  pet=[
      ...randomnumber(arr),
      ...randomnumber(arr),
      ...randomnumber(arr),
      ...randomnumber(arr),
      ...randomnumber(arr),
      ...randomnumber(arr),
  ]
  return pet
}
console.log(randomnumbergo())
function bigdatagenerator (amount, count, data) {

  x = randomnumbergo()
  for (let i=0; i < amount; i++) {
    var kargo;
    bigdata.push(data[x[i]])
  }
  console.log(kargo)
  drawpets(0,8)
}
let startnum = 0
let lastnum = 8
nextone.onclick = function (){
  startnum += 8
  lastnum += 8
  checkdisablebtn()
  frontplace.innerthtml = (lastnum/8).tostring()
  return
}