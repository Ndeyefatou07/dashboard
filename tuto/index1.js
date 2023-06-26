

// const body=body.querySelector(".body");
const sidebar=document.querySelector(".sidebar");
const menuLinks=document.querySelector(".menu-links");
const toggle=document.querySelector(".toggle");

var closeBtn=document.querySelector(".close-icon");



// const searchBtn=body.querySelector(".search-box");
// const modeSwitch=body.querySelector(".toggle-switch");
// const modeText=body.querySelector(".mode-text");

//  modeSwitch.addEventListener("click",()=>{
//     body.classList.toggle("dark");
//  });

toggle.addEventListener("click",()=>{
    // alert("ggg");
    sidebar.classList.toggle("active");
    menuLinks.classList.toggle("active");
    

});
var addBtn=document.querySelector("#add-btn");
var modal=document.querySelector(".modal");
addBtn.onclick=function(){
    modal.classList.add("active");
}
closeBtn.addEventListener("click",()=>{
    modal.classList.remove("active");
    

});
var enregistrerbtn=document.querySelector(".enregistrer");
enregistrerbtn







