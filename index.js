import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';

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

// Add action creator to post new blog posts (values) to API
export function createPost(values) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

  return  {
    type: CREATE_POST,
    payload: request
  };
}