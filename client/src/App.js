import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//Pages
import HomePage from './pages/HomePage';
import ArticlesList from './pages/ArticlesList';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import DisplaySingleArticle from './pages/DisplaySingleArticle';


//Navigation Bar
import NavBar from './NavBar';

const mainOverlay = {
  marginTop: "100px"
}

function App() {
  return (
    <Router>
      <div style={mainOverlay}>
        <NavBar />
        <Route path="/" component={HomePage} exact />
        <Route path="/Articles-List" component={ArticlesList} />
        <Route path="/Article/:id" component={DisplaySingleArticle} />
        
        <Route path="/About-Us" component={AboutUs} />
        <Route path="/Contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
