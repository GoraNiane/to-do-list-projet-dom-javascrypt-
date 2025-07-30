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

  // Créer un nouvel élément <li>
  const nouvelleTache = document.createElement("li");
  nouvelleTache.innerText = input.value;

  // Marquer comme terminée au clic
  nouvelleTache.addEventListener("click", function () {
    nouvelleTache.classList.toggle("tache-terminee");
  });

  // Bouton supprimer
  const boutonSupprimer = document.createElement("button");
  boutonSupprimer.innerText = "❌";
  boutonSupprimer.style.marginLeft = "10px";

  boutonSupprimer.addEventListener("click", function (event) {
    event.stopPropagation(); // Évite de cocher la tâche en supprimant
    liste.removeChild(nouvelleTache);
  });

  // Ajouter le bouton dans le <li>
  nouvelleTache.appendChild(boutonSupprimer);

  // Ajouter le <li> dans la liste
  liste.appendChild(nouvelleTache);

  // Vider l'input
  input.value = "";
});
