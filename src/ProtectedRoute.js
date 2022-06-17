import React from "react";
import {Route, Redirect, Routes } from "react-router-dom";
const ProtectedRoute = ({Auth, component: Component, ...rest}) => {
    console.log(Auth)
    return (
        <Route
          {...rest}
          render={(props) => {
              if (Auth) return <Component {...props} />;
              if (!Auth) return <Redirect to={{path:"/", state:{from: props.location}}}/>
          }}
        />
    );
};
export default ProtectedRoute;