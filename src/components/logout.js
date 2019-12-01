import React from 'react';
import { Button } from 'antd';
import { useAuth } from '../context/auth';

const Logout = () => {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return <Button onClick={logOut}>Log out</Button>;
};
export default Logout;
