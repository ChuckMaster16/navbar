const navbar= document.querySelector('.navbar');
const searchbox = document.querySelector('.search-box .bx-search');
const input = document.querySelector('.input-box');

// <i class="fa-solid fa-x"></i>
searchbox.addEventListener("click", ()=>{
navbar.classList.toggle('showInput');
if(navbar.classList.contains('showInput')){
  searchbox.classList.replace("bx-search", "fa-x")
}else{
    searchbox.classList.replace("fa-x", "bx-search")
}
})

const menuopen=document.querySelector('.navbar .menu-btn_burger');
const menuclose=document.querySelector('.nav-links .fa-x')
const navlinks=document.querySelector('.nav-links');
menuopen.addEventListener("click", ()=>{
  navlinks.style.left="0%";
});
menuclose.addEventListener("click", ()=>{
  navlinks.style.left="-100%";
});

const htmlCss=document.querySelector('.css-arrow');
htmlCss.addEventListener('click', ()=>{
  navlinks.classList.toggle('show1');
});

const moreCss=document.querySelector('.more-arrow');
moreCss.addEventListener('click', ()=>{
  navlinks.classList.toggle('show2');
});
const jsCss=document.querySelector('.js-arrow');
jsCss.addEventListener('click', ()=>{
  navlinks.classList.toggle('show3');
});
