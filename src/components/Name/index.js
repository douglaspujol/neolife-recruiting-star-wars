/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function Name({ url }) {
  const [info, setInfo] = useState('');
  useEffect(() => {
    async function getName() {
      const response = await fetch(url);
      const data = await response.json();
      const { name } = data;
      setInfo(name);
    }
    getName();
  }, []);

  return (
    <>
      <p>{info || 'Não Possui'}</p>
    </>
  );
}

Name.propTypes = {
  url: PropTypes.string,
};
