import React, { Component } from 'react';

class BotaoSubmit extends Component {
  render() {
    return (
      <button {...this.props} type="submit" style={{
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '5px',
        fontSize: '1em',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        ':hover': {
          backgroundColor: '#0056b3'
        }
      }}>
        {this.props.children}
      </button>
    );
  }
}

export default BotaoSubmit;
