import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
import Project from "./components/project";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<AboutMe />} />
          <Route path="/projets" element={<Project />} /> 

        </Routes>
      </Router>
    </>
  );
};

export default App;
