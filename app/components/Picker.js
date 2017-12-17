import React, {PureComponent} from 'react';
import {Row, Stack} from 'reactors-grid';
import {Dimensions, StyleSheet, Text, View} from 'reactors';
import find from 'lodash/find';
import {Button} from 'reactors-form';
import ReactDOM from 'react-dom';

type $ItemId =
  | string
  | number
  ;

type $Item = {|
  +id: $ItemId,
  +value: string | number | boolean,
|};

type $DropDownMergedProps = {
  items: $Item[],
  selected: $ItemId,
};

export default class DropDown extends PureComponent {
  static defaultProps = {
    data: [],
    renderRow: () => <View />,
  };
  props: $DropDownMergedProps;
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
  container: {
    boxSizing: 'borderBox',
    alignItems: 'center',
  },
  dropDown: {
    backgroundColor: 'white',
    height: 200,
    overflow: 'auto',
    position: 'absolute',
  },
  item: {
    padding: 4,
  },
  portal: {
    position: 'absolute',
    top: 0,
    borderWidth: 2,
    backgroundColor: 'white',
    overflow: 'auto',
  },
});
