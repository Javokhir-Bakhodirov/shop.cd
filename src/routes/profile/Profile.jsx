import "./Profile.css";
import address from "../../data/address";
import SiteAddress from "../../components/siteAddress/SiteAddress";
import interest from "../../data/interest";
import Reg from "../../components/reg-bar/Reg";

const Profile = () => {
	return (
		<section className="profile-section">
			<div className="container">
				<div className="profile">
					<div className="profile__content">
						<h1 className="profile__title">
							Les't talk on something{" "}
							<span className="title__green">great</span> together
						</h1>
						<ul className="profile__address">
							{address.map((address) => (
								<SiteAddress address={address} key={address.id} />
							))}
						</ul>
					</div>
					<div className="reg">
						<div className="reg__interest interest1">
							<h3 className="interest__title">I'm interested in:</h3>
						</div>
						<form>
							<ul className="interest">
								{interest.map((interest) => (
									<Reg interest={interest} key={interest.id} />
								))}
							</ul>
							<div>
								<label className="profile__label">
									<p>Your name</p>
									<input
										className="input"
										type="text"
										placeholder="Enter your name"
									/>
								</label>
								<label className="profile__label">
									<p>Your email</p>
									<input
										className="input"
										type="email"
										placeholder="Enter your name"
									/>
								</label>
								<label className="profile__label">
									<p>Your message</p>
									<textarea></textarea>
								</label>
							</div>
							<button className="btn" type="submit">
								Send message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
