//raf
import React from 'react'
//components
import HeaderTitleComponent from './HeaderTitle.component';
import ConnectComponent from './Connect.component';
import LoginFormComponent from './LoginFrom.component'

export default function HeaderComponent() {
  return (
    <div className="row w-100 bg-success mx-0 p-0">
        <HeaderTitleComponent/>
        <LoginFormComponent/>
    </div>
  )
}
