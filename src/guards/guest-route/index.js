import React from 'react';
import { Route } from 'react-router-dom';

const GuestRoute = ({ ...props }) => {
    return (
        <Route {...props} />
    );
}

export default GuestRoute;