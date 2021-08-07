import React from 'react';
import { Switch } from 'react-router';
import { UserRoute } from '../components';
import { UserCheck } from '../views'

const UserRoutes = () => {
    return (<Switch>
        <UserRoute exact path="/user/check" component={UserCheck} />
    </Switch>);
};

export default UserRoutes;