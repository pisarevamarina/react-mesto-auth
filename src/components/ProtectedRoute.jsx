import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ loginIn, ...props }) => {
    return (
        <Route>
            {
                () => props.loggedIn ? <Route {...props} /> : <Redirect to='/signIn' />
            }
        </Route>
    )
}

export default ProtectedRoute