import React from 'react';
import _ from 'lodash';
import {Gesture} from 'reactors';

export default (props) => {
  const webProps = Gesture.handlers({
    ...props,
    onChange: (event) => {
      if (typeof props.onChange === 'function') {
        props.onChange(event.target.value);
      }
    },
  });
  return <input
    type="text"
    {...webProps}
    />;
};
