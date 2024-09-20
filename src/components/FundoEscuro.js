import React, { Component } from 'react';

class FundoEscuro extends Component {
  render() {
    return (
      <div {...this.props} style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999
      }} />
    );
  }
}

export default FundoEscuro;
