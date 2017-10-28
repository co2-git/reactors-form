// @flow

import React, {Component} from 'react';
import omit from 'lodash/omit';
import {Gesture} from 'reactors';

type ReactorsFormInputWebProps = {
  date?: boolean,
  email?: boolean,
  number?: boolean,
  phone?: boolean,
  url?: boolean,
  value?: string | number | Date,
};

export default class ReactorsFormInputWeb extends Component {

  static EMAIL_REGEX = /^.+@.+$/;

  static omit = [
    'autoCapitalize',
    'autoCorrect',
    'blurOnSubmit',
    'keyboardType',
    'multiline',
    'onChangeText',
    'placeholderTextColor',
    'throttle',
    'underlineColorAndroid',
  ];

  static defaultStyle = {
    boxSizing: 'border-box',
    display: 'block',
    width: '100%',
  };

  input: ReactElement;

  state = {
    value: this.props.value || '',
  };

  componentWillReceiveProps(nextProps: ReactorsFormInputWebProps) {
    if (('value' in nextProps) && nextProps.value !== this.props.value) {
      this.setState({value: nextProps.value});
    }
  }

  getType() {
    switch (true) {

    case this.props.date:
      return 'date';

    case this.props.email:
      return 'email';

    case this.props.number:
      return 'number';

    case this.props.password:
      return 'password';

    case this.props.phone:
      return 'phone';

    case this.props.url:
      return 'url';

    default:
      return 'text';
    }
  }

  onChange = ({target: {value}}) => {
    this.setState({value});
  };

  render() {
    const type = this.getType();

    const props = {
      onChange: this.onChange,
      style: {
        ...ReactorsFormInputWeb.defaultStyle,
        ...this.props.style,
      },
      type,
      value: this.state.value,
    };

    if (this.props.autoFocus) {
      props.autoFocus = true;
    }

    if (this.props.required) {
      props.required = true;
    }

    if (this.props.placeholder) {
      props.placeholder = this.props.placeholder;
    }

    return (
      <input
        {...props}
        ref={(input) => {
          this.input = input;
        }}
      />
    );
  }

  validate() {
    const validator = {
      error: null,
      value: this.state.value,
    };

    try {
      if (this.props.required && !validator.value) {
        throw new Error('Required field missing');
      }
      switch (this.getType()) {

      case 'email':
        if (
          typeof validator.value === 'string' &&
          !ReactorsFormInputWeb.EMAIL_REGEX.test(validator.value)
        ) {
          throw new Error('Email format is not valid');
        }
        break;

      }
    } catch (error) {
      validator.error = error;
    }

    return validator;
  }
}
