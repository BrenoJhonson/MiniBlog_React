import React, { Component } from 'react';

class IconePerfil extends Component {
  render() {
    return (
      <div {...this.props} style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: '#007bff',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: '10px',
        fontSize: '1.2em',
        textAlign: 'center'
      }}>
        {this.props.children}
      </div>
    );
  }
}

export default IconePerfil;
