import React, { Component } from 'react';

class ListaComentarios extends Component {
  render() {
    return (
      <div {...this.props} style={{
        marginTop: '10px'
      }}>
        {this.props.children}
      </div>
    );
  }
}

export default ListaComentarios;
