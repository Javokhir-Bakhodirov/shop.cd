import React from "react";
import "./Nav.css";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="nav">
			<ul className="nav__list">
				<li className="nav__item">
					<NavLink end to="/shop">
						Shop
					</NavLink>
				</li>
				<li className="nav__item">
					<a href="#">On Sale</a>
				</li>
				<li className="nav__item">
					<a href="#">New Arrivals</a>
				</li>
				<li className="nav__item">
					<a href="#">Brands</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
