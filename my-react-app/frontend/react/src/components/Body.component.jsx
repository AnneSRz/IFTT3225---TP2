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
    const [pageCourante, setPageCourante] = useState(1);
    const itemsParPage = 15; 
    

    const paginationStyles = {
        container: {
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        },
        button: {
            border: '1px solid #ddd',
            padding: '10px',
            margin: '0 5px',
            cursor: 'pointer',
            backgroundColor: 'white',
            borderRadius: '4px',
            fontSize: '16px'
        },
        activeButton: {
            backgroundColor: '#007bff',
            color: 'white'
        }
    };


    //Aller chercher toutes les recettes dans la database
    const fetchRecipes = () => {
        fetch('http://localhost:3000/api/recipe')
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error("Les recettes n'ont pas pu être obtenues", error));
    }


    useEffect(() => {
        fetchRecipes();
        const interval = setInterval(fetchRecipes, 5000); // Poll every 5 seconds
        return () => clearInterval(interval);
    }, []);

    // Calculer les recettes à afficher pour la page actuelle
    const indexOfLastRecipe = pageCourante * itemsParPage;
    const indexOfFirstRecipe = indexOfLastRecipe - itemsParPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    // Fonction pour changer de page
    const paginate = (pageNumber) => setPageCourante(pageNumber);

    // Nombre total de pages
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(recipes.length / itemsParPage); i++) {
        pageNumbers.push(i);
    }




    
    return (
        <div className="d-flex flex-column align-items-center" style={{ height: '100%' }}>
            <div className="d-flex flex-wrap justify-content-center">
        
                {currentRecipes.map(e => (
                        <TileComponent
                        key={e.title}
                        recipe={e}
                        />
                ))}
            </div>

            <div style={paginationStyles.container}>
                {pageNumbers.map(number => (
                    <button key={number} onClick={() => paginate(number)} className={`page-item ${pageCourante === number ? 'active' : ''}`}>
                        {number}
                    </button>
                ))}
            </div>

        </div>
    );
}
