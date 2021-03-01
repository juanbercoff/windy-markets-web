import React, { useEffect } from 'react';
import logo from '../public/images/logoBlackTransparent.png'
import login from '../public/images/login.png';
//import triangle from '../public/images/triangle.svg'
import { Link } from "react-router-dom";

function NavBar() {
    useEffect (() => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.burger-nav-links');
        const navLinks = document.querySelectorAll('.burger-nav-links li')


        burger.addEventListener('click', () => {
            nav.classList.toggle('nav-active');
            

            navLinks.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
                }
            })
            burger.classList.toggle('toggle');
        })
    }, [])


    return (
        <div>
            <nav className="burger-nav-container">
                <ul className="burger-nav-links">
                    <li><a className='burger-nav-link' href='/home'>MISSION</a></li>
                    <li><Link className='burger-nav-link' to='/openTrades'>OPEN TRADES</Link></li>
                    <li><Link className='burger-nav-link' to='/pastTrades'>PAST TRADES</Link></li>
                    <li><Link  className='burger-nav-link' to='/pastTrades'>SEND TRADES</Link ></li>
                </ul>
            </nav>
            <header>
                <div className="logo-container">
                    <img src={logo} alt='logo' height="40px" width='auto'></img>
                    <h4>Windy Markets</h4>
                </div>
                <nav className="nav-container">
                    <ul className="nav-links">
                        {/* TODO Hamburger menu when viewport is too small */} 
                        <li><a className='nav-link' href='/home'>MISSION</a></li>
                        <li><Link className='nav-link' to='/openTrades'>OPEN TRADES</Link ></li>
                        <li><Link  className='nav-link' to='/pastTrades'>PAST TRADES</Link ></li>
                        <li>                
                            <div className="cta">
                                <a href='/login' className="cta-select" type='button'>Login</a>
                                <a href='/register' className="cta-select2" type='button'>Register</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div>

                </div>
                <div className='burger'>
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>

                </div>
                
            </header>
            

        </div>

    );
}

export default NavBar;

