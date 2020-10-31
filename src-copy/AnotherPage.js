import React, { useContext } from 'react'
import { Link } from "react-router-dom";

function AnotherPage() {

  const  currentTheme = useContext()
  return (
    <div>
      <Link to="/main">Go to Main Page</Link>
    </div>
  )
}

export default AnotherPage;