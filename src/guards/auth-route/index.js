import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const AuthRoute = ({ ...props }) => {
    // const isAuthenticated = useSelector(state => state.ath.token !== null);

    // if (!isAuthenticated) {
    //     return <Navigate to={'/auth'} />
    // }

    return (
        <Route {...props} />
    );
}

export default AuthRoute;