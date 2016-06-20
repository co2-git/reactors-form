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
