import React from 'react';

const introduce = props => {
  const { intro } = props;
  return <div className="contractInfo" dangerouslySetInnerHTML={{ __html: intro }} />;
};

export default introduce;
