import React, { useState, useEffects } from 'react';
import '../NewCssApp.css';
import '../Arrangeapp.css';




export default function Logindisp(props) {

  return (

    <form onSubmit={props.login}>
      <p> please login below </p>
      <br />
      <br />
      <label>Email </label>
      <input type="email" value={props.email} onChange={props.handleLoginEmail} />
      <br />
      <br />
      <label>Password </label>
      <input type="password" value={props.password} onChange={props.handleLoginPassword} />
      <br />
      <button type="submit" onClick={props.login}>Login</button>
    </form>

  )


}