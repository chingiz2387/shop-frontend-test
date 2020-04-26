import React from "react";
import {Redirect, Route, Switch} from "react-router";
import Products from "./containers/Products/Products";
import NewProduct from "./containers/NewProduct/NewProduct";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

const ProtectedRoute = props => {
    return props.isAllowed ? <Route {...props} /> : <Redirect to="/" />
};

const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={Products}/>
            <ProtectedRoute
                path="/products/new"
                component={NewProduct}
                isAllowed={user && user.role === "admin"}
            />
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
        </Switch>
    )
};

export default Routes;
