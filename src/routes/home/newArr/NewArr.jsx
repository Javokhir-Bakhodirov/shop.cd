import { useEffect, useState } from "react";
import "./NewArr.css";
import axios from "axios";
import Card from "../../../components/card/Card";
import "./NewArr.css";
import { NavLink } from "react-router-dom";

const NewArr = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		axios("https://dummyjson.com/products").then((response) =>
			setProducts(response.data.products)
		);
	}, []);
	return (
		<section className="newArr-section">
			<div className="container">
				<div className="newArr">
					<h2 className="newArr__title">NEW ARRIVALS</h2>
					<ul className="newArr__list">
						{products.slice(0, 4).map((product) => (
							<Card key={product.id} product={product} />
						))}
					</ul>
					<div className="btn-div">
						<NavLink className="newArr__btn" to="/shop">
							View all
						</NavLink>
					</div>
					<div className="mostPop">
						<h1 className="newArr__title">top selling</h1>
						<ul className="newArr__list">
							{products.slice(4, 8).map((product) => (
								<Card key={product.id} product={product} />
							))}
						</ul>
						<div className="btn-div">
							<NavLink className="newArr__btn" to="/shop">
								View all
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NewArr;
