reactors-form
===

Form components for the [Reactors](https://github.com/co2-git/reactors) framework.

Reactors is a framework based on React to build hybrid apps that run web, mobile and desktop.

# Install

```bash
yarn add react reactors reactors-form
```

# Usage

```javascript
import React, {PureComponent} from 'react';
import {Text, View} from 'reactors';
import {Button, Input, Picker} from 'reactors-form';

const teams = [
  {id: 1, name: 'Red'},
  {id: 2, name: 'Blue'},
  {id: 3, name: 'Green'},
];

class LoginForm extends PureComponent {
  state = {
    email: null,
    error: null,
    team: null,
  };
  render = () => (
    <View>
      {this.state.error && <Text>{this.state.error}</Text>}
      <Input
        email
        name="email"
        value={this.state.email}
        onChangeText={email => this.setState({email})}
      />
      <Picker
        data={teams}
        id="id"
        renderRow={team => (
          <Text>{team.name}</Text>
        )}
        onSelect={teamId => this.setState({team: teamId})}
      />
      <Button onPress={this.submit}>Login</Button>
    </View>
  );
  submit = () => {
    if (!Input.isValid('email')) {
      this.setState({error: Input.getErrorMessage('email')});
    } else {
      this.setState({error: ''}, () => {
        this.props.submit(this.state.email, this.state.team);
      });
    }
  };
}

```

# Components

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

### `onPress: (event: Event) => void`

A function to be called when user presses button.

### `style: any`

A style that can overwrite button's default style.

## `<Input />`

### `confirm: boolean` default `false`

**Only applicable with `password`**. Show a second input to confirm password. If the two passwords do not match, it will fail on validate.

```javascript
<Input
  confirm
  password
/>
```

### `email: boolean` default `false`

It will fail on validate if not a valid email address. You can specify your own regex via `match`.

```javascript
<Input
  email
  match={/\.gmail\.com$/}
/>
```

### `max: number | Date` default `Infinity`

If it is a text input, it will fail to validate if characters length is greater than `max`.
It it is a number, it will fail to validate if value is greater than `max`.
If it is a date, it will fail to validate if value is after `max`.

```javascript
<Input
  max={100}
/>

<Input
  number
  max={100}
/>

<Input
  date
  max={Date.now()}
/>
```

### `min: number | Date` default `Infinity`

If it is a text input, it will fail to validate if characters length is lesser than `min`.
It it is a number, it will fail to validate if value is lesser than `min`.
If it is a date, it will fail to validate if value is before `min`.

```javascript
<Input
  min={100}
/>

<Input
  number
  min={100}
/>

<Input
  date
  min={Date.now()}
/>
```

### `onChange: (value: string) => void`

An action called every time the input changes. First argument is input's current value.

### `required: boolean` default `false`

It will fail on validate if value is empty.

```javascript
<Input
  required
/>
```

## `<Range>`

## `<Switch>`
