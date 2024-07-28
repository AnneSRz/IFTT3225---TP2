//rafc

import React, { useState, useEffect } from 'react';
import TileComponent from './Tile.component';

export default function BodyComponent() {
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
    const [recipes, setRecipes] = useState([]);

    const [del, setDel] = useState(false);

    //Aller chercher les recettes dans la database
    useEffect(() => {
        fetch('https://localhost:3000/recettes')
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error('Les recettes n<ont pas pu être obtenues', error));
    },
    []);


    useEffect(() => {
        if (del) {
            fetch('https://localhost:3000/recettes' + del, { method: 'DELETE' })
                .then(response => response.json())
                .then(() => {
                    setRecipes(recipes.filter(recipe => recipe.id !== del));
                    setDel(null);
                })
                .catch(error => console.error('La recette na pas pu être supprimé', error));
        }
    }, [del, recipes]);


    const handleDeleteRecipe = (recipeToDelete) => {
        setDel(recipeToDelete.id);
    };

    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
            {recipes.map((recipe) => (
                <TileComponent key={recipe.id} recipe={recipe} onDeleteRecipe={handleDeleteRecipe} />
            ))}
        </div>
    );
}
