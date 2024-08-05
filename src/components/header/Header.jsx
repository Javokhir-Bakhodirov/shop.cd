import React from "react";
import logo from "../../assets/logo.svg";
import Nav from "./nav/Nav";
import Search from "../input/Search";
import "./Header.css";
import basket from "../../assets/basket.svg";
import profile from "../../assets/profile.svg";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header>
			<div className="header-section">
				<div className="container">
					<div className="header">
						<Link to="/">
							<img src={logo} alt="logo" />
						</Link>
						<Nav />
						<Search />
						<div className="profile-basket-block">
							<a href="#">
								<img src={basket} alt="basket" />
							</a>
							<Link to="/profile">
								<img src={profile} alt="basket" />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
