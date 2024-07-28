import React, { useState } from 'react';
import { FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
const TileComponent = ({recipe}) => {
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

  /* Handling opening and closing overlays */
  const handleCloseClick = () => {
    setInfoOverlay(false)
    setEditOverlay(false);
    setDeleteOverlay(false);
  };

  const handleInfoClick = () => {
    setEditOverlay(true);
  };

  const handleEditClick = () => {
    setEditOverlay(true);
  };

  const handleDeleteClick = () => {
    setDeleteOverlay(true);
  };



  return (

    <div className='bg-primary rounded border-bottom m-1 p-1'>
      {/* Tuile 1 , la premiere recette */}

      <div id="conteneurRecette" className="mb-3 tuileRecette">

        {/* Pour modifier ou supprimer la tuile de la recette */}
          <div className="d-flex justify-content-end mb-2" onClick={handleEditClick}>
            <FaPencilAlt />
          </div>
          <div className="d-flex justify-content-end mb-2" onClick={handleDeleteClick}>
            <FaRegTrashAlt />
          </div>
        

        {/* On met les infos pertinent de la recette ici */}
        <div className="titre-recette" data-toggle="modal" data-target="#tuileRecetteModal" onClick={showInfoOverlay}>
          {/* Sur la tuile:
          -Titre
          -Image
          -Categories
          -Temps preparation
          */}
          <img src={recipe.image} alt="Image de la recette" className="image-tuile" />
          <div className="mt-3">
            <h4 className="mt-3 mb-2 nom-tuile">{recipe.title}</h4>
            <p className="prep-tuile">
              <strong>Temps de préparation:</strong> {recipe.preparationTime} min
            </p>
            <p className="type-tuile">
              <strong>Type : </strong> {recipe.tags}
            </p>
          </div>
        </div>
      </div>

      
      {/* Afficher les informations de la recette lorsque l'user clique sur la tuile */}
      {showInfoOverlay && (
        /* https://getbootstrap.com/docs/4.0/components/modal/  p much just the bootstrap modal*/
        <div className="modal fade"  id="tuileRecetteModal" tabIndex="-1"  role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
            {/* Header de info overlay:
            -Bouton x
            -Texte generique
            */}
              <div className="modal-header">
                <h5 className="modal-title" id="tuileRecetteModal">Détails de la recette</h5>
                <button onClick={handleCloseClick}>x</button>
              </div>
            {/* Body de info overlay:
            -Image
            -Titre
            -Temps preparation
            -Temps cuisson
            -Categories
            -Description
            */}
              <div className="modal-body">
                <img src={recipe.image} alt="Image de la recette" className="image-tuile" />
                <h4 className="mt-3 mb-2 nom-tuile">{recipe.title}</h4>
                <p className="prep-tuile">
                  <strong>Temps de préparation:</strong> {recipe.preparationTime} min
                </p>

                <p className="cuisson-fiche">
                  <strong>Temps de Cuisson:{recipe.cookingTime}</strong> 30 min
                </p>
                <p className="type-tuile">
                  <strong>Type : </strong> {recipe.tags}
                </p>
                <p className="description-fiche">{recipe.description}</p>
              </div>


            </div>
          </div>
        </div>
      )}


      {/* Modifier les infos de la recette lorsque le user clique sur Icon crayon*/}
      {showEditOverlay && (
        <div className="modal fade" id="editModal" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">

                  <div className="modal-header">
                    <h5 className="modal-title" id="editModalLabel">Modifier la recette</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>

                  <div className="modal-body">
                    
                    {/* Formulaire pour modifier les infos de la recette */}
                    <form>

                      <div className="form-group">
                        <label htmlFor="nomRecette">Nom </label>
                        <input type="text" className="form-control" id="nomRecette" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="tempsPrep">Temps de préparation</label>
                        <input type="text" className="form-control" id="tempsPrep" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="tempsCook">Temps de cuisson</label>
                        <input type="text" className="form-control" id="tempsCook" />
                      </div>

                      <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <select className="form-control" id="type">
                          <option>Végétarien</option>
                          <option>Végétalien</option>
                          <option>Poulet</option>
                          <option>Boeuf</option>
                          <option>Poisson</option>
                          <option>Salade</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="tempsCook">Étape de la recette</label>
                        <input type="text" className="form-control" id="tempsCook" />
                      </div>

                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Sauvegarder</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={handleCloseClick}>Fermer</button>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
    );
  }
export default TileComponent;

