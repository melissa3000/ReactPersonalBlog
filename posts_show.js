import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  // When this component appears on screen, we'll automatically fetch the post and add it to the post
  // piece of state.
  componentDidMount() {
    // Used to get access to post ID in URL so that we're displaying the specified post
    const { id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    return (
      <div>
        Posts Show!
      </div>
    );
  }
}

// Given application state and ownProps. ownProps is the object that is headed to the component above.
// It's equal to this.props
function mapStateToProps({ posts }, ownProps) {
  // Component will only receive the single post we care about instead of the full posts object  
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost }) (PostsShow);