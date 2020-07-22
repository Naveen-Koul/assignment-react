import React from "react";
import test from "img/test.png";

const Greeting = ({name}) => {
	return  (
			<>
			<h1>Hello, {name}!</h1>
			<img src={test} alt="Just a test image" />
			</>
		)
}

export default Greeting;