

// const body=body.querySelector(".body");
const sidebar=document.querySelector(".sidebar");
const menuLinks=document.querySelector(".menu-links");
const toggle=document.querySelector(".toggle");
var addBtn=document.querySelector("#add-btn");
var modal=document.querySelector(".modal");
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
addBtn.onclick=function(){
    modal.classList.add("active");
}






