

import React from 'react';
import '../NewCssApp.css';
import '../Arrangeapp.css';
import FirstComponent from './FirstComponent';

import TempComponent from './TempComponent';
import LocateComponent from './LocateComponent';


 function LeftDisplayComponent() {

 	   // const cat


 	return (
 		<div className="leftcolumn">

 		<br/>
   			<FirstComponent />
      <br/>
      <img src={'https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png'}   style={{display: 'block' , margin:'auto'}}  />

      <br/>
      <br/>
      		<TempComponent />
      		
      	<br />
       <br />
       <br />
       <br />
       <br />
       <br />
       
 		</div>

 	);

 }

 export default LeftDisplayComponent;