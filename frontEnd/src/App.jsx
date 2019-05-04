import React from "React";
import "./app.scss";
import { NavLink, Route, Switch, Redirect } from "react-router-dom";

import Home from "pages/Home/Home";
import Photoes from "pages/Photoes/Photoes";

const App = () => {
  return (
    <div className="app-container">
      <div>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/photoes">Photoes</NavLink>
      </div>
      <div>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/photoes" component={Photoes} />
          <Redirect push to="/home" />
        </Switch>
      </div>
    </div>
  );
};

export default App;
