import { useEffect, useState } from "react";
import "./Customers.css";
import axios from "axios";
import CommCard from "../../../components/comments/CommCard";

const Customers = () => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		axios("https://dummyjson.com/comments").then((res) =>
			setComments(res.data.comments)
		);
	}, []);
	return (
		<section className="customers-section">
			<div className="container">
				<div className="customers">
					<div className="customers-content">
						<h2 className="customers-title">OUR HAPPY CUSTOMERS</h2>
					</div>
					<ul className="list">
						{comments.slice(0, 3).map((comment) => (
							<CommCard comment={comment} key={comment.id} />
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Customers;
