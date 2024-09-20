import React, { Component } from 'react';

class ContenedorFormulario extends Component {
  render() {
    return (
      <div {...this.props} style={{
        marginBottom: '20px'
      }}>
        {this.props.children}
      </div>
    );
  }
}

export default ContenedorFormulario;
