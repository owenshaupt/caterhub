import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import GreetingContainer from "./greeting/greeting_container";

const App = () => (
  <div>
    <header>
      <h1>GREETINGS EARTHLINGS</h1>
      <GreetingContainer />
    </header>

    {/* <header>
      <NavContainer />
    </header>

    <Switch>
      <AuthRoute exact path='/login/' component={LoginFormContainer} />
      <AuthRoute exact path='/signup/' component={SignupFormContainer} />
      <Route exact path='/items/new/' component={NewItemFormContainer} />
      <Route exact path='/items/search' component={SearchContainer} />
      <Route
        exact
        path='/items/:itemId/edit'
        component={EditItemFormContainer}
      />
      <Route exact path='/items/:itemId/' component={ItemShowContainer} />
      <Route exact path='/items/' component={ItemIndexContainer} />
      <Route exact path='/:userId/' component={UserShowContainer} />
      <Route exact path='/' component={SplashContainer} />
    </Switch>

    <footer>
      <Footer />
    </footer> */}
  </div>
);

export default App;
