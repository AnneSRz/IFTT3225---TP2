import React from 'react';

const TileFormComponent = () => {
  
  return (

    // Partie pour modifier la recette quand l'utilisateur clique sur l'icône du crayon
    <div className="modal fade" id="editModal" tabIndex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
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
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TileFormComponent;
