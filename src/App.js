import { ThemeProvider } from "styled-components"
import { LightTheme } from "./Components/Themes"
import { GlobalStyle } from "./globalStyles"

import { Route, Switch, useLocation } from "react-router-dom"
import Main from "./Components/Main.component"
import About from "./Components/About.component"
import Skills from "./Components/Skills.component"
import PersonnalProjects from "./Components/PersonnalProjects.component"
import { AnimatePresence } from "framer-motion"

function App() {

  const location = useLocation()

  return(
    <>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={ Main } />
            <Route exact path='/about' component={ About } />
            <Route exact path='/skills' component={ Skills } />
            <Route exact path='/project' component={ PersonnalProjects } />
          </Switch>
        </AnimatePresence>

      </ThemeProvider>
    </>
  )
    
}

export default App

