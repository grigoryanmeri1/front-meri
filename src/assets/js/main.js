//= components/script.js
//= components/script2.js
//= components/script3.js

let scrollPrev = 0;

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  
  const scrollY = window.scrollY;

  if (scrollY > 200 && scrollY > scrollPrev) {
    navbar.classList.add('scroll');
  } else {
    navbar.classList.remove('scroll');
  }
  scrollPrev = scrollY;
});

const menuBar = document.querySelector('.menu_bar');
const navBar = document.querySelector('.navbar');
const main = document.querySelector('main');
menuBar.addEventListener('click', function(){
  navBar.classList.toggle('active');
  if(navBar.classList.contains('active')){
    main.style.opacity = '.5';
  }else{
    main.style.opacity = '1';
  }
})
