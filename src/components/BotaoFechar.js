import React, { Component } from 'react';

class BotaoFechar extends Component {
  render() {
    return (
      <button {...this.props} style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '1.5em',
        cursor: 'pointer'
      }}>
        {this.props.children}
      </button>
    );
  }
}

export default BotaoFechar;
