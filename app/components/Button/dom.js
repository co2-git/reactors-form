import React from 'react';
import {Gesture} from 'reactors';

export default (props) => (
  <button
    {...props}
    {...Gesture.handlers(props)}
    style={[
      {display: 'block'},
      props.style,
    ]}
    >
    {props.children}
  </button>
);
