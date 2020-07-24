import React from "react";
import { Provider } from "react-redux";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store";
import Dashboard from "./components/Dashboard";
import Register from "./components/pages/Register";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
