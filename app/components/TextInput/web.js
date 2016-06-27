import React from 'react';

export default (props) => {
  const webProps = {...props};
  const onChange = webProps.onChange;
  delete webProps.onChange;
  const onKeyUp = (event) => {
    if (typeof onChange === 'function') {
      onChange(event.target.value);
    }
  };
  return <input
    type="text"
    {...webProps}
    onChange={(event) => onChange(event.target.value)}
    />;
};
