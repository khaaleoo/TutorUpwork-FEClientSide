import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../context/auth';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();
  console.log('authToken', authTokens);
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      // eslint-disable-next-line react/jsx-props-no-spreading
      render={props => (authTokens ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
}

export default PrivateRoute;
