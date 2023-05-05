import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  const isLoggedIn = (sessionStorage.getItem('token') !== null);

  return (
    <Route
      {...rest}
      render={props =>{
        return isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
        )
      }
      }
    />
  )
}

export default PrivateRoute;