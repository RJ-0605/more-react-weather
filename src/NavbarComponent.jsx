
import React from 'react';
 import './NewCssApp.css';



 function NavbarComponent() {
 	return (

 		<div className="topnav" idName="myTopnav">

			  <a href="#home" className="active">Home</a>
			  <a href="#news">News</a>
			  <a href="#contact">Contact</a>
			  <a href="#about">About</a>
			  <a href="javascript:void(0);" className="icon" >
			    <i className="fa fa-bars"></i>
			  </a>
		</div>

 	);

 }

 export default NavbarComponent;