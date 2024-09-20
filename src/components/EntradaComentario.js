import React, { Component } from 'react';

class EntradaComentario extends Component {
  render() {
    return (
      <input {...this.props} style={{
        width: '80%',
        padding: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '1em',
        marginBottom: '10px'
      }} />
    );
  }
}

export default EntradaComentario;
