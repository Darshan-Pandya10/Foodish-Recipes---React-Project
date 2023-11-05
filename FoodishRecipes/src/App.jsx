import './App.css'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useState , createContext } from 'react'

export const ThemeContext = createContext(null);

function App() {

  const [theme , setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme , toggleTheme}}>
    <main className='app w-screen min-h-screen overflow-x-hidden' id={theme}>
    <BrowserRouter>
      <Header/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </main>
    </ThemeContext.Provider>
  )
}

export default App
