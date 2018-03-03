import { FETCH_POSTS } from '../actions';

// Default state is an empty object so it handles the initial state without error
export default function(state = {}, action) {
  switch (action.type) {
  // Handle incoming list of posts
  case FETCH_POSTS:
    console.log(action.payload.data); // [ post1, post2 ]
    // Need to transform payload data from array of objects to object of objects
    // { 4: post }

  // Default case returns state object
  default:
    return state;
  }
}