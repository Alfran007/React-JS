import React from "react";

const Calculate = props => (
	<div id = "space" className="Calculate__info">
	 {
	 	props.discount && <p id = "space2" className="Calculate__key"> Discount:
	 		<span className="Calculate__value"> { props.discount }</span>
	 	</p>
	 }
	 {
	 	props.importFee && <p id = "space2"  className="Calculate__key"> Import Fee:
	 		<span className="Calculate__value"> { props.importFee }	</span>
	 	</p>
	 }
	 {
	 	props.totalCost && <p id = "space2"  className="Calculate__key"> Total Cost:
	 		<span className="Calculate__value"> { props.totalCost } </span>
	 	</p>
	 }
	 {
	 	props.error && <p className="Calculate__error">{ props.error }</p>
	 }
	</div>
);

export default Calculate;
