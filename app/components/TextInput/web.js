import React from 'react';
import _ from 'lodash';

export default (props) => {
  const webProps = {...props};
  return <input
    type="text"
    {..._.omit(webProps, ['onChange'])}
    onChange={(event) => {
      if (typeof webProps.onChange === 'function') {
        webProps.onChange(event.target.value);
      }
    }}
    />;
};
