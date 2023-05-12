import React from 'react'
import "./Header.css"
import {Routes,Route,Link} from "react-router-dom";
  

const Header = () => {
  return (
    <div className='header'>
        <div className="header-left">
            <Link to='/'><img className='logo' src="../img/889199.png" alt="" /></Link>
            <Link to='/movies/popular'>Popular</Link>
            <Link to='/movies/top_rated'>Toprated</Link>
            <Link to='/movies/upcoming'>Upcoming</Link>
        </div>
      
    </div>
  )
} 

export default Header
