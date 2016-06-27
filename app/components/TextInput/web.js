import React from 'react';

export default (props) => {
  const webProps = {...props};
  const onChange = webProps.onChange;
  delete webProps.onChange;
  return <input
    type="text"
    {...webProps}
    onChange={(event) => onChange(event.target.value)}
    />;
};
