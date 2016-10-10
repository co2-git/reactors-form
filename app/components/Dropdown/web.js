// @flow

import React from 'react';
import _ from 'lodash';
import {Gesture} from 'reactors';

type PROPS = {
  data: any[],
};

export default function DropdownWeb(props: PROPS) {
  const handlers = Gesture.handlers({
    ...props,
    onChange: (event) => {
      if (typeof props.onChange === 'function') {
        props.onChange(event.target.value);
      }
    },
  });
  const webProps = _.omit(handlers, ['data']);
  const options = props.data.map(d => (
    <option value={d.key} key={d.key}>{d.label}</option>
  ));
  return (
    <select {...webProps}>
      {options}
    </select>
  );
}
