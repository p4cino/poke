import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from './pages/Home';

const NotFound = () => <div>Not found page</div>;

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route component={NotFound}/>
        </Switch>
    );
};

export default Router;
