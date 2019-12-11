import React from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { useAuth } from '../../context/auth';
import { logOut } from '../../reducers/actions';

const Logout = props => {
  const { setAuthTokens } = useAuth();
  const { out } = props;

  function logout() {
    setAuthTokens();
    out();
  }

  return (
    <Button
      type="primary"
      className="login-form-button"
      style={{ fontWeight: 'bold', marginBottom: '10px' }}
      onClick={logout}
    >
      Đăng xuất
    </Button>
  );
};
Logout.propTypes = {
  out: PropTypes.func.isRequired,
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = run => {
  return {
    out: () => run(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
