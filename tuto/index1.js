

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
// recupere les données dans le local storage 

var users = JSON.parse(localStorage.getItem('users')) || [];
// s getData();electionne le bouton enregitrer

var enregistrerBtn = document.querySelector("#enregistrer");
var formRegistre=document.querySelector("#Registre");


enregistrerBtn.onclick = function(e) {
    e.preventDefault();
    enregistrerData();
    getData();
    formRegistre.reset('');
    closeBtn.click();
   
};
function enregistrerData() {
// Recuperations des informations
var nom = document.querySelector("#nom").value;
var prenom = document.querySelector("#prenom").value;
var email = document.querySelector("#email").value;
var tel = document.querySelector("#tel").value;
var imgUrl;
    // Vérifier si les champs sont vides
    if (nom === '' || prenom === '' || email === '' || tel === '') {
        alert("Veuillez remplir tous les champs avant d'enregistrer !");
        return;
    }

    // Créer un objet utilisateur avec les valeurs des champs de saisie
    var user = {
        nom: nom,
        prenom: prenom,
        email: email,
        tel: tel,
        profilPic: "../tuto/avatar.png" 
    };
  
  // Ajouter le nouvel utilisateur à la liste
  users.push(user);

  // Stocker la liste des utilisateurs mise à jour dans le local storage
  localStorage.setItem('users', JSON.stringify(users));
 

  // Afficher une confirmation ou effectuer toute autre action nécessaire
  alert("Les informations ont été enregistrées avec succès !");

  // Afficher les données enregistrées dans la console
  getData();
}
var tableData=document.querySelector("#userTable");

const getData=()=>{
    tableData.innerHTML= "";
    users.forEach((data,index)=>{
        console.log(data);
        tableData.innerHTML += `
        <tr index='${index}'>
        <td> <img src="${data.profilPic}" width="40" height="40"></td>
        <td>${data.nom}</td>
        <td>${data.prenom}</td>
        <td>${data.email}</td>
        <td>${data.tel}</td>
        <td>
            <button><i class="fas fa-eye"></i></button>
            <button style="background-color: red;"><i class="fas fa-trash"></i></button>
        </td>
    </tr>
     `
    })
}

// ajout image
var profile_pic=document.querySelector("#profile-pic");
var uploadFile=document.querySelector("#upload-field");
uploadFile.onchange=function(){
    if(uploadFile.files[0].sizes<5000000){
        var fileRead = new FileReader();
        fileRead.onload = function(e) {
            // Le contenu du fichier a été lu avec succès
            // Vous pouvez accéder à la URL de données via 'fileReader.result'
            // Par exemple, pour afficher l'image :
            imgUrl=e.target.result;
            profile_pic.src = imgUrl;
            console.log(imgUrl);
        };
        fileRead.readAsDataURL(uploadFile.files[0]);
    }else{
        alert("fichier Trop grand")
    }
}
 


 








