import React, { createContext, useState, useContext } from 'react';
import { CiSquarePlus } from "react-icons/ci";
import { AuthContext } from '../App';
export const AddTileComponent = () => {
    //data
    const recipe = {}
    //overlays hooks
    const [showAddOverlay, setAddOverlay] = useState(false);
    //is user connected
    const { token } = useContext(AuthContext);
    const { setToken } = useContext(AuthContext);

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
    recipe[name]=value;
  };      



  const handleSubmit=()=>{
    // Send the POST request using fetch
    console.log(JSON.stringify(recipe))
    fetch('http://localhost:3000/api/recipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(recipe),
        Authorization: `${token}`,
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON de la repoonse
    })
    .then(data => {
        console.log('Recette ajoutee:', data); // Handle donnée de réponse
    })
    .catch(error => {
        console.error('Erreur lors de la creation de la recette:', error); // Handle any errors
    });
  }



    return (
    <div >
        <div  onClick={handleAddClick}>
            <h5>Ajouter une tuile </h5>
            {!token && (<p>(Connectez-vous avant!)</p>)}
            <CiSquarePlus size={60}/>
        </div>

        {/* Ajouter des recettes lorsque le user clique sur Icon + */}
        {showAddOverlay && token && (
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
                            <label htmlFor="nomRecette">Nom (Obligatoire) </label>
                            <input type="text" className="form-control" id="nomRecette" name="title" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tempsPrep">Temps de préparation (mins) </label>
                            <input type="number" className="form-control" id="tempsPrep" name="preparationTime" min="0" max="120"  onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tempsCook">Temps de cuisson (mins) </label>
                            <input type="number" className="form-control" id="tempsCook" name="cookingTime" min="0" max="120" onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="category">Catégorie</label>
                            <select className="form-control" id="category" name="category"  onChange={handleInputChange}>
                            <option value="Végétarien">Végétarien</option>
                            <option value="Végétalien">Végétalien</option>
                            <option value="Poulet">Poulet</option>
                            <option value="Boeuf">Boeuf</option>
                            <option value="Poisson">Poisson</option>
                            <option value="Salade">Salade</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Étapes de la recette</label>
                            <textarea type="text" className="form-control" id="description" name="description"  onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Ajouter une image</label>
                            <input type="url" className="form-control" id="image" name="recipeImagesURL"  onChange={handleInputChange} />
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
