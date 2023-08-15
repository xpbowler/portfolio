import {React} from 'react'
import {Routes, Route} from 'react-router-dom'
import {CssBaseline, ThemeProvider} from "@mui/material";
import {ColorModeContext, useMode} from './theme'
import Navbar from './components/navbar'
import Bnavbar from './components/bnavbar'

import HomePage from './components/homepage'
import Portfolio from './components/portfolio'
import Resume from './components/resume'
import Contact from './components/contact'
import Acknowledgments from './components/acknowledgments'
import ND from './components/resources/portfolio-cards/nd/nd'
import ET from './components/resources/portfolio-cards/et/et'
import TVM from './components/resources/portfolio-cards/tvm/tvm'
import TREG from './components/resources/portfolio-cards/treg/treg'

function App() {
  const [theme,colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
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
              <Route path='/acknowledgments' element={<Acknowledgments/>}/>
              <Route path='/portfolio/nd' element={<ND/>}/>
              <Route path='/portfolio/et' element={<ET/>}/>
              <Route path='/portfolio/tvm' element={<TVM/>}/>
              <Route path='/portfolio/treg' element={<TREG/>}/>
            </Routes>
            <Bnavbar/>
          </main>
          
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;
