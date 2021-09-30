import { React } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./Components/Header/Navbar/NavBar.component";
import Footer from "./Components/Footer/Footer.component";
import Home from "./Components/pages/Home/Home.component";
import About from "./Components/pages/About/About.component";
import Contacts from "./Components/pages/Contacts/Contacts.component";
import Login from "./Components/pages/Login/Login.component.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/login" component={Login} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
