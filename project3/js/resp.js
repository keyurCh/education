burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNow = document.querySelector('.rightNow');




// burger.addEventListner('click', ()=>{
//   rightNow.classList.toggle('v-class-resp');
//   navList.classList.toggle('v-class-resp');
//   navbar.classList.toggle('h-nav-resp');
// })

burger.addEventListener("click", ()=>{
    rightNow.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});