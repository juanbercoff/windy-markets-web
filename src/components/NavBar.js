import React, { useEffect } from 'react';
import logo from '../public/images/logoBlackTransparent.png';
//import triangle from '../public/images/triangle.svg'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
	useEffect(() => {
		const burger = document.querySelector('.burger');
		const nav = document.querySelector('.burger-nav-links');
		const navLinks = document.querySelectorAll('.burger-nav-links li');
		const header = document.querySelector('.header');
		window.onscroll = () => scrollFunction();

		function scrollFunction() {
			if (
				document.body.scrollTop > 50 ||
				document.documentElement.scrollTop > 50
			) {
				header.style.padding = '2vh 6vh 0vh';
				header.style.boxShadow = 'rgb(255 255 255 / 15%) 0px 0px 10px';
				burger.style.top = '5vh';
			} else {
				header.style.padding = '4vh 6vh 2vh';
				header.style.boxShadow = 'none';
				burger.style.top = '7vh';
			}
		}

		burger.addEventListener('click', () => {
			nav.classList.toggle('nav-active');

			navLinks.forEach((link, index) => {
				if (link.style.animation) {
					link.style.animation = '';
				} else {
					link.style.animation = `navLinkFade 0.5s ease forwards ${
						index / 5 + 0.3
					}s`;
				}
			});
			burger.classList.toggle('toggle');
		});
	}, []);

	return (
		<Container>
			<nav className="burger-nav-container">
				<ul className="burger-nav-links">
					<li>
						<Link className="burger-nav-link" to="/">
							HOME
						</Link>
					</li>
					<li>
						<Link className="burger-nav-link" to="/past-trades">
							PAST TRADES
						</Link>
					</li>
					<li>
						<Link className="burger-nav-link" to="/open-trades">
							OPEN TRADES
						</Link>
					</li>
					<li>
						<a href="/" className="burger-nav-link" type="button">
							DOWNLOAD APP
						</a>
					</li>
				</ul>
			</nav>
			<header className="header">
				<div className="logo-container">
					<img src={logo} alt="logo" height="50px" width="auto"></img>
					<h4>Windy Markets</h4>
				</div>
				<nav className="nav-container">
					<ul className="nav-links">
						<li>
							<Link className="nav-link" to="/">
								HOME
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/past-trades">
								PAST TRADES
							</Link>
						</li>
						<li>
							<Link className="nav-link" to="/open-trades">
								OPEN TRADES
							</Link>
						</li>
						<li>
							<div className="cta">
								<a href="/login" className="cta-select" type="button">
									DOWNLOAD APP
								</a>
							</div>
						</li>
					</ul>
				</nav>
				<div></div>
			</header>
			<div className="burger">
				<div className="line1"></div>
				<div className="line2"></div>
				<div className="line3"></div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	z-index: 5;
`;

export default NavBar;
