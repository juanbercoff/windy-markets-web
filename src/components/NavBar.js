import React from 'react';
import logo from '../public/images/logoBlackTransparent.png'

function NavBar() {   
      return (
        <header>
            <div class="logo-container">
                <img src={logo} alt='logo' height="40px" width='auto'></img>
                <h4 class='logo'>Windy Markets</h4>
            </div>
            <nav>
                <ul class="nav-links">
                    {/* TODO Hamburger menu when viewport is too small */} 
                    <li><a class='nav-link' href='/home'>Home</a></li>
                    <li><a class='nav-link' href='/home'>What we do</a></li>
                    <li><a class='nav-link' href='/home'>Open trades</a></li>
                    <li><a class='nav-link' href='/home'>Past trades</a></li>
                </ul>
            </nav>
        </header>
      );
}

export default NavBar;

