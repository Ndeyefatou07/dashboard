

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
// Recuperations des informations
var nom = document.querySelector("#nom");
var prenom = document.querySelector("#prenom");
var email = document.querySelector("#email");
var tel = document.querySelector("#tel");
var update = document.querySelector("#ajouter");
var profile_pic=document.querySelector("#profile-pic");
var uploadFile=document.querySelector("#upload-field");
var imgUrl;

// Créer un objet utilisateur avec les valeurs des champs de saisie
var user = {

    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    tel: tel.value,
    profilPic: imgUrl == undefined ? "../tuto/avatar.png" : imgUrl
};
function enregistrerData() {

    // Vérifier si les champs sont vides
    if (nom === '' || prenom === '' || email === '' || tel === '') {
        alert("Veuillez remplir tous les champs avant d'enregistrer !");
        return;
    }
  
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
        <td><img src="${data.profilPic}" width="40" height="40"></td>
        <td>${data.nom}</td>
        <td>${data.prenom}</td>
        <td>${data.email}</td>
        <td>${data.tel}</td>
        <td>
            <button class="edit-btn"><i class="fas fa-eye"></i></button>
            <button class="del-btn" style="background-color: red;"><i class="fas fa-trash"></i></button>
        </td>
    </tr>
     `
    });


// SUPPRIMER
    var i;
    var allDelBtn =document.querySelectorAll(".del-btn");
    for(i=0; i<allDelBtn.length; i++){
        allDelBtn[i].onclick=function(){
        var tr=this.parentElement.parentElement;
        var id = tr.getAttribute("index");
        users.splice(id,1);
        localStorage.setItem("users", JSON.stringify(users));
        tr.remove();
       
    }
        }

    // EDITER
        var allEdit=document.querySelectorAll(".edit-btn");
    for ( i=0; i<allEdit.length; i++){
         allEdit[i].onclick=function(){
          var tr=this.parentElement.parentElement;
          var td=tr.getElementsByTagName("TD");
            var index=tr.getAttribute("index");
            var imgTag=td[0].getElementsByTagName("IMG");
            var profile_pic=imgTag[0].src;
            var editNom = td[1].innerHTML;
            var editPrenom = td[2].innerHTML;
            var editEmail =td[3].innerHTML;
            var editTel =td[4].innerHTML;
            // alert(nom);
            addBtn.click();
            enregistrerBtn.disabled = true;
            update.disabled= false;
            nom.value=editNom;
            prenom.value=editPrenom;
            email.value=editEmail;
            tel.value=editTel;
            profile_pic.src=profilePic;


     }

   }
}
    

// getData();

// ajout image

uploadFile.onchange = function() {
    var fileSizeInBytes = uploadFile.files[0].size;
    var fileSizeInKB = fileSizeInBytes / 1024;

    if (fileSizeInKB < 200) {
        var fileRead = new FileReader();
        fileRead.onload = function(e) {
            // Le contenu du fichier a été lu avec succès
            // Vous pouvez accéder à l'URL de données via 'fileReader.result'
            // Par exemple, pour afficher l'image :
            imgUrl = e.target.result;
            profile_pic.src = imgUrl;
            console.log(imgUrl);
        };
        fileRead.readAsDataURL(uploadFile.files[0]);
    } else {
        alert("Le fichier est trop grand. Veuillez choisir un fichier de moins de 16 ko.");
    }
};


 


 








