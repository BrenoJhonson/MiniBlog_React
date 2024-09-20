import React, { Component } from 'react';

class ExcertoPost extends Component {
  render() {
    return (
      <p {...this.props} style={{
        color: '#666',
        fontSize: '1em'
      }}>
        {this.props.children}
      </p>
    );
  }
}

export default ExcertoPost;
