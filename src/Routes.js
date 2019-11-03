import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./Components/App";
// import HeaderBar from "./CommonComponents/HeaderBar";
// import LoginForm from "./components/Scenes/Login/Scenes/LoginForm/LoginForm";
// import ResetPassword from "./components/Scenes/Login/Scenes/ResetPassword/Components/ResetPassword";
// import TFA from "./components/Scenes/Login/Scenes/TFA/TFA";
// import ResetByEmail from "./components/Scenes/Login/Scenes/ResetPassword/Components/ResetByEmail";
// import ChangePassword from "./components/Scenes/Login/Scenes/ResetPassword/Components/ChangePassword";

const Routes = () => (
  <Switch>
    {/* <Route exact path="/test" component={HeaderBar} /> */}
    {/* <Route exact path="/" component={LoginForm} />
    <Route exact path="/login" component={LoginForm} />
    <Route exact path="/resetpassword" component={ResetPassword} />
    <Route exact path="/changepassword" component={ChangePassword} />
    <Route exact path="/resetbyemail" component={ResetByEmail} /> */}
    <Route component={App} />
  </Switch>
);

export default Routes;
