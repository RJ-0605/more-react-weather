import React, { useState, useEffects } from 'react';
import '../NewCssApp.css';
import '../Arrangeapp.css';




export default function Logindisp(props) {

  return (

    <div >


      <div className=" container d-flex justify-content-center h-100 m-5">
        <div className="card">
          <div className="card-header">
            <h3>Log In</h3>
          </div>
          <div >
            <form onSubmit={props.login} style={{ padding: 21 }}>

              <div >
                <label>Email</label>
                <input type="text" value={props.email} onChange={props.handleLoginEmail} className="form-control" />
              </div>

              <div >
                <label >Password</label>
                <input type="password" value={props.password} onChange={props.handleLoginPassword} className="form-control" />
              </div>

              <br />



              <div className="form-group">
                <button onClick={props.login}  >Login</button>
              </div>


            </form>

          </div>




        </div>
      </div>



    </div>


























  )


}