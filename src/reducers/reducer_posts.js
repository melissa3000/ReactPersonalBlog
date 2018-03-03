import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

// Default state is an empty object so it handles the initial state without error
export default function(state = {}, action) {
  switch (action.type) {
  // Handle incoming list of posts
  case FETCH_POSTS:
    // Convert payload data from array of objects to an object of objects using the
    // id as the key with lodash mapKeys
    return _.mapKeys(action.payload.data, 'id');

  // Default case returns state object
  default:
    return state;
  }
}