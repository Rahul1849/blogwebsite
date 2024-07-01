import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Blogs from "./components/Blogs";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";

import "./styling/app.css";
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <Homepage />
      <Blogs />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/blog/:id" component={BlogPostPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
