import React, {Component} from 'react';
import _ from 'lodash';
import {Gesture} from 'reactors';

export default class TextInputWeb extends Component {
  render() {
    const gestures = Gesture.handlers({
      ...this.props,
      onChange: (event) => {
        if (typeof this.props.onChange === 'function') {
          this.props.onChange(event.target.value);
        }
      },
    });
    const webProps = _.omit(gestures, ['throttle']);
    return (
      <input
        type="text"
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
