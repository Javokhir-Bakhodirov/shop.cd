import { useState } from "react";
import "./Reg.css";

const Reg = ({ interest }) => {
	const [check, setCheck] = useState(false);

	const click = () => {
		setCheck((prevCheck) => !prevCheck);
	};

	return (
		<li className={`Reg__checkbox ${check ? "checked" : ""}`}>
			<label className="label" htmlFor={interest.value}>
				<input
					onChange={click}
					className={`checkbox ${check ? "checked" : ""}`}
					type="checkbox"
					value={interest.value}
					id={interest.value}
				/>
				<div className="checkbox__value">{interest.value}</div>
			</label>
		</li>
	);
};

export default Reg;
