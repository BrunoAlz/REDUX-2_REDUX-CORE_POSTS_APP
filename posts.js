const { createStore } = require("redux");

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

const postReducer = (state = initialState, action) => {
  if (action.type === "ADD_POST") {
    return {
      // Pegamos o array de post que está no state e desestruturamos os dados
      // assim os dados do estado anterior permanecerão junto com os dados da Action passada
      posts: [...state.posts, action.post],
    };
  } else if (action.type === "REMOVE_POST") {
    return {
      posts: state.posts.filter((post) => {
        return post.id !== action.id;
      }),
    };
  } else {
    return state;
  }
};

// 4- STORE

const store = createStore(postReducer);

// 5- DISPATCH
