import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { useDarkMode } from "./styles/useDarkMode";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Grid/Footer/Footer.jsx";
import { MainGrid } from "./styles/grid.style";
import { Main, MainBody, TopNav } from "./components/Grid/Main/main.style";
import { MobileMenu } from "./components/MobileMenus/mobileMenus.style";
import GlobalStyle from "./styles/globalStyles";
import Grid from "./styles/grid.style";
import { lightTheme, darkTheme } from "./styles/themes";
import Toggle from "./styles/toggler";
import LeftSideBar from "./components/Grid/SideBar/LeftSideBar.jsx";
import Home from "./Pages/Home/Home.jsx";
import RightSideBar from "./components/Grid/SideBar/RightSideBar";
import AppContainer from "./styles/appContainer";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import Skills from "./Pages/Skills/Skills";
import Contact from "./Pages/Contacts/Contact";

const App = () => {
  const [theme, themeToggler] = useDarkMode();
  const ref = useRef(null);
  const showSideBar = () => {
    ref.current.showMenu();
  };
  const HideSideBar = () => {
    ref.current.hideMenu();
  };
  const themeMode = theme === "dark" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Router>
        <GlobalStyle />
        <AppContainer>
          <Grid>
            <MainGrid>
              <Main>
                <TopNav>
                  <MobileMenu onClick={showSideBar} />
                  <Toggle theme={theme} toggleTheme={themeToggler} />
                </TopNav>
                <MainBody onClick={HideSideBar}>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/resume" component={Resume} />
                    <Route path="/skills" component={Skills} />
                    <Route path="/contact" component={Contact} />
                  </Switch>
                </MainBody>
              </Main>
            </MainGrid>
            <LeftSideBar ref={ref} />
            <RightSideBar />
            <Footer />
          </Grid>
        </AppContainer>
      </Router>
    </ThemeProvider>
  );
};
export default App;
