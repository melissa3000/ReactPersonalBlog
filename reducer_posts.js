import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';

// Default state is an empty object so it handles the initial state without error
export default function(state = {}, action) {
  switch (action.type) {
  // Handle incoming list of posts
  case FETCH_POST:
  // Return previously fetched posts in addition to post currently fetching.
  // Code after the comma is setting a key:value pair (brackets here indicate key interpolation)
    return { ...state, [action.payload.data.id]: action.payload.data };
  // Does the same thing as above, but in ES5 syntax
    // const post = action.payload.data;
    // const newState = { ...state };
    // newState[post.id] = post;
    // return newState;

  case FETCH_POSTS:
    // Convert payload data from array of objects to an object of objects using the
    // id as the key with lodash mapKeys
    return _.mapKeys(action.payload.data, 'id');

  // Default case returns state object
  default:
    return state;
  }
}