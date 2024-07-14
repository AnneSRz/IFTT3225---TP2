document.addEventListener('DOMContentLoaded', function() {
  tuilesDeRecettes();
});


function tuilesDeRecettes() {
  const conteneur = document.getElementById('conteneurRecette');

 
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'fichierPHP.php', true);

 
  xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 400) {
          const lesRecettes = JSON.parse(xhr.responseText);

          lesRecettes.forEach(recette => {
              const tuile = document.createElement('div');
              tuile.classList.add('mb-3', 'tuileRecette');
              tuile.setAttribute('data-toggle', 'modal');
              tuile.setAttribute('data-target', '#recipeModal');

              tuile.innerHTML = `
                <!--Pour modifier ou supprimer la tuile de la recete-->
                <div class="d-flex justify-content-end mb-2">
                  <i class="fas fa-edit crayonEdit mr-2" style="padding-top: 1%;" data-toggle="modal" data-target="#editModal"></i>
                  <i class="fas fa-trash poubelle" style="padding: 1% 1%;"></i>
                </div>
      
                <!-- On met les infos pertinent de la recette ici -->
                <div class="titre-recette" data-toggle="modal" data-target="#tuileRecetteModal">
                  <img src="../images/${recette.image_recette}" alt="Image de la recette" class="image-tuile">
                  <div class="mt-3">
                    <h4 class="mt-3 mb-2 nom-tuile">${recette.nom}</h4>
                      <p class="prep-tuile"><strong>Temps de préparation:</strong>${recette.prep_time} min</p>
                      <p class="type-tuile"><strong>Type : </strong>${recette.type_recette}</p>
                  </div>
                </div>
              `;

              conteneur.appendChild(tuile);
          });
      } 
    };
    // EnvoyeR requête
    xhr.send();
}
