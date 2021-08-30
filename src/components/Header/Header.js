import React from 'react'
import KayakLogo from '../../assets/Logo.svg'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
      <img src={KayakLogo} alt='Kayak Logo - Not available'/>
    </div>
  )
}

export default Header
