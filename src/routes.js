import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Candidates from './pages/Candidates';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Candidates} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;