import React, { Component } from 'react';

class ContenedorCartao extends Component {
  render() {
    return (
      <div {...this.props} style={{
        display: 'flex',
        marginBottom: '20px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        overflow: 'hidden'
      }}>
        {this.props.children}
      </div>
    );
  }
}

export default ContenedorCartao;
