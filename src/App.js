import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import SocialIcons from "./components/SocialIcons";
import SecondAbout from "./components/SecondAbout";
import SecondPortfolio from "./components/SecondPortfolio";
import SecondExperience from "./components/SecondExperience";
import SecondContact from "./components/SecondContact";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Home>
                <SecondAbout />,
                <SecondPortfolio />,
                <SecondExperience />,
                <SecondContact />
              </Home>
            }
          />
          <Route
            path="/about"
            element={
              <About>
                <SecondAbout />
              </About>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Portfolio>
              </Portfolio>
            }
          />
          <Route
            path="/experience"
            element={
              <Experience>
              </Experience>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <SocialIcons />
      </BrowserRouter>
    </>
  );
}

export default App;
