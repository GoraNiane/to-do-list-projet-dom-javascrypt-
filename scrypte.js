const input = document.getElementById("tacheInput");
const bouton = document.getElementById("ajouterBtn");
const liste = document.getElementById("listeTaches");
const messageErreur = document.getElementById("erreur");

bouton.addEventListener("click", function () {
  if (input.value.trim() === "") {
    messageErreur.innerText = "Veuillez écrire une tâche avant d'ajouter.";
    return;
  }

  messageErreur.innerText = ""; 

  
  const nouvelleTache = document.createElement("li");
  nouvelleTache.innerText = input.value;


  nouvelleTache.addEventListener("click", function () {
    nouvelleTache.classList.toggle("tache-terminee");
  });

  
  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.innerText = "x";
  boutonSupprimer.style.marginLeft = "10px";

  boutonSupprimer.addEventListener("click", function (event) {
    event.stopPropagation();
    liste.removeChild(nouvelleTache);
  });

  
  nouvelleTache.appendChild(boutonSupprimer);

  
  liste.appendChild(nouvelleTache);


  input.value = "";
});
