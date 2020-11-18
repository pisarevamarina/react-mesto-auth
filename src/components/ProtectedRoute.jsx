import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ loginIn, ...props }) => {
    return (
        <Route>
            {
                () => loginIn ? <Route {...props} /> : <Redirect to='/sign-in' />
            }
        </Route>
    )
}

export default ProtectedRoute