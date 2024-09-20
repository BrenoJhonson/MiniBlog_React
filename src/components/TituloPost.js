import React, { Component } from 'react';

class TituloPost extends Component {
  render() {
    return (
      <h1 {...this.props} style={{
        fontSize: '1.5em',
        marginBottom: '10px'
      }}>
        {this.props.children}
      </h1>
    );
  }
}

export default TituloPost;
