import "./SiteAddress.css";

const SiteAddress = ({ address }) => {
	return (
		<li className="address__item">
			<img src={address.img} alt="img" />
			<p className="address__text">{address.text}</p>
		</li>
	);
};

export default SiteAddress;
