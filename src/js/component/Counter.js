import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";

const Counter = props => {
	return (
		<div className="counter-container">
			<div className="coun1">
				<p></p>
			</div>
			<div className="coun2">
				<p></p>
			</div>
			<div className="coun3">
				<p></p>
			</div>
			<div className="coun4">
				<p>{props.tercerContador}</p>
			</div>
			<div className="coun5">
				<p>{props.segundoContador}</p>
			</div>
			<div className="coun6">
				<p>{props.primerContador}</p>
			</div>
		</div>
	);
};

Counter.propTypes = {
	tercerContador: PropTypes.number,
	segundoContador: PropTypes.number,
	primerContador: PropTypes.number
};

export default Counter;
