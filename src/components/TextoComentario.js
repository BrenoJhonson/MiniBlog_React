import React, { Component } from 'react';

class TextoComentario extends Component {
  render() {
    return (
      <p {...this.props} style={{
        margin: '0',
        fontSize: '1em',
        color: '#333'
      }}>
        {this.props.children}
      </p>
    );
  }
}

export default TextoComentario;
