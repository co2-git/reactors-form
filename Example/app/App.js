import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'reactors';
import {TextInput} from 'reactors-form';
import {Row} from 'reactors-grid';

export default class App extends Component {
  state = {
    placeholder: '',
    value: '',
  };

  render() {
    return (
      <View>
        <Text>Reactors Form</Text>

        <View
          style={{
            marginBottom: 10,
            borderTopWidth: 1,
            borderTopColor: 'black',
            borderTopStyle: 'solid',
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            borderBottomStyle: 'solid',
          }}
          >
          <Row left>
            <Text style={{color: '#ccc'}}>{'<'}</Text>
            <Text style={{fontWeight: 'bold'}}>TextInput</Text>
          </Row>

          <Row>
            <Text style={styles.propName}>placeholder=</Text>
            <TextInput
              placeholder="Text of placeholder"
              value={this.state.placeholder}
              onChange={(placeholder) => this.setState({placeholder})}
              />
          </Row>

          <Row left>
            <Text style={styles.propName}>value=</Text>
            <Text style={{fontStyle: 'italic'}}>"{this.state.value}"</Text>
          </Row>

          <Row left>
            <Text style={styles.propName}>onChange=</Text>

            <Text style={{fontStyle: 'italic'}}>
              {'{'}(value) => this.setState({'{value}'}){'}'}
            </Text>
          </Row>

          <Text style={{color: '#ccc', marginLeft: 30}}>{'/>'}</Text>

          <TextInput
            style={{
              fontSize: 16,
              padding: 4,
            }}
            placeholder={this.state.placeholder}
            value={this.state.value}
            onChange={(value) => this.setState({value})}
            />
        </View>
      </View>
    );
  }
}

const styles = new StyleSheet({
  propName: {
    marginLeft: 30,
  },
});
