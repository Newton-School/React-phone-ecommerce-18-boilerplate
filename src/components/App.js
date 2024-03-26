import React, { useContext, useEffect } from 'react'
import '../styles/App.css'

// Theme context
const ThemeContext = React.createContext()

// Theme provider component
function ThemeProvider({ children }) {
  const [theme, setTheme] = React.useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme')
    } else {
      document.body.classList.remove('dark-theme')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Button component
function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button
      className={`theme-button ${theme === 'dark' ? 'dark' : 'light'}`}
      onClick={toggleTheme}
    >
      Toggle Theme
    </button>
  )
}

// App component
function App() {
  return (
    <ThemeProvider>
      <div className='app'>
        <h1>Theme Toggler</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  )
}

export default App
