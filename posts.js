// PASSOS:

// 1- INITAL STATE

const initialState = {
  posts: [],
};

// 2- ACTIONS

// ADD POSTS
const addPostAction = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

// REMOVE POSTS
const removePostAction = (id) => {
  return {
    type: "REMOVE_POST",
  };
};

// 3- REDUCERS

const postReducer = (state = initialState, action) => {};

// 4- STORE

// 5- DISPATCH
