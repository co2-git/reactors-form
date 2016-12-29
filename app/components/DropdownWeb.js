// @flow

import React from 'react';
import _ from 'lodash';
import {Gesture} from 'reactors';

type PROPS = {
  data: {
    label: string,
    key: any,
  }[],
  selected: any,
};

export default function DropdownWeb(props: PROPS) {
  const handlers = Gesture.handlers({
    ...props,
    onChange: (value) => {
      if (typeof props.onChange === 'function') {
        props.onChange(value);
      }
    },
  });
  const webProps = _.omit(handlers, ['data']);
  const options = props.data.map((item) => (
    <option
      value={item.key}
      key={item.key}
      >
      {item.label}
    </option>
  ));
  return (
    <select {...webProps} value={props.selected}>
      {options}
    </select>
  );
}
