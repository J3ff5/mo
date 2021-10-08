import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </Router>
  );
}