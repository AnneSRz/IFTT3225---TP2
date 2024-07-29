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
    

    const styleBooton = {
        container: {
            margin: '20px',
            padding : '10px',
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
        },button: {
            border: '1px solid',
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '5px',
        },activeButton: {
            backgroundColor: 'blue',
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

    // Afficher 15 recettes par page
    const indexOfLastRecipe = pageCourante * itemsParPage;
    const indexOfFirstRecipe = indexOfLastRecipe - itemsParPage;
    const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

    // Ici pour changer la page dependamment du nombre de receete
    const paginate = (numPage) => setPageCourante(numPage);

    // Pis le nombre de pages
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

            <div style={styleBooton.container}>
                {pageNumbers.map(nombre => (
                    <button key={nombre} onClick={() => paginate(nombre)} className={`page-item ${pageCourante === nombre ? 'active' : ''}`}>
                        {nombre}
                    </button>
                ))}
            </div>

        </div>
    );
}
