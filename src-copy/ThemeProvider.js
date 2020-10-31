import { createContext, useContext, useState } from 'react'

export const ThemeContext = createContext()
let currentTheme = []

function ThemeProvider( { children } ) {
  const [themeState, setThemeState] = useState("light")

  currentTheme.push(themeState, setThemeState);

  return (
    <ThemeContext.Provider value={currentTheme}>
      { children }
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;