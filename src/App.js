import React from "react";
import logo from "./logo.svg";
import Home from './pages/Home'
import Buy from './pages/Buy'
import Sell from './pages/Sell'
import Lease from './pages/Lease'
import Invest from './pages/Invest'
import Sidebar from './components/SideBar';
import "./App.css";
import JordansPage from "./pages/JordansPage";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/buy">
          <Buy />
        </Route>
        <Route path="/sell">
          <Sell />
        </Route>
        <Route path="/lease">
          <Lease />
        </Route>
        <Route path="/invest">
          <Invest />
        </Route>
      </Switch>
      <Sidebar></Sidebar>
    </Router>
  );
}

export default App;
