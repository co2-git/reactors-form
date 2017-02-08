import React, {Component} from 'react';
import _ from 'lodash';
import Reactors, {Gesture} from 'reactors';

export default class NumberInputWeb extends Component {
  render() {
    const gestures = Gesture.handlers({
      ...this.props,
      onChange: (event) => {
        if (typeof this.props.onChange === 'function') {
          this.props.onChange(event.target.value);
        }
      },
    });

    const webProps = Reactors.props(_.omit(gestures, ['throttle']));

    return (
      <input
        type="number"
        style={{
          display: 'block',
          width: '100%',
          ...this.props.style,
        }}
        {...webProps}
        />
    );
  }
}
