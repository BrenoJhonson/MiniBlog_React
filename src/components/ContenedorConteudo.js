import React, { Component } from 'react';

class ContenedorConteudo extends Component {
  render() {
    return (
      <div {...this.props} style={{
        flex: '1',
        padding: '20px'
      }}>
        {this.props.children}
      </div>
    );
  }
}

export default ContenedorConteudo;
