

import React from 'react';
import '../NewCssApp.css';
import '../Arrangeapp.css';
import FirstComponent from './FirstComponent';

import TempComponent from './TempComponent';
import LocateComponent from './LocateComponent';


 function LeftDisplayComponent(props) {
    console.log(props.searchHistory);


   //  const displayHistory = () => {
   //     let OnlyFive = props.searchHistory.slice(Math.max(props.searchHistory.length - 5, 0))
   //     console.log("only five arr", OnlyFive)
   //     return OnlyFive.map((r, index) => {
   //        return <tr key={index}>
   //           <th scope="row">{index}</th>
   //           <td>{r.location}</td>
   //           <td>{r.date}</td>
   //           <td><img src={r.weatherIcon} alt="weaIcon" /></td>
   //           <td>{r.temperature}</td>
   //        </tr>
   //     })
   //  }

   
 
      let OnlyFive = props.searchHistory.slice(Math.max(props.searchHistory.length - 2, 0))
      console.log("only five arr", OnlyFive)

     
   






 	return (
 		<div className="leftcolumn">

 		<br/>
   			<FirstComponent />
      <br/>
      <div>
     
      {OnlyFive.map((weather,index) => (
         <p key={index} > this is weather location ,
               <img src={weather.weatherIcon}   style={{display: 'block' , margin:'auto'}}  />

         {weather.temperature} </p>

                )


      )}
      </div>

      <br/>

      <div ></div>
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