import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Greeting from "./greeting/greeting";
import LoginForm from "./session/login_form";
import SignupForm from "./session/signup_form";
import NewMenuItemForm from "./items/new_menu_item_form";
import NewModifierForm from "./modifiers/new_modifier_form";
import { AuthRoute } from "../util/route_util";
import PartnerHome from "./partner_views/partner_home";
import OrderForm from "./customer_views/order/order_form";

const App = () => (
  <div>
    {/* <h1>Caterhub</h1> */}

    <Switch>
      <AuthRoute exact path='/login/' component={LoginForm} />
      <AuthRoute exact path='/signup/' component={SignupForm} />
      <Route exact path='/menu/new/' component={NewMenuItemForm} />
      <Route exact path='/menu/mods/new/' component={NewModifierForm} />
      <Route exact path='/home/' component={PartnerHome} />
      <Route exact path='/order/' component={OrderForm} />
      <Route exact path='/order/:companyString' component={OrderForm} />

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
