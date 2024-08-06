import React from 'react'
import "./Navbar.css"
import fire from "../../assets/fire.png"
import star from "../../assets/glowing-star.png"
import face from "../../assets/partying-face.png"

const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1>Movie Maniac</h1>

            <div className="nav_links">
                <a href="">Popular <img src={fire} alt="fire emoji" className='navbar-emoji' /></a>
                <a href="">Top Rated <img src={star} alt="star emoji" className='navbar-emoji' /></a>
                <a href="">Upcomming <img src={face} alt="partying-face emoji" className='navbar-emoji' /></a>
            </div>
        </nav>
    )
}

export default Navbar
