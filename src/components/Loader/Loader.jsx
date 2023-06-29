import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';

function Loader() {
  return (
    <InfinitySpin
      width="200"
      color="#4fa94d"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default Loader;
