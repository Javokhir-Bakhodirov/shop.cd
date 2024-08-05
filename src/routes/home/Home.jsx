import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import brands from "../../assets/brands.svg";
import NewArr from "./newArr/NewArr";
import Customers from "./customers/Customers";

const Home = () => {
	return (
		<>
			<section className="hero-section">
				<div className="container">
					<div className="hero">
						<div className="hero__content">
							<h1 className="hero__title">
								FIND CLOTHES THAT MATCHES YOUR STYLE
							</h1>
							<p className="hero__text">
								Browse through our diverse range of meticulously crafted
								garments, designed to bring out your individuality and cater to
								your sense of style.
							</p>
							<NavLink className="hero__link" to="/shop">
								Buy Now
							</NavLink>
							<ul className="hero__bottom ">
								<li className="bottom__content">
									<span>200+</span>International Brands
								</li>
								<li className="bottom__content">
									<span>2,000+</span>High-Quality Products
								</li>
								<li className="bottom__content">
									<span>30,000+</span>Happy Customers
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<NewArr />
			<Customers />
		</>
	);
};

export default Home;
