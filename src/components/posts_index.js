import React, { Component } from 'react';
// Wire up the fetch posts action creator to the post index component
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
// React lifecycle method (componentDidMount) is a function on a component class
// that is automatically called by react. This function will get automatically called
// by React immediately after this component shows up inside the DOM.
  componentDidMount() {
    // Kicks off data loading process
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

// Get action creator directly into a component
// Wire up the connect helper, null is map state to props argument because we are
// not passing map state to props, pass in action creator itself as second argument
// instead of using map dispatch to props function (still works the same)
export default connect(null, { fetchPosts })(PostsIndex);

