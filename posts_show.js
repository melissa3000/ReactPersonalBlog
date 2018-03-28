import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back To Index</Link>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
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