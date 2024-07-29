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
    /*
    useEffect(() => {
        fetch('https://localhost:3000/')
        .then(response => response.json())
        .then(data => setRecipes(mockData))
        .catch(error => console.error('Les recettes n<ont pas pu être obtenues', error));
    },
    []);
    */
    useEffect(() => {
        // Replace with mock data
        const mockData = [
            { id: 1, title: 'Mock Recipe 1', recipeImagesURL: "https://mykoreankitchen.com/wp-content/uploads/2007/01/1.-Tuna-Kimbap-Recipe.jpg", cookingTime: '10', preparationTime: '5', tags: ['tag1'] },
            { id: 2, title: 'Mock Recipe 2', cookingTime: '10', preparationTime: '5', tags: ['tag1'] },
            // Add more mock recipes if needed
        ];
        setRecipes(mockData);
    }, []);


    useEffect(() => {
        if (del) {
            fetch('https://localhost:3000/' + del, { method: 'DELETE' })
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
