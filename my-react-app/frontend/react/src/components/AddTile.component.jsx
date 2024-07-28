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
    setEditedRecipe({  });
  };      

     return (
        <div >
            <div  onClick={handleAddClick}>
                <h5>Ajouter une tuile</h5>
                <CiSquarePlus size={60}/>
            </div>

            {/* Modifier les infos de la recette lorsque le user clique sur Icon + */}
            {showAddOverlay && (
                <div className="modal fade show" id="editModal" style={{ display: 'block' }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        
                    <div className="modal-header">
                        <h5 className="modal-title" id="editModalLabel">Entrer les informations de la recette</h5>
                        <button type="button" className="close" aria-label="Close" onClick={handleCloseClick}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div className="modal-body">
                        {/* Formulaire pour modifier les infos de la recette */}
                        <form>
                        <div className="form-group">
                            <label htmlFor="nomRecette">Nom </label>
                            <input type="text" className="form-control" id="nomRecette" name="title" value={recipe.title} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tempsPrep">Temps de préparation</label>
                            <input type="text" className="form-control" id="tempsPrep" name="preparationTime" value={recipe.preparationTime || ''} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="tempsCook">Temps de cuisson</label>
                            <input type="text" className="form-control" id="tempsCook" name="cookingTime" value={recipe.cookingTime || ''} onChange={handleInputChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="type">Type</label>
                            <select className="form-control" id="type" name="tags" value={recipe.tags || ''}  onChange={handleInputChange}>
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
                            <input type="text" className="form-control" id="description" name="description" value={recipe.description} onChange={handleInputChange} />
                        </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleAddClick}>Ajouter</button>
                        <button type="button" className="btn btn-secondary" onClick={handleCloseClick}>Fermer</button>
                    </div>
                    </div>
                </div>
                </div>
            )}
        </div>
  )
}
