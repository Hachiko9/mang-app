import React from "react";
import {Route, Redirect} from "react-router-dom";

const ProtectedRoute = ({ Component, ...rest }) => {

    if (Object.keys(rest.user).length) {
        return (
            <div>
                <Route {...rest} render={(otherProps) => (<Component {...otherProps} {...rest} />)}/>
            </div>
        );
    }

    return <Redirect to={{ pathname: '/' }} />;
};

export default ProtectedRoute;
