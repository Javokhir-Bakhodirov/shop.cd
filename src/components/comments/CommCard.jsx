import "./CommCard.css";
import star from "../../assets/star.svg";

const CommCard = ({ comment }) => {
	const renderStars = (rating) => {
		const stars = [];
		for (let i = 0; i < rating; i++) {
			stars.push(<img key={i} src={star} alt="star" width={18} height={18} />);
		}
		return stars;
	};
	return (
		<li className="comment-card">
			<span className="stars">{renderStars(comment.likes)}</span>
			<h3 className="comment-author"> {comment.user.fullName}</h3>
			<p className="comment-text">{comment.body}</p>
		</li>
	);
};

export default CommCard;
