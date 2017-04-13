import React, {Component} from 'react';

export default class ReactorsFormButtonDOM extends Component {
  render() {
    const style = {
      display: 'block',
      padding: 10,
      ...this.props.style,
    };

    if (this.props.color) {
      style.color = this.props.color;
    }

    return (
      <button
        {...this.props}
        style={style}
        >
        {this.props.children}
      </button>
    );
  }
}
