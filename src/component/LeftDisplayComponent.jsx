

import React from 'react';
import '../NewCssApp.css';
import '../Arrangeapp.css';
import FirstComponent from './FirstComponent';

import TempComponent from './TempComponent';
import LocateComponent from './LocateComponent';


 function LeftDisplayComponent(props) {
    

   





      // This function is for the current search display
    console.log(props.searchHistory);

      const SearchReturn = () => {

         let OnlyFive = props.searchHistory.slice(Math.max(props.searchHistory.length - 2, 0))
         console.log("only five arr", OnlyFive)

         return OnlyFive.map((weather, index) => {

            // i add the css  styles to the div here on render 
            return   <div key={index} >

                        <p style={{ color:"white"}}> this is weather location ,{weather.location}</p>
                        <p style={{ color: "white" }}>{weather.temperature} </p>

                        <img src={weather.weatherIcon} style={{ display: 'block', margin: 'auto' }} />

                     </div>




         })
        
            // this will handle current location which can be 
            // passed to a prop to be displayed in another component
      }


         const CurrentSearch = () => {
            let currentPage = [props.defaultweather]
            console.log("currentPage", currentPage)

            return currentPage.map((weather, index) => {

               // i add the css  styles to the div here on render 
               return <div key={index} >
                  <br />
                  <br />
                  <br />
                  <br />
                  <p style={{ color:"white"}} > This is the current weather for your location </p>
                  <p style={{ color:"white"}} > this is weather location ,{weather.location}</p>
                  <p style={{ color:"white"}}>{weather.temperature} </p>

                  <img src={weather.weatherIcon} style={{ display: 'block', margin: 'auto' }} />

               </div>

                     })
         
                 }

                 function Switchcurrentdiv(){
                    if (!props.historyfocus){
                       props.setHistoryFocus(true)
                       props.setHistoryFocusDet(CurrentSearch())
                     }
                       else{
                       props.setHistoryFocus(false)}    
                      }




      
         






 	return (
 		<div className="leftcolumn">

 		<br/>
   			<FirstComponent />
      <br/>


    {/* i can pust a button here to trigger search on click in
     navigation bar and either toggle to change state with conditional
      to not render when the condition is true */}

      <button  onClick={Switchcurrentdiv}> Search history</button>
      

      { props.historyfocus ? SearchReturn() :
     
      CurrentSearch()
      
      }


      <br/>

      <div ></div>
      <br/>
      	
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