import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';
export const DELETE_POST = 'delete_post';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=anyrandomkey12345'


// Fetches a list of posts and returns them to the reducer.
// This action creator reaches out to the API to make a request to fetch posts.
// When a network request (API call) is made within an action creator, it requires
// Axios to make the actual request and Redux Promise to deal with asynchronicity
// of the request.
export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

// Add action creator to post new blog posts (values) to API.
// Build in a promise so that the user only navigates back to the posts page after the API request
// has completed.
export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
    .then(() => callback());

  return  {
    type: CREATE_POST,
    payload: request
  };
}

// Add action creator to fetch given post
export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}