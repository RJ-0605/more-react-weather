

 
 import React , { useState }from 'react';
 import '../NewCssApp.css';
 import '../Arrangeapp.css';
 


  export default function LoginComponent(props) {


 	function handleEmail(event){
     props.setEmail(event.target.value)
  }
  function handleUsername(event){
     props.setUsername(event.target.value)
  }
  function handlePassword(event){
     props.setPassword(event.target.value)
  }
  
  
  function login(event){
      event.preventDefault();
      //alert('')
      
     
    if ( props.email === 'jedi.org' && props.password === 'bear'){

      // the alert below can be replaced with modal
      alert('');
    props.setLoggedIn(true);

    
          };
  };

  







 	return (
    <div>
 
            
                 
   			
           {props.loggedin=== true ? <p>"loggedin"</p> :



              <div className="rightcolumn bg-transparent ">

              <form onSubmit={login}>
              
              <label>Email </label>
              <input type="text" value={props.email} onChange={handleEmail} />
             
              <label>Password </label>
              <input type="text" value={props.password} onChange={handlePassword} />
              <button  type="submit">Login</button>
                </form>
              </div> 



            } 
       
        
   			
 		</div>

 	);

 }

 