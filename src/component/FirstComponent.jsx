
import React from 'react';
import '../NewCssApp.css';
import '../weather.css';



function FirstComponent(props) {
	return (
		<div>
			<h1 className="bigblue"> Weather App </h1>
			<br />
			{/* {props.loggedin === true ?
			   <p>" Hello Welcome {props.email}"</p>

			  :null} */}

		</div>

	);

}

export default FirstComponent;