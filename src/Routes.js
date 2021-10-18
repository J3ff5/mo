import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";

export default function Routes() {
  return (
    <Router>
        <Switch>
            <Route exact path="/mo" component={Home} />
        </Switch>
    </Router>
  );
}