import React, { Component } from 'react';

class BotaoCurtir extends Component {
  render() {
    const { disabled, onClick } = this.props;
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        style={{
          backgroundColor: disabled ? '#6c757d' : '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 15px',
          cursor: disabled ? 'not-allowed' : 'pointer',
          borderRadius: '5px',
          fontSize: '1em',
          marginRight: '10px',
          transition: 'background-color 0.3s ease'
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

export default BotaoCurtir;
