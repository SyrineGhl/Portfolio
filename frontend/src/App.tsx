import React from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/project';
import Contact from './components/contact';
import './styles/app.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
