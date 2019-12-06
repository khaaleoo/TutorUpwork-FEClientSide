import React from 'react';
import { Button } from 'antd';
import { useAuth } from '../../context/auth';

const Logout = () => {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <Button
      type="primary"
      className="login-form-button"
      style={{ fontWeight: 'bold', marginBottom: '10px' }}
      onClick={logOut}
    >
      Đăng xuất
    </Button>
  );
};
export default Logout;
