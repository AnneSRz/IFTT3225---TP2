//raf
import React from 'react'
//components
import HeaderTitleComponent from './HeaderTitle.component';
import LoginFormComponent from './LoginForm.component'
import { AddTileComponent } from './AddTile.component';
import { FindTileComponent } from './FindTile.component';

export default function HeaderComponent() {
  return (
    <div className="d-flex justify-content-between align-items-center px-3 py-1" style={{ backgroundColor: 'white', width: '100%' }}>
      <HeaderTitleComponent/>
      <AddTileComponent/>
      <FindTileComponent/>
      <LoginFormComponent/>
    </div>
  )
}
