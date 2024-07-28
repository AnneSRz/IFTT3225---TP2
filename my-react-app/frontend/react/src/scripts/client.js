//GET
/*
    fetch(`localhost:3000/api/recipe/${recipeName}`)
        .then(response =>    response.json()   )
        .then(data => {          console.log('Recipe:', data);     })
        .catch(error =>          console.error('Error:', error)      );
 */


//POST
/*
    fetch('/recipes', {
        method: 'POST',
        headers: {            'Content-Type': 'application/json'        },
        body: JSON.stringify({ name: recipeName, ingredients })
    })
        .then(response =>       response.json()      )
        .then(data => {            console.log('Added:', data);        })
        .catch(error =>            console.error('Error:', error)         );
*/


//PUT
document.getElementById('updateRecipeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const recipeName = document.getElementById('updateRecipeName').value;
    const ingredients =document.getElementById('updateIngredients').value.split(',');

    fetch(`/recipes/${recipeName}`, {
        method: 'PUT',
        headers: {             'Content-Type': 'application/json'        },
        body: JSON.stringify({ ingredients })
    })
        .then(response =>       response.json()                             )
        .then(data => {            console.log('Updated:', data);        })
        .catch(error =>            console.error('Error:', error)           );
  }
);



//DELETE
document.getElementById('deleteRecipeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const recipeName = document.getElementById('deleteRecipeName').value;

    fetch(`/recipes/${recipeName}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {            console.log('Deleted:', data);        })
        .catch(error => console.error('Error:', error));
  }
);



