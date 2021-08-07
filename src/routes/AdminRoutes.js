import React from 'react';
import { Switch } from 'react-router';
import { AdminRoute } from '../components';
import { AdminCheck } from '../views'

const AdminRoutes = () => {
    return (<Switch>
        <AdminRoute exact path="/admin/check" component={AdminCheck} />
    </Switch>);
};

export default AdminRoutes;