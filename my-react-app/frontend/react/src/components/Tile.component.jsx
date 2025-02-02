import React, { createContext, useState, useContext } from 'react';
import { AuthContext } from '../App';
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";


const TileComponent = ({ recipe }) => {

    //is user connected
    const { token } = useContext(AuthContext);
    const { setToken } = useContext(AuthContext);


  /* keys from the recipe parameter (JSON)
      title
      recipeImagesURL
      author
      createdAt
      description
      ingredients
      portions
      cookingTime
      preparationTime
      tags
  */

  //overlays hooks
  const [showInfoOverlay, setInfoOverlay] = useState(false);
  const [showEditOverlay, setEditOverlay] = useState(false);
  const [showDeleteOverlay, setDeleteOverlay] = useState(false);
  const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

  /* Handling opening and closing overlays */
  const handleCloseClick = () => {
    setInfoOverlay(false);
    setEditOverlay(false);
    setDeleteOverlay(false);
  };

  const handleEditClick = () => {
    setEditOverlay(true);
  };

  const handleDeleteClick = () => {
    setDeleteOverlay(true);
  };

  const handleInfoClick = () => {
    setInfoOverlay(true);
  };

  // Pour changer les infos d'une recette. 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if(name && value){
      editedRecipe[name]= value
    }
  };

  const handleConfirmSaveClick = () => {
    //
    console.log(editedRecipe)
    fetch(`http://localhost:3000/api/recipe/${recipe.title}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `${token.token}`
    },
      body: JSON.stringify(editedRecipe)
    })
      .then(response =>  response.json()     )
      .then(data => {   console.log('Updated:', data);        })
      .catch(error =>   console.error('Error:', error)           );
    handleCloseClick;
  };

  const handleConfirmDeleteClick = () => {
    fetch(`http://localhost:3000/api/recipe/${recipe.title}`,{
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `${token.token}`
        },
    })
      .then(response => response.json())
      .then(data => {            console.log('Deleted:', data);        })
      .catch(error => console.error('Error:', error));
    handleCloseClick;
  };

  const divStyle = {
    borderStyle: 'solid',
    backgroundColor: 'white',
    borderRadius: '5px',
    display: 'inline-block',
    position: 'relative',
    width: '300px', 
    height: '400px', 
    overflow: 'hidden',
    padding: '10px',
    margin: '10px'
  };

  return (
    <div className='m-1 p-1' style={divStyle}>

      {/* Tuile 1 , la premiere recette */}
      <div id="conteneurRecette" className="mb-3 tuileRecette">

        {/* Pour modifier ou supprimer la tuile de la recette */}
        <div className="d-flex justify-content-end mb-2">
          <FaPencilAlt className="mr-2" onClick={handleEditClick} />
          <FaRegTrashAlt onClick={handleDeleteClick} />
        </div>

        {/* On met les infos pertinent de la recette ici */}
        <div className="titre-recette" data-toggle="modal" data-target="#tuileRecetteModal" onClick={handleInfoClick}>

          <h4 className="mt-3 mb-2 nom-tuile">{recipe.title}</h4>

          <img src={recipe.recipeImagesURL} alt="Image de la recette" className="image-tuile" style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '5px'
            }} />
          <div className="mt-3">
            <p className="prep-tuile">
              <strong>Temps de préparation:</strong> {recipe.preparationTime} min
            </p>
            <p className="type-tuile">
              <strong>Type : </strong> {recipe.category}
            </p>
          </div>
        </div>
      </div>

      {/* Afficher les informations de la recette lorsque l'user clique sur la tuile */}
      {showInfoOverlay && (
        <div className="modal fade show" id="tuileRecetteModal" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">

              {/* Header de info overlay */}
              <div className="modal-header">
                <h5 className="modal-title" id="tuileRecetteModal">Détails de la recette</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleCloseClick}>x</button>
              </div>

              {/* Body de info overlay */}
              <div className="modal-body">
                <img src={recipe.recipeImagesURL} alt="Image de la recette" className="image-tuile" style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '5px'
                  }} />
                <h4 className="mt-3 mb-2 nom-tuile">{recipe.title}</h4>
                <p className="prep-tuile">
                  <strong>Temps de préparation:</strong> {recipe.preparationTime} min
                </p>
                <p className="cuisson-fiche">
                  <strong>Temps de Cuisson:</strong> {recipe.cookingTime} min
                </p>
                <p className="type-tuile">
                  <strong>Type : </strong> {recipe.category}
                </p>
                <p className="description-fiche">{recipe.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modifier les infos de la recette lorsque le user clique sur Icon crayon */}
      {showEditOverlay && (
        <div className="modal fade show" id="editModal"  style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">Modifier la recette</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleCloseClick}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">

                {/* Formulaire pour modifier les infos de la recette */}
                <form>
                  <div className="form-group">
                    <label htmlFor="nomRecette">Nom </label>
                    <input type="text" className="form-control" id="nomRecette" name="title" placeholder={editedRecipe.title} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tempsPrep">Temps de préparation</label>
                    <input type="text" className="form-control" id="tempsPrep" name="preparationTime" placeholder={editedRecipe.preparationTime} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="tempsCook">Temps de cuisson</label>
                    <input type="text" className="form-control" id="tempsCook" name="cookingTime" placeholder={editedRecipe.cookingTime} onChange={handleInputChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="type">Type</label>
                    <select className="form-control" id="type" name="category" placeholder={editedRecipe.category} onChange={handleInputChange}>
                      <option value="Végétarien">Végétarien</option>
                      <option value="Végétalien">Végétalien</option>
                      <option value="Poulet">Poulet</option>
                      <option value="Boeuf">Boeuf</option>
                      <option value="Poisson">Poisson</option>
                      <option value="Salade">Salade</option>
                      <option value="Dessert">Dessert</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Étape de la recette</label>
                    <textarea className="form-control" id="description" name="description" placeholder={editedRecipe.description} onChange={handleInputChange} />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary" onClick={handleConfirmSaveClick}>Sauvegarder</button>
                <button type="button" className="btn btn-secondary" onClick={handleCloseClick}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation pour supprimer la recette */}
      {showDeleteOverlay && (
        <div className="modal fade show" id="deleteModal" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">Supprimer la recette</h5>
                <button type="button" className="close" aria-label="Close" onClick={handleCloseClick}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Voulez-vous vraiment supprimer la recette?</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" onClick={handleConfirmDeleteClick}>Supprimer</button>
                <button type="button" className="btn btn-secondary" onClick={handleCloseClick}>Annuler</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Partie pour afficher seulement 15 éléments par page*/}




    </div>
  );
}

export default TileComponent;
