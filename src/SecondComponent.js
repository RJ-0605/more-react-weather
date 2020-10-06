

import React from 'react';
import './NewCssApp.css';
import './Arrangeapp.css';


 function SecondComponent() {
 	return (
 		<div className="leftcolumn">
   			<table className="tablefont">
				  <tr>
				    <th>Firstname</th>
				    <th>Lastname</th>
				    <th>Savings</th>
				  </tr>
				  <tr>
				    <td>Peter</td>
				    <td>Griffin</td>
				    <td>$100</td>
				  </tr>
				  <tr>
				    <td>Lois</td>
				    <td>Griffin</td>
				    <td>$150</td>
				  </tr>
				  <tr>
				    <td>Joe</td>
				    <td>Swanson</td>
				    <td>$300</td>
				  </tr>
				  <tr>
				    <td>Cleveland</td>
				    <td>Brown</td>
				    <td>$250</td>
				  </tr>
			</table>
 		</div>

 	);

 }

 export default SecondComponent;