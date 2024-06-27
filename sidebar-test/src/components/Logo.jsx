import React from 'react'
import logo from '../assets/logo-removebg.png'

const Logo = () => {
  return (
    <div className='logo'>
        <div className="logo-img">
            <img src={logo} alt="logo" style={{height: '48px', marginRight: '10px'}} />
        </div>
    </div>
  )
}

export default Logo