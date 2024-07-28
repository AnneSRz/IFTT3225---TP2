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


/*  FETCH ALL JSON FROM VIA THE API FROM THE DATABASE  (CLIENT SIDE)

async function getAllRecipes() {
    try {
        const response = await fetch('/recipes');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const recipes = await response.json();
        console.log('All Recipes:', recipes);
        return recipes;
    } catch (error) {
        console.error('Error fetching recipes:', error);
    }
}


*/


/*

async function getRecipeById(id) {
    try {
        const response = await fetch(`/recipes/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const recipe = await response.json();
        console.log('Recipe:', recipe);
        return recipe;
    } catch (error) {
        console.error('Error fetching recipe:', error);
    }
}

*/



/*

async function createRecipe(recipeData) {
    try {
        const response = await fetch('/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipeData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const newRecipe = await response.json();
        console.log('New Recipe Created:', newRecipe);
        return newRecipe;
    } catch (error) {
        console.error('Error creating recipe:', error);
    }
}


*/



/*

async function updateRecipe(id, updatedData) {
    try {
        const response = await fetch(`/recipes/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const updatedRecipe = await response.json();
        console.log('Recipe Updated:', updatedRecipe);
        return updatedRecipe;
    } catch (error) {
        console.error('Error updating recipe:', error);
    }
}


*/



/*

async function deleteRecipe(id) {
    try {
        const response = await fetch(`/recipes/${id}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log('Recipe Deleted');
    } catch (error) {
        console.error('Error deleting recipe:', error);
    }
}


*/