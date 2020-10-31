

import React from 'react';
import '../NewCssApp.css';
import '../Arrangeapp.css';
import './LeftDisplayComponent.css';

import TempComponent from './TempComponent';
import LocateComponent from './LocateComponent';


function LeftDisplayComponent(props) {








   // This function is for the current search display
   console.log(props.searchHistory);

   const SearchReturn = () => {

      let OnlyFive = props.searchHistory.slice(Math.max(props.searchHistory.length - 5, 0))
      console.log("only five arr", OnlyFive)

      return OnlyFive.map((weather, index) => {

         // i add the css  styles to the div here on render 
         return <div key={index} className="weather-info">

            <p style={{ color: "white" }}> this is weather location ,{weather.location}</p>
            <p style={{ color: "white", fontSize: "30px" }}>{weather.temperature} </p>

            <img src={weather.weatherIcon} style={{ display: 'block', margin: 'auto' }} />

         </div>




      })

      // this will handle current location which can be 
      // passed to a prop to be displayed in another component
   }

   const NewSearchReturn = () => {

      let OnlyOne = props.searchHistory.slice(Math.max(props.searchHistory.length - 1, 0))
      console.log("only five arr", OnlyOne)

      return OnlyOne.map((weather, index) => {

         // i add the css  styles to the div here on render 
         return <div key={index} className="weather-info">

            <p style={{ color: "white" }}> this is weather location ,{weather.location}</p>
            <p style={{ color: "white", fontSize: "30px" }}>{weather.temperature} </p>

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
         return <div className="current-location" key={index}>

            <p style={{ color: "white" }} > This is the current weather for your location </p>
            <p style={{ color: "white" }} > this is weather location ,{weather.location}</p>
            <p style={{ color: "white", fontSize: "30px" }}>{weather.temperature} </p>

            <img src={weather.weatherIcon} style={{ display: 'block', margin: 'auto' }} />

         </div>

      })

   }

   function Switchcurrentdiv() {
      if (!props.historyfocus) {
         props.setHistoryFocus(true)
         props.setHistoryFocusDet(CurrentSearch())
      }
      else {
         props.setHistoryFocus(false)
      }
   }


   function logout() {

      if (props.loggedIn = true) {
         props.setLoggedIn = false;
         // localStorage.clear();

      }
   }










   return (
      <div className="leftcolumn">

         <br />

         <br />


         {/* i can pust a button here to trigger search on click in
     navigation bar and either toggle to change state with conditional
      to not render when the condition is true */}

         {props.loggedIn === true ? <button onClick={Switchcurrentdiv}> Search history</button>

            : null}

         {props.loggedIn === true ? <button onClick={logout}> Logout</button>

            : null}

         { props.loggedIn ? props.historyfocus ?

            SearchReturn() :
            NewSearchReturn() :
            CurrentSearch()

         }


         <br />

         <div ></div>
         <br />

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