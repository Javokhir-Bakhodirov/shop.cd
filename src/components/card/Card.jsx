import React from "react";
import star from "../../assets/star.svg";
import "./Card.css";

const Card = ({ product }) => {
	const renderStars = (rating) => {
		const stars = [];
		for (let i = 0; i < rating; i++) {
			stars.push(<img key={i} src={star} alt="star" width={18} height={18} />);
		}
		return stars;
	};
	return (
		<li className="productCard">
			<img src={product.thumbnail} width={295} height={295} alt="" />
			<h3 className="productCard__title">{product.title}</h3>
			<p className="productCard__rating">
				<span className="stars">{renderStars(product.rating)}</span>{" "}
				{product.rating}/<span>5</span>
			</p>
			<p className="productCard__price">
				<strong>${product.price}</strong>
			</p>
		</li>
	);
};

export default Card;
