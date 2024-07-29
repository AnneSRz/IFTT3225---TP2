import React, { createContext, useState, useContext } from 'react';
import { FaSearch } from "react-icons/fa";

export const FindTileComponent = () => {
//hook for search word
const [search, setSearch] = useState("");
const [recipes, setRecipes] = useState([]);


    //Aller chercher toutes les recettes dans la database
    const fetchRecipes = () => {
        console.log(search)
        fetch(`http://localhost:3000/api/recipe/search/${search}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
        .then(response => response.json())
        .then(data => setRecipes(data))
        .catch(error => console.error("Les recettes n'ont pas pu être obtenues", error));
    }

    //on click event
    const handleAddClick = (e) =>{
        fetchRecipes()
        console.log(recipes)
    }


    //input update
    const updateSearch = (e) =>{
        const { name, value } = e.target;
        setSearch(value)
    }

  return (
    <div >
        <h5>Rechercher recette</h5>
        <input id="search" placeholder="Works in console :/" className="bg-white text-dark" name="title" onChange={updateSearch}></input> <br></br> <br></br>
        <button className='bg-primary' onClick={handleAddClick}><FaSearch size={30} /></button>
    </div>
  )


}
