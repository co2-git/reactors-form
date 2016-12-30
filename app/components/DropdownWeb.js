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
  onChange?: Function,
};

function stringify(value) {
  if (typeof value === 'string') {
    return `"${value}"`;
  }
  return JSON.stringify(value);
}

export default function DropdownWeb(props: PROPS) {
  const handlers = Gesture.handlers({
    ...props,
    onChange: ({target: {value}}) => {
      if (typeof props.onChange === 'function') {
        props.onChange(JSON.parse(value));
      }
    },
  });
  const webProps = _.omit(handlers, ['data']);
  const options = props.data.map((item) => (
    <option
      value={stringify(item.key)}
      key={stringify(item.key)}
      >
      {item.label}
    </option>
  ));
  const attrs = {};
  if (('selected' in props)) {
    attrs.value = stringify(props.selected);
  }
  return (
    <select {...webProps} {...attrs}>
      {options}
    </select>
  );
}
