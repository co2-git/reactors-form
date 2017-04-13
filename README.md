reactors-form
===

Form components for the [Reactors](https://github.com/co2-git/reactors) framework.

Reactors is a framework based on React to build hybrid apps that run web, mobile and desktop.

# Install

```bash
yarn add reactors-form
```

# Usage

```javascript
import React, {PureComponent} from 'react';
import {Text, View} from 'reactors';
import {Button, Input} from 'reactors-form';

class MyForm extends PureComponent {
  email: Input;
  password: Input;

  state = {
    error: null,
  };

  render() {
    return (
      <View>
        <Text bold size={24}>Login</Text>
        {
          this.state.error &&
          <Text color="red">{this.state.error.message}</Text>
        }
        <Input
          ref={(email) => {
            this.email = email;
          }}
          required
        />
        <Input
          confirm
          match={[/\W/, /\w/, /\d/]}
          max={16}
          min={4}
          password
          ref={(password) => {
            this.password = password;
          }}
          required
        />
        <Button onPress={this.submit}>
          Login
        </Button>
      </View>
    );
  }

  submit = () => {
    const email = this.email.validate();
    const password = this.password.validate();

    if (!email.isValid) {
      this.setState({error: email.error});
    } else if (!password.isValid) {
      this.setState({error: password.error});
    } else {
      this.setState({
        error: null,
      }, () => {
        login(email.value, password.value);
      });
    }
  };
}
```

# Components

## `<TextInput />`

```javascript
import React, {Component} from 'react';
import {TextInput} from 'reactors-form';

class MyTextInput extends Component {
  state = {value: null};
  render() {
    return (
      <TextInput
        value={this.state.value}
        onChange={(value) => this.setState({value})}
        />
    );
  }
}
```

### Props

#### `value: string`

A stringable value.

### `onChange: (value: string) => void`

An action called every time the input changes. First argument is input's current value.

## `<Button>`

```javascript
import React, {Component} from 'react';
import {Button} from 'reactors-form';

class MyButton extends Component {
  render() {
    return (
      <Button onPress={(event) => console.log('Pressed!')}>
        Some text or components here ...
      </Button>
    );
  }
}
```

### Props

#### `onPress: (event: React$Event) => void`

A function to be called when user presses button.

### `style: $Style`

A style that can overwrite button's default style.
