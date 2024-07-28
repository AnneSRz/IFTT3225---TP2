//rafc

import React from 'react'

import TileComponent from './Tile.component';
import TileFormComponent from './TileForm.component'


export default function BodyComponent() {
    return (
      <div className = "row justify-content-center mt-3 conteneurRecette">
          <TileComponent/>
          <TileFormComponent/>
      </div>
    )
}
  

