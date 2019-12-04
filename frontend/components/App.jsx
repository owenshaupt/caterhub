import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import GreetingContainer from "./greeting/greeting_container";
import LoginForm from "./session/login_form";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <h1>Caterhub</h1>

    <Switch>
      <Route exact path='/login/' component={LoginForm} />
      {/* <AuthRoute exact path='/signup/' component={SignupFormContainer} />
      <Route exact path='/items/new/' component={NewItemFormContainer} />
      <Route exact path='/items/search' component={SearchContainer} />
      <Route
        exact
        path='/items/:itemId/edit'
        component={EditItemFormContainer}
      />
      <Route exact path='/items/:itemId/' component={ItemShowContainer} />
      <Route exact path='/items/' component={ItemIndexContainer} />
      <Route exact path='/:userId/' component={UserShowContainer} /> */}
      <Route exact path='/' component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;
