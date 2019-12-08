import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Greeting from "./greeting/greeting";
import LoginForm from "./session/login_form";
import SignupForm from "./session/signup_form";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <h1>Caterhub</h1>

    <Switch>
      <AuthRoute exact path='/login/' component={LoginForm} />
      <Route exact path='/signup/' component={SignupForm} />
      {/* <Route exact path='/items/new/' component={NewItemFormContainer} /> */}
      {/* <Route exact path='/items/search' component={SearchContainer} /> */}
      {/* <Route exact path='/items/:itemId/edit' component={EditItemFormContainer} /> */}
      {/* <Route exact path='/items/:itemId/' component={ItemShowContainer} /> */}
      {/* <Route exact path='/items/' component={ItemIndexContainer} /> */}
      {/* <Route exact path='/:userId/' component={UserShowContainer} /> */}
      <Route exact path='/' component={Greeting} />
    </Switch>
  </div>
);

export default App;
