import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Articles from './pages/Articles';

import NavBar from './NavBar';

const mainOverlay = {
  marginTop: "30px"
}

function App() {
  return (
    <Router>
      <div style={mainOverlay}>
        <NavBar />
        <Route path="/" component={HomePage} exact />
        <Route path="/Articles" component={Articles} />
        <Route path="/Articles/:id" component={Articles} />
      </div>
    </Router>
  );
}

export default App;
