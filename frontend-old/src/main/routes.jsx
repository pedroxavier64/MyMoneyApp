import React from 'react'
import {Router, Route,IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import AuthOrApp from './authOrApp'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={AuthOrApp}>
            <IndexRoute component={Dashboard}/>
            <Route path="/billingCycles" component={BillingCycle}/>
        </Route>
        <Redirect to="*" from="/" />
    </Router>
)

