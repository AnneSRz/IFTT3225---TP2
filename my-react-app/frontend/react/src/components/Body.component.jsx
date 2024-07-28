//rafc

import React from 'react'

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
const recette = {title:'yummy food',cookingTime:'12h',preparationTime:"1s", tags:["poulet","friture"]}


    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
          <TileComponent recipe={recette}/>
      </div>
    )
}
  

