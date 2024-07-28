import React, { useState } from 'react';

const TileComponent = () => {
  
  
  const [recipe, setRecipe] = useState(false);
  //overlays hooks
  const [showEditOverlay, setEditOverlay] = useState(false);
  const [showDeleteOverlay, setDeleteOverlay] = useState(false);
  /* keys JSON table recipe
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



/* Handling opening and closing overlays */
const handleCloseClick = () => {
  setEditOverlay(false);
  setDeleteOverlay(false);
};

const handleEditClick = () => {
  setEditOverlay(true);
};

const handleDeleteClick = () => {
  setDeleteOverlay(true);
};



  return (

    <div>
      {/* Tuile 1 , la premiere recette */}

      <div id="conteneurRecette" className="mb-3 tuileRecette">

        {/* Pour modifier ou supprimer la tuile de la recette */}
        <div className="d-flex justify-content-end mb-2">
          <i
            className="fas fa-edit crayonEdit mr-2"
            style={{ paddingTop: '1%' }}
            data-toggle="modal"
            data-target="#editModal"
          ></i>
          <i
            className="fas fa-trash poubelle"
            style={{ padding: '1% 1%' }}
          ></i>
        </div>

        {/* On met les infos pertinent de la recette ici */}
        <div className="titre-recette" data-toggle="modal" data-target="#tuileRecetteModal">
          <img src={recipe.image} alt="Image de la recette" className="image-tuile" />
          <div className="mt-3">
            <h4 className="mt-3 mb-2 nom-tuile">{recipe.title}</h4>
            <p className="prep-tuile">
              <strong>Temps de préparation:</strong> {recipe.prep_time} min
            </p>
            <p className="type-tuile">
              <strong>Type : </strong> {recipe.type_recette}
            </p>
          </div>
        </div>
      </div>

      {/* Afficher les informations de la recette lorsque l'user clique sur la tuile */}
      <div
        className="modal fade"
        id="tuileRecetteModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="recipeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="tuileRecetteModal">
                Détails de la recette
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <img
                src="images/pouletparmesan.jfif"
                className="image-fiche"
                alt="Image de la recette"
              />
              <h4 className="mt-3 nom-fiche">POITRINE DE POULET FRIT AU PARMESAN</h4>
              <p className="prep-fiche">
                <strong>Temps de préparation:</strong> 30 min
              </p>
              <p className="cuisson-fiche">
                <strong>Temps de Cuisson:</strong> 30 min
              </p>
              <p className="type-fiche">
                <strong>Type : </strong> Poulet
              </p>
              <p className="description-fiche">Miam du délicieux poulet frit</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileComponent;

