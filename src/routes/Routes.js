import React from 'react';
import {Switch} from 'react-router-dom';
import PublicRoute from "./PublicRoute";
import AddManga from '../Pages/AddManga';
import AllMangas from '../Pages/AllMangas';


const Routes = (props) => (
    <Switch>
        <PublicRoute {...props} exact path="/add-manga" Component={AddManga} />
        <PublicRoute {...props} exact path="/" Component={AllMangas} />
    </Switch>
);

export default Routes;
