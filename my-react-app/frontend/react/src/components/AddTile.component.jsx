import React, { useState } from 'react';
import { CiSquarePlus } from "react-icons/ci";

export const AddTileComponent = () => {
    const recipe = {}
    //overlays hooks
    const [showAddOverlay, setAddOverlay] = useState(false);


    /* Handling opening and closing overlays */
    const handleCloseClick = () => {
        setAddOverlay(false);
    };

    const handleAddClick = () => {
        setAddOverlay(true);
      };

  // Pour changer les infos d'une recette. 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    recipe["'"+name+'"']=value;
  };      



  const handleSubmit=()=>{
    // Send the POST request using fetch
    console.log(recipe)
    fetch('http://localhost:3000/api/recipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(String(recipe))
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => {
        console.log('Recette ajoutee:', data); // Handle the response data
    })
    .catch(error => {
        console.error('Erreur lors de la creation de la recette:', error); // Handle any errors
    });
  }



    return (
    <div >
        <div  onClick={handleAddClick}>
            <h5>Ajouter une tuile</h5>
            <CiSquarePlus size={60}/>
        </div>

        {/* Ajouter des recettes lorsque le user clique sur Icon + */}
        {showAddOverlay && (
            <div className="modal fade show" id="editModal" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    
                <div className="modal-header">
                    <h5 className="modal-title" id="editModalLabel">Ajouter une recette</h5>
                    <button type="button" className="close" aria-label="Close" onClick={handleCloseClick}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div className="modal-body">
                    {/* Formulaire pour ajouter les infos de la recette */}
                    <form>
                    <div className="form-group">
                        <label htmlFor="nomRecette">Nom </label>
                        <input type="text" className="form-control" id="nomRecette" name="title" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tempsPrep">Temps de préparation</label>
                        <input type="number" className="form-control" id="tempsPrep" name="preparationTime" min="1" max="120"  onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tempsCook">Temps de cuisson</label>
                        <input type="number" className="form-control" id="tempsCook" name="cookingTime" min="1" max="120" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <select className="form-control" id="type" name="category"  onChange={handleInputChange}>
                        <option value="Végétarien">Végétarien</option>
                        <option value="Végétalien">Végétalien</option>
                        <option value="Poulet">Poulet</option>
                        <option value="Boeuf">Boeuf</option>
                        <option value="Poisson">Poisson</option>
                        <option value="Salade">Salade</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Étape de la recette</label>
                        <textarea type="text" className="form-control" id="description" name="description"  onChange={handleInputChange} />
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={handleSubmit}>Ajouter</button>
                </div>
                </div>
            </div>
            </div>
        )}
    </div>
  )
}
