import React, {PureComponent} from 'react';
import Reactors from 'reactors';
import includes from 'lodash/includes';
import omit from 'lodash/omit';

export default class Input extends PureComponent {
  static acceptedTypes = [
    'email',
    'number',
    'password',
    'search',
    'text',
  ];
  static emailRegex = /^.+@.+\..+$/;
  _isValid = true;
  _errorMessage = '';
  componentWillMount = () => {
    const {value} = this.props;
    const type = this.getType();
    if (this.props.required) {
      if (
        !('value' in this.props) ||
        (
          includes(['email', 'password', 'search', 'tex'], type) &&
          this.props.value === ''
        )
      ) {
        this._isValid = false;
        this._errorMessage = 'Field is required';
      }
    } else {
      switch (this.getType()) {
      case 'email':
        if (!Input.emailRegex.test(value)) {
          this._isValid = false;
          this._errorMessage = 'Email is not valid';
        }
        break;
      }
    }
  };
  render = () => {
    const props = omit(Reactors.props(this.props), [
      ...Input.acceptedTypes,
      'onChangeText',
    ]);
    props.onChange = this.onChange;
    if (Reactors.isMobile()) {
      const {TextInput} = require('react-native');
      let mobileProps = {...props};
      if (mobileProps.email) {
        mobileProps = omit(mobileProps, ['email']);
        mobileProps.keyboardType = 'email-address';
      } else if (mobileProps.number) {
        mobileProps = omit(mobileProps, ['number']);
        mobileProps.keyboardType = 'numeric';
      } else if (mobileProps.password) {
        mobileProps = omit(mobileProps, ['password']);
        mobileProps.secureTextEntry = true;
      }
      return <TextInput {...mobileProps} />;
    }
    return (
      <input
        {...props}
        type={this.getType()}
      />
    );
  }
  onChange = (event) => {
    const {value} = event.target;
    if (this.props.required && value === '') {
      this._isValid = false;
      this._errorMessage = 'Field is required';
    } else {
      switch (this.getType()) {
      case 'email':
        if (!Input.emailRegex.test(value)) {
          this._isValid = false;
          this._errorMessage = 'Email is not valid';
        } else {
          this._isValid = true;
          this._errorMessage = '';
        }
        break;
      default:
        this._isValid = true;
        this._errorMessage = '';
        break;
      }
    }
    if ('onChangeText' in this.props) {
      this.props.onChangeText(value);
    }
  };
  getType = () => {
    const props = Reactors.props(this.props);
    for (const acceptedType of Input.acceptedTypes) {
      if (props[acceptedType]) {
        return acceptedType;
      }
    }
    return 'text';
  };
  isValid = () => this._isValid;
  getErrorMessage = () => this._errorMessage;
}
