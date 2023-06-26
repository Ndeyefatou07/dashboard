const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');
const dsidebar = document.querySelector('.d-sidebar');
const dnone = document.querySelector('.btn-open');

 
 

hamburger.addEventListener('click', () => {
  sidebar.classList.remove("nav-open");
 
  sidebar.classList.add("nav-close");
  hamburger.classList.toggle('open');
  hamburger.classList.add('close')
});
