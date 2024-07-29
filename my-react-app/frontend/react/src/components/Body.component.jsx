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

   //hook
    const [recipes, setRecipes] = useState( [] );
    
    //Aller chercher toutes les recettes dans la database
    useEffect(() => {
        fetch('http://localhost:3000/api/recipe')
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error("Les recettes n'ont pas pu être obtenues", error));
    },
    []);


    
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
        
        {recipes.map(e => (
                <TileComponent
                key={e.title}
                recipe={e}
                />
            ))}

        </div>
    );
}
