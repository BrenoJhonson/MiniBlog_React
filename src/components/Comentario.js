import React, { Component } from 'react';

class Comentario extends Component {
  render() {
    return (
      <div {...this.props} style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '10px'
      }}>
        {this.props.children}
      </div>
    );
  }
}

export default Comentario;
