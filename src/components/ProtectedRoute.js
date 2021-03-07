import React from 'react';
import { Redirect } from 'react-router-dom';

function ProtectedRoute({component}) {
    const Component = component;
    const token = localStorage.getItem('token');
    return token ? (
        <Component/>
    ) : (
        <Redirect to={{ pathname: '/login'}}/>
    )
}

export default ProtectedRoute;