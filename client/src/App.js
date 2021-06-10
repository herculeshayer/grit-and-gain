import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';
import Articles from './pages/Articles';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import DisplayArticle from './pages/DisplayArticle';

//Navigation Bar
import NavBar from './NavBar';

const mainOverlay = {
  marginTop: "50px"
}

function App() {
  return (
    <Router>
      <div style={mainOverlay}>
        <NavBar />
        <Route path="/" component={HomePage} exact />
        <Route path="/Articles-List" component={Articles} />
        <Route path="/Article/:id" component={DisplayArticle} />
        <Route path="/About-Us" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
