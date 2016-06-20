reactors-form
===

Form components for the [Reactors](https://github.com/co2-git/reactors) framework.

Reactors is a framework based on React to build hybrid apps that run web, mobile and desktop.

# Install

```bash
npm i -S reactors-form
```

# Usage

```javascript
import React, {Component} from 'react';
import {View} from 'reactors';
import {TextInput} from 'reactors-form';

class MyForm extends Component {
  render() {
    return (
      <View>
        <TextInput />
      </View>
    );
  }
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
