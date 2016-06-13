reactors-form
===

Form components for the [Reactors](https://github.com/co2-git/reactors) framework.

Reactors is a framework based on React to build hybrid apps that run web, mobile and desktop.

# Install

```bash
npm i -S reactors-form
```

# Usage

```js
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
