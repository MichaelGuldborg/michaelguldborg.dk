import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AdminApp from "./AdminApp";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import routes from "./constants/routes";
import "./api/GAService";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path={routes.index} component={App}/>
            <Route exact path={routes.admin} component={AdminApp}/>
            <Route exact path={routes.javatutoring} render={() => {window.location.href=routes.javatutoring}} />
            <Route exact path={routes.drivelog} render={() => {window.location.href=routes.drivelog}} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
