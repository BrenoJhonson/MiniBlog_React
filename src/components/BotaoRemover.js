import React, { Component } from 'react';

class BotaoRemover extends Component {
  render() {
    return (
      <button {...this.props} style={{
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        cursor: 'pointer',
        borderRadius: '5px',
        transition: 'background-color 0.3s ease',
        fontSize: '1em',
        margin: '5px 0',
      }}>
        {this.props.children}
      </button>
    );
  }
}

export default BotaoRemover;
