import React, {PureComponent} from 'react';
import {Dimensions, StyleSheet, View} from 'reactors';
import find from 'lodash/find';
import ReactDOM from 'react-dom';

export default class Picker extends PureComponent {
  static defaultProps = {
    data: [],
    renderRow: () => <View />,
  };
  state = {
    collapsed: !this.props.show,
  };
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    this.rect = this.node.getBoundingClientRect();
  }
  componentWillReceiveProps = (nextProps) => {
    this.setState({collapsed: !nextProps.show});
  };
  componentWillUpdate = () => {
    this.rect = this.node.getBoundingClientRect();
  };
  render = () => {
    const selected = find(this.props.items, {id: this.props.selected});
    return (
      <View>
        <View>
          {this.props.inactive}
        </View>
        <View>
          {ReactDOM.createPortal(
            <View
              style={[
                styles.portal,
                this.state.collapsed && {display: 'none'},
                this.rect && {top: this.rect.top + this.rect.height},
                this.rect && {left: this.rect.left},
                this.rect && {right: Dimensions.get('window').width - (this.rect.left + this.rect.width)},
                this.props.containerStyle,
              ]}
            >
              {this.props.data.map(data => (
                <View
                  key={data[this.props.id]}
                  onClick={() => this.setState({
                    collapsed: true,
                  }, () => {
                    if (typeof this.props.onSelect === 'function') {
                      this.props.onSelect(data[this.props.id]);
                    }
                  })}
                  style={{padding: 8, cursor: 'pointer'}}
                >
                  {this.props.renderRow(data)}
                </View>
              ))}
            </View>,
            document.body,
          )}
        </View>
      </View>
    );
  }
}

const styles = new StyleSheet({
  portal: {
    position: 'absolute',
    top: 0,
    borderWidth: 2,
    backgroundColor: 'white',
    overflow: 'auto',
  },
});
