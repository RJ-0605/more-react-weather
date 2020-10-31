import React, { useContext } from 'react';
import { Link } from "react-router-dom";

function MainPage() {

  const  currentTheme = useContext()
  return (
    <div>
      <Link to="/another">Go to Another Page</Link>
    </div>
  )
}

export default MainPage;