import React, { Component } from 'react';

class TituloModal extends Component {
  render() {
    return (
      <h2 {...this.props} style={{
        margin: '0 0 10px 0'
      }}>
        {this.props.children}
      </h2>
    );
  }
}

export default TituloModal;
