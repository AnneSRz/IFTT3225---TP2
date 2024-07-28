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
    const [recipes, setRecipes] = useState([
        { id: 1, title: 'yummy food', cookingTime: '12h', preparationTime: "1s", tags: ["poulet", "friture"] },
    ]);

    const [del, setDel] = useState(false);

    useEffect(() => {
        if (del) {
            fetch('https://localhost:3000/recette/' + del, { method: 'DELETE' })
                .then(rep => rep.json())
                .then(() => {
                    setRecipes(recipes.filter(recipe => recipe.id !== del));
                    setDel(false);
                });
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
