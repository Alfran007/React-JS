import React from "react";
const Form = props => (

    <form onSubmit={props.getCalculate}>
		<input type="text" name="quantity" placeholder="Quantity..."/>
		<input type="text" name="nation" placeholder="Nation..."/>
		<button>Calculate It</button>

	</form>

);

export default Form;
