import React from "react";
import {Route} from "react-router-dom";

const PublicRoute = ({Component, hideNav, ...rest}) => (
        <Route {...rest} render={(otherProps) => <Component {...otherProps} {...rest} />}/>
);
export default PublicRoute;
