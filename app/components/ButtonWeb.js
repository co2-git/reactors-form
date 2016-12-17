import React from 'react';
import Reactors, {Gesture} from 'reactors';

export default function ButtonWeb (props) {
  const webProps = Reactors.props(props);
  return (
    <button
      {...webProps}
      style={{
        display: 'block',
        padding: 10,
        ...webProps.style,
      }}
      >
      {props.children}
    </button>
  );
}
