//raf
import React from 'react'
//components
import HeaderTitleComponent from './HeaderTitle.component';
import LoginFormComponent from './LoginForm.component'

export default function HeaderComponent() {
  return (
    <div className="page-header d-flex justify-content-between align-items-center px-3 py-1" style={{ backgroundColor: '#FDFDD2' }}>
        <HeaderTitleComponent/>
        <LoginFormComponent/>
    </div>
  )
}
