/* eslint-disable import/prefer-default-export */
import React, { useState } from 'react';
import './index.scss';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import { verifyUser } from './actions';

export const VerifyEmail = props => {
  const [redirect, setDone] = useState(false);
  const { location } = props;
  const parsed = queryString.parse(location.search);
  console.log(parsed);
  if (!redirect) {
    setTimeout(
      () =>
        verifyUser(parsed.code, parsed.id)
          .then(res => {
            if (res.status === 'OK') Swal.fire('Thông báo', 'XÁC THỰC THÀNH CÔNG');
            else Swal.fire('Thông báo', 'XÁC THỰC THẤT BẠI');
          })
          .finally(() => setDone(true)),
      2000,
    );
  }
  if (redirect) return <Redirect to="/login" />;
  return (
    <div className="loader-wrapper">
      {/* {popup} */}
      <div className="loader">
        <div className="roller" />
        <div className="roller" />
      </div>
      <div id="loader2" className="loader">
        <div className="roller" />
        <div className="roller" />
      </div>
      <h1>Redirecting</h1>
      <div id="loader3" className="loader">
        <div className="roller" />
        <div className="roller" />
      </div>
    </div>
  );
};
