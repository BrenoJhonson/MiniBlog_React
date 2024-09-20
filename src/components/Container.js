import React, { Component } from 'react';

class Container extends Component {
  render() {
    return (
      <div {...this.props} style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
      }}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
