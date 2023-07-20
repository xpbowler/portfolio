import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from './theme'
import Navbar from './components/navbar'
import Bnavbar from './components/bnavbar'

import HomePage from './components/homepage'
import Portfolio from './components/portfolio'
import Resume from './components/resume'
import Contact from './components/contact'
import ND from './components/resources/portfolio-cards/nd/nd'

function App() {
  const [theme,colorMode] = useMode()
  return (<ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app">
        <main className="content">
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/resume' element={<Resume/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/portfolio/nd' element={<ND/>}/>
          </Routes>
          <Bnavbar/>
        </main>
        
      </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  )
}

export default App;
