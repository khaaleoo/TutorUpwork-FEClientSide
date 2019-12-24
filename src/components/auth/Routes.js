/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../context/auth';

export const StudentRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useAuth();
  const render = props => {
    if (!authTokens) return <Redirect to="/login" />;
    if (authTokens.user && authTokens.user.role === 'student') return <Component {...props} />;
    return <Redirect to="/" />;
  };
  return <Route {...rest} render={render} />;
};

export const TutorRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useAuth();

  const render = props => {
    if (!authTokens) return <Redirect to="/login" />;
    if (authTokens.user && authTokens.user.role === 'tutor') {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  };
  return <Route {...rest} render={render} />;
};
export const UserRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useAuth();
  const render = props => {
    if (!authTokens.token) return <Redirect to="/login" />;
    return <Component {...props} />;
  };
  return <Route {...rest} render={render} />;
};
export const NonUserRoute = ({ component: Component, ...rest }) => {
  const { authTokens } = useAuth();
  const render = props => {
    if (authTokens.token) return <Redirect to="/" />;
    return <Component {...props} />;
  };
  return <Route {...rest} render={render} />;
};
