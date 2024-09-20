import React, { Component } from 'react';

class ContenedorImagem extends Component {
  render() {
    return (
      <div {...this.props} style={{
        width: '200px',
        height: '150px',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />
    );
  }
}

export default ContenedorImagem;
