import React, { Component } from 'react';
// Wire up the fetch posts action creator to the post index component
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {
// React lifecycle method (componentDidMount) is a function on a component class
// that is automatically called by react. This function will get automatically called
// by React immediately after this component shows up inside the DOM.
  componentDidMount() {
    // Kicks off data loading process
    this.props.fetchPosts();
  }

  // Helper function to render posts to screen. Map over all posts in object and
  // create one li for each post that we fetch
  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);

